import React from 'react'
import { Phone, MapPin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Footer = () => {
  const socialIcons = [
    {
      name: 'Facebook',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: 'Twitter',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      )
    },
    {
      name: 'YouTube',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    }
  ]

  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white w-full py-12 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">New Era</h2>
          <p className="text-sm">
            We believe in quality education. New era provides job-oriented training courses and exam-oriented tuition classes.
          </p>
        </div>
        
        <div>
          <h3 className = "text-xl font-semibold mb-4">Navigation</h3>
          <ul className = "space-y-2">
            {[
              { name: 'Home', href: '/' },
              { name: 'Programs', href: '/' },
              { name: 'Blogs', href: '/' },
              { name: 'Contact', href: '/' },
             ].map((item) => (
              <li key = {item.name}>
                <Link href={item.href} passHref>
              <Button variant = "link" className = "p-0 h-auto text-white hover:text-blue-300">
                  {item.name}
                </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 cursor-pointer">
            {[
              { name: 'Computer Course', icon: '💻', href: '/' },
              { name: 'Tuition Classes', icon: '📚', href: '/' },
              { name: 'IELTS Class', icon: '🌐', href: '/' },
              { name: 'Designing', icon: '🎨', href: '/' },
              { name: 'Web Development', icon: '🌐', href: '/' },
              { name: 'Mobile Development', icon: '📱', href: '/' },
            ].map((course) => (
              <li key={course.name} className="flex items-center space-x-2">
                <span>{course.icon}</span>
                <Link href={course.href} passHref>
                <Button variant="link" className="p-0 h-auto text-white hover:text-blue-300">
                  {course.name}
                </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Links</h3>
          <div className="flex space-x-4 mb-4">
            {socialIcons.map(({ name, svg }) => (
              <Button key={name} variant="ghost" size="icon" className="text-white hover:text-blue-300 hover:bg-blue-800">
                {svg}
                <span className="sr-only">{name}</span>
              </Button>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">01-4039670, 9840055307</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Sitapaila, Nagarjun-04, KTM</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <Button variant="link" className="p-0 h-auto text-white hover:text-blue-300">
                neweraeducationalconsultancy@gmail.com
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer