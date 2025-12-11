// 
import React, { useState } from "react";
import certificates from "../data/cerificates.data";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const Certificates = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="certificates">
      <h2 className="text-2xl font-semibold mb-6 mt-10 text-center flex gap-2 items-center justify-center">
        <FaCertificate /> Certificates & Badges
      </h2>

      {/* CERTIFICATES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
        {certificates.map((c) =>
          c.url ? (
            /** ✔ CASE 1: Certificate has a url → Open in new tab */
            <a
              key={c.id}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-4 rounded-2xl cursor-pointer "
              >
                <div className="mt-3">
                  <div className="font-semibold text-white">{c.name}</div>
                  <div className="text-xs text-gray-400">
                    {c.organization}
                  </div>
                </div>
              </motion.div>
            </a>
          ) : (
            /** ✔ CASE 2: No url → Open modal with image */
            <motion.div
              key={c.id}
              whileHover={{ scale: 1.03 }}
              className="p-4 rounded-2xl cursor-pointer"
              onClick={() => setOpen(c)}
            >
              <div className="mt-3">
                <div className="font-semibold text-white">{c.name}</div>
                <div className="text-xs text-gray-400">
                  {c.organization}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(null)}
          />

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative w-[90%] md:w-[70%] lg:w-[60%] bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{open.name}</h3>
                <div className="text-xs text-gray-400">{open.organization}</div>
              </div>

              <button
                onClick={() => setOpen(null)}
                className="px-3 py-1 m-2 rounded-md"
              >
                Close
              </button>
            </div>

            <div className="mt-4">
              <img
                src={open.img}
                alt={open.name}
                className="w-full h-[60vh] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
