import { callOpenAI } from "../services/openaiService.js";
import { callBackupAI } from "../services/backupAiService.js";

export const getAISuggestion = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    let result;
    try {
      result = await callOpenAI(prompt);
    } catch (err) {
      console.warn("OpenAI failed, using backup AI");
      result = await callBackupAI(prompt);
    }
    res.json({ suggestion: result });
  } catch (error) {
    next(error);
  }
};
