"use client"

import { AnimatePresence, motion } from "framer-motion"
import { AlignJustify, XIcon, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const menuItems = [
  {
    id: 1,
    label: "Hire Drivers",
    href: "/hire",
  },
  {
    id: 2,
    label: "Post a Job",
    href: "/post-job",
  },
  {
    id: 3,
    label: "Careers",
    href: "/careers",
  },
  {
    id: 4,
    label: "Contact Us",
    href: "/contact",
  },
]

export function Navbar() {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const html = document.querySelector("html")
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen)
  }, [hamburgerMenuIsOpen])

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-[#F5ECE0]/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
          <Link className="text-xl font-bold text-gray-800 flex items-center" href="/">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mr-2 h-8 w-8 rounded-md bg-[#5F99AE] flex items-center justify-center text-white"
            >
              D
            </motion.div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              Drive<span className="text-[#5F99AE]">Hire</span>
            </motion.span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: item.id * 0.1 }}
                onHoverStart={() => setActiveItem(item.id)}
                onHoverEnd={() => setActiveItem(null)}
                className="relative"
              >
                <Link
                  className="text-sm font-medium px-4 py-2 rounded-md hover:bg-[#5F99AE]/10 transition-colors relative text-gray-900"
                  href={item.href}
                >
                  {item.label}
                  {activeItem === item.id && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5F99AE] mx-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Link
                className="text-sm font-medium text-[#5F99AE] hover:text-[#5F99AE]/80 px-4 py-2 transition-colors"
                href="/signin"
              >
                Log in
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="text-sm font-medium bg-[#5F99AE] text-white px-5 py-2.5 rounded-md hover:bg-[#5F99AE]/90 transition-colors flex items-center gap-1 shadow-sm"
                href="/signup"
              >
                Sign up <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.button
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-md hover:bg-[#5F99AE]/10 transition-colors"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon className="text-[#5F99AE]" /> : <AlignJustify className="text-[#5F99AE]" />}
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {hamburgerMenuIsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-80 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setHamburgerMenuIsOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-[#F5ECE0] h-screen shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setHamburgerMenuIsOpen(false)}
                    className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-[#5F99AE]/10"
                  >
                    <XIcon className="text-[#5F99AE]" />
                  </motion.button>
                </div>

                <div className="flex flex-col px-6 py-8 space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <Link
                        className="text-lg font-medium text-gray-800 hover:text-[#5F99AE] transition-colors flex items-center"
                        href={item.href}
                        onClick={() => setHamburgerMenuIsOpen(false)}
                      >
                        {item.label}
                        <ChevronRight size={16} className="ml-1 opacity-60" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto border-t border-gray-200 p-6 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      className="w-full text-center block text-[#5F99AE] font-medium py-2.5 border border-[#5F99AE] rounded-md hover:bg-[#5F99AE]/10 transition-colors"
                      href="/signin"
                      onClick={() => setHamburgerMenuIsOpen(false)}
                    >
                      Log in
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      className="w-full text-center block bg-[#5F99AE] text-white font-medium py-2.5 rounded-md hover:bg-[#5F99AE]/90 transition-colors"
                      href="/signup"
                      onClick={() => setHamburgerMenuIsOpen(false)}
                    >
                      Sign up
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

