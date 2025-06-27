'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Innoverse</h3>
          <p className="text-gray-400 mb-8">
            Crafting digital experiences that inspire and transform.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span>© 2024 Innoverse. All rights reserved.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 