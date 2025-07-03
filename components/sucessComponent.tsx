'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface SuccessMessageProps {
  onClose?: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50"
    >
      <motion.div 
        className="bg-white/90 backdrop-blur-md rounded-lg p-8 max-w-md w-full mx-4 shadow-xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Thank you!
          </h2>
          <p className="text-gray-600 mb-6">
            We will contact you as soon as possible!
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};