import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  link: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  link,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 max-sm:w-5/6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{content}</p>
        <div className="flex justify-end w-full space-x-2">
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
          <a href={link}>
            <button
              onClick={onClose}
              className="bg-tetra-alt hover:bg-tetra-alt/80 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
