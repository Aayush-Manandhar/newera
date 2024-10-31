"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function EnhancedEnrollmentForm() {



  const [course, setCourse] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form submitted", {
      fullName: event.target.fullName.value,
      contact: event.target.contact.value,
      email: event.target.email.value,
      course: course
    })
  }

  return (
      <form onSubmit={handleSubmit} method="POST" className="w-full px-4 sm:px-8 md:px-12 lg:px-20 
                py-6 sm:py-8 md:py-10 lg:py-14 
                bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-4xl font-bold text-start mb-8 text-gray-800">Enroll Form</h2>
        
        <div className="py-9">
          <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-gray-700 ">Full Name *</label>
          <Input id="fullName" name="fullName" placeholder="John Doe" required className="w-[80%] md:w-[90%] lg:w-[80%]  border-gray-700" />
        </div>
        
        <div className="py-5">
          <label htmlFor="contact" className="block text-sm font-medium mb-2 text-gray-700">Contact *</label>
          <Input type="number" min="10" id="contact" name="contact" placeholder="1234567890" required className="w-[80%] md:w-[90%] lg:w-[80%]  border-gray-700" />
        </div>
        
        <div className="py-5">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
          <Input id="email" name="email" type="email" placeholder="johndoe@example.com" required className="w-[80%] md:w-[90%] lg:w-[80%] border-gray-700" />
        </div>
        
        <div className="py-5">
          <label htmlFor="course" className="block text-sm font-medium mb-2 text-gray-700">Which course are you interested in? *</label>
          <Select onValueChange={setCourse} required>
            <SelectTrigger id="course" className="w-[80%] md:w-[90%] lg:w-[80%] border-gray-700">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="computer-class">Computer Class</SelectItem>
              <SelectItem value="bridge-course">Bridge Course</SelectItem>
              <SelectItem value="Tution-class">Tution Class</SelectItem>
              <SelectItem value="ielts-classes">IELTS Classes</SelectItem>
              <SelectItem value="japenese-classes">Japenese Classes</SelectItem>
              <SelectItem value="Designing">Designing</SelectItem>
              <SelectItem value="mobile-development">Mobile Development</SelectItem>
              <SelectItem value="web-development">Web Development</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button type="submit" className="mt-5 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-none px-8 py-4" >Enroll</Button>
      </form>
  )
}