'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Professional Driver',
    feedback:
      'DriveHire has completely transformed my career. I now have access to top companies and flexible schedules that fit my lifestyle.',
    image: '/driver1.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Truck Driver',
    feedback:
      'Thanks to DriveHire, I found a job that values my skills and offers great benefits. Highly recommended!',
    image: '/driver2.png',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Delivery Driver',
    feedback:
      'The platform is easy to use, and the support team is always there to help. DriveHire is a game-changer!',
    image: '/driver3.png',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Testimonial() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Drivers Say
          </h2>
          <p className="text-gray-600 mt-4">
            Hear from drivers who have found success with DriveHire.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}