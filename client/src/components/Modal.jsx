import React from "react";
import ContactForm from "./ContactForm";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 w-11/12 max-w-md relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>×</button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

<Modal isOpen={isContactOpen} onClose={() => setContactOpen(false)} title="Get in Touch">
  <ContactForm />
</Modal>

export default Modal;
