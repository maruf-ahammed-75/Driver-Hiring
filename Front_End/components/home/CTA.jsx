'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function CTA() {
    return (
        <div>
            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#5F99AE] text-white py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Take the Wheel?</h2>
                    <p className="text-xl mb-8 opacity-90">Join thousands of professional drivers who found their perfect match</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-[#5F99AE] px-8 py-4 rounded-full text-lg font-semibold"
                    >
                        Apply Now
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}
