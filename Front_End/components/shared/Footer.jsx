"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {  Mail } from "lucide-react"
import { FaSquareXTwitter,FaLinkedin, } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";


export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div className="flex flex-col space-y-4 md:max-w-xs">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-[#5F99AE] flex items-center justify-center text-white mr-2">D</div>
              <span className="text-lg font-medium text-gray-800">
                Drive<span className="text-[#5F99AE]">Hire</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500">
              Connecting professional drivers with top opportunities across the country.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm font-medium text-gray-800 mb-1">Company</h3>
              <Link href="/about" className="text-sm text-gray-500 hover:text-[#5F99AE] transition-colors">
                About
              </Link>
              <Link href="/careers" className="text-sm text-gray-500 hover:text-[#5F99AE] transition-colors">
                Careers
              </Link>
              <Link href="/blog" className="text-sm text-gray-500 hover:text-[#5F99AE] transition-colors">
                Blog
              </Link>
            </div>

            <div className="flex flex-col space-y-3">
              <h3 className="text-sm font-medium text-gray-800 mb-1">Services</h3>
              <Link href="/hire" className="text-sm text-gray-500 hover:text-[#5F99AE] transition-colors">
                Hire Drivers
              </Link>
              <Link href="/post-job" className="text-sm text-gray-500 hover:text-[#5F99AE] transition-colors">
                Post a Job
              </Link>
              <Link href="/pricing" className="text-sm text-gray-500 hover:text-[#5F99AE] transition-colors">
                Pricing
              </Link>
            </div>

            <div className="flex flex-col space-y-3">
              <h3 className="text-sm font-medium text-gray-800 mb-1">Support</h3>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-[#5F99AE] transition-colors">
                Contact Us
              </Link>
              <Link href="/help" className="text-sm text-gray-500 hover:text-[#5F99AE] transition-colors">
                Help Center
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-[#5F99AE] transition-colors">
                Privacy
              </Link>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-medium text-gray-800">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="h-8 w-8 rounded-full bg-[#5F99AE]/10 flex items-center justify-center text-[#5F99AE] hover:bg-[#5F99AE]/20 transition-colors"
              >
                <FaSquareXTwitter size={16} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="h-8 w-8 rounded-full bg-[#5F99AE]/10 flex items-center justify-center text-[#5F99AE] hover:bg-[#5F99AE]/20 transition-colors"
              >
                <FaLinkedin size={16} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="h-8 w-8 rounded-full bg-[#5F99AE]/10 flex items-center justify-center text-[#5F99AE] hover:bg-[#5F99AE]/20 transition-colors"
              >
                <IoLogoInstagram size={16} />
              </motion.a>
              <motion.a
                href="mailto:contact@drivehire.com"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="h-8 w-8 rounded-full bg-[#5F99AE]/10 flex items-center justify-center text-[#5F99AE] hover:bg-[#5F99AE]/20 transition-colors"
              >
                <Mail size={16} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-300">
          <p className="text-xs text-gray-500">© {currentYear} DriveHire. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/terms" className="text-xs text-gray-500 hover:text-[#5F99AE] transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-[#5F99AE] transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-[#5F99AE] transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

