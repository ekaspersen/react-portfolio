import React from "react";
import { motion } from "framer-motion";

export default function LoadyBlobs() {
    return (
        <div className="overflow-hidden">
            <motion.div
                className="h-screen grid place-items-center"
                initial={{ opacity: 1 }}
                animate={{ rotate: 400, opacity: 0 }}
                transition={{
                    duration: 0.9, // Total duration for spins plus fade out
                    ease: "linear",
                }}
            >
                <div className="w-32 h-32 bg-primary-light rounded-full"></div>
                <div className="w-16 h-16 bg-white "></div>
                <div className="w-32 h-32 bg-secondary-light rounded-full"></div>
            </motion.div>
        </div>
    );
}
