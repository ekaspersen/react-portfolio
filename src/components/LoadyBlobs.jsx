import React from "react";
import { easeInOut, motion } from "framer-motion";

export default function LoadyBlobs() {
    return (
        <div className="overflow-hidden">
            <motion.div
                className="h-screen flex justify-center items-center gap-8"
                initial={{ opacity: 1 }}
                animate={{ rotate: 400, opacity: 0, scale: 8 }}
                transition={{
                    duration: 1.5, // Total duration for spins plus fade out
                    ease: easeInOut,
                }}
            >
                <div className="w-4 h-4 bg-primary-light rounded-full"></div>
                <div className="w-4 h-4 bg-secondary-light rounded-full"></div>
            </motion.div>
        </div>
    );
}
