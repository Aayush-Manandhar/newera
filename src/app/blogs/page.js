"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from "framer-motion"

import  Roadmap from '@/images/roadmap.jpg'
import Hacker from '@/images/hacker.jpg'
import Computer from '@/images/computer.jpeg'


import Link from 'next/link'
import Image from 'next/image'

function Heading() {
    return (
        <div className="w-full py-12 bg-background">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent pb-2"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Blogs
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-muted-foreground"
            >
              Explore our latest articles and insights
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"
            />
          </motion.div>
        </div>
      )
    }


function FullStack() {
    return (
        <article className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <Image
              src={Roadmap}
              alt="Roadmap to become a fullstack developer illustration showing various programming languages and technologies around a central developer figure"
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />
            
            <h1 className="text-2xl font-bold text-gray-900">
              Roadmap to become a fullstack developer
            </h1>
    
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <Link 
                href="#" 
                className="text-blue-600 hover:underline"
              >
                Leave a Comment
              </Link>
              <span>/</span>
              <span>Uncategorised</span>
              <span>/</span>
              <span>By girisagar051@gmail.com</span>
            </div>
    
            <p className="text-gray-700 leading-relaxed">
              The Ultimate Roadmap to Become a Full-Stack Developer: Your Comprehensive Guide In the 
              fast-paced world of web development, full-stack developers are in high demand. These tech 
              wizards possess a wide range of skills, from front-end user interface design to back-end server 
              management. If you{"'"}re passionate about creating web applications and aspire to become a full-stack ...
            </p>
    
            <Link 
              href="#" 
              className="inline-block text-blue-600 hover:text-blue-700 hover:underline"
            >
              Read More »
            </Link>
          </div>
        </article>
      )
    }

    function Security() {
        return (
            <article className="w-full max-w-4xl mx-auto px-4 py-8">
              <div className="space-y-6">
                <Image
                  src={Hacker}
                  alt="Person in a hoodie wearing an Anonymous mask sitting behind a laptop in a dark setting"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                
                <h1 className="text-2xl font-bold text-gray-900">
                  Security Threats You Must Know
                </h1>
        
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                  <Link 
                    href="#" 
                    className="text-blue-600 hover:underline"
                  >
                    Leave a Comment
                  </Link>
                  <span>/</span>
                  <span>Uncategorised</span>
                  <span>/</span>
                  <span>By girisagar051@gmail.com</span>
                </div>
        
                <p className="text-gray-700 leading-relaxed">
                  Defend Your Digital Fortress: 10 Security Threats You Must Know About Introduction In our 
                  increasingly interconnected world, the need for robust cybersecurity has never been more 
                  critical. The digital age has brought with it immense benefits, but it has also given rise to a 
                  multitude of security threats that can jeopardize your personal and professional ...
                </p>
        
                <Link 
                  href="#" 
                  className="inline-block text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Read More »
                </Link>
              </div>
            </article>
          )
        }

    function MicrosoftExcel(){
        return (
            <article className="w-full max-w-4xl mx-auto px-4 pt-8 pb-28">
              <div className="space-y-6">
                <Image
                  src={Computer}
                  alt="Computer monitor surrounded by colorful circular icons representing different digital tools and content types"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                
                <h1 className="text-2xl font-bold text-gray-900">
                  Microsoft Excel Important Shortcuts
                </h1>
        
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                  <Link 
                    href="#" 
                    className="text-blue-600 hover:underline"
                  >
                    Leave a Comment
                  </Link>
                  <span>/</span>
                  <span>Uncategorised</span>
                  <span>/</span>
                  <span>By girisagar051@gmail.com</span>
                </div>
        
                <p className="text-gray-700 leading-relaxed">
                  Boost Your Excel Efficiency with These Essential Keyboard Shortcuts Introduction Microsoft 
                  Excel is a powerhouse when it comes to spreadsheet software, and mastering keyboard 
                  shortcuts can significantly improve your productivity. Whether you{"'"}re a data analyst, 
                  accountant, or just a regular Excel user, knowing the right shortcuts can save you time and 
                  streamline your workflow. In ...
                </p>
        
                <Link 
                  href="#" 
                  className="inline-block text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Read More »
                </Link>
              </div>
            </article>
          )
        }

const page = () => {
  return (
    <>
      <Navbar/>
      <Heading/>
      <FullStack/>
      <Security/>
      <MicrosoftExcel/>
      <Footer/>
    </>
  )
}

export default page
