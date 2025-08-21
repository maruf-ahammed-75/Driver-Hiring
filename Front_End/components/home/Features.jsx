'use client';
import { motion } from 'framer-motion';
import { Car, Users, Shield } from 'lucide-react';
import React from 'react';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Features() {
    return (
        <div>
            {/* Features Section */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
            >
                <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                    Our Features 
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        variants={fadeIn}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                            borderColor: '#5F99AE'
                        }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent transition-all duration-300 hover:bg-[#F5F9FC]"
                    >
                        <Car className="w-12 h-12 text-[#5F99AE] mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Fleet</h3>
                        <p className="text-gray-600">
                            Access to modern vehicles and flexible schedules tailored to your needs.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                            borderColor: '#5F99AE'
                        }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent transition-all duration-300 hover:bg-[#F5F9FC]"
                    >
                        <Users className="w-12 h-12 text-[#5F99AE] mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Verified Employers</h3>
                        <p className="text-gray-600">
                            Connect with trusted companies offering competitive compensation packages.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                            borderColor: '#5F99AE'
                        }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent transition-all duration-300 hover:bg-[#F5F9FC]"
                    >
                        <Shield className="w-12 h-12 text-[#5F99AE] mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Secure Platform</h3>
                        <p className="text-gray-600">
                            Your safety and security are our top priorities throughout the hiring process.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}