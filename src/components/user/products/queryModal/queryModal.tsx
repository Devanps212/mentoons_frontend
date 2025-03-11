import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const QueryModal = ({
  category,
  onClose,
}: {
  category: string;
  onClose: (val: boolean) => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center bg-black/50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={modalRef}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl relative mx-4"
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <motion.button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
          onClick={() => onClose(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          &times;
        </motion.button>

        <div className="space-y-6">
          <div className="w-16 h-1 bg-blue-600 rounded-full mb-3"></div>
          <h2 className="text-2xl font-bold text-gray-800">
            Submit Your Query
          </h2>
          <p className="text-gray-600">
            For <span className="font-semibold text-blue-600">{category}</span>
          </p>

          <textarea
            rows={4}
            className="w-full p-4 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-700 placeholder-gray-400 border-gray-200"
            placeholder={`Enter your query about ${category}`}
            value={query}
            required
            onChange={(e) => setQuery(e.target.value)}
          />

          <input
            type="email"
            className="w-full p-4 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-700 placeholder-gray-400 border-gray-200"
            placeholder="your.email@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <motion.button className="w-full py-4 bg-yellow-400 font-medium rounded-lg shadow-lg hover:bg-yellow-300 transition">
            Submit Query
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QueryModal;
