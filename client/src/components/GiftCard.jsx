import React from "react";

const GiftCard = ({ title, items }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 w-80">
      <div className="text-5xl mb-2 text-center">🎁</div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex justify-between p-2 rounded ${
              item.status === "Reserved"
                ? "bg-red-100 dark:bg-red-600"
                : item.status === "Available"
                ? "bg-green-100 dark:bg-green-600"
                : "bg-yellow-100 dark:bg-yellow-600"
            }`}
          >
            <span>{item.name}</span>
            <span className="text-sm font-semibold">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCard;
