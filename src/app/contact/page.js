"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail } from "lucide-react"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function Body() {
    return(
        <>

        <h1 className='mx-auto text-center text-3xl font-semibold pt-16 pb-5'>Feel Free To Visit Us!</h1>

        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.5358119503708!2d85.28233418802608!3d27.708439268161715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1886189d6e91%3A0xec8d6a24c01cfcb3!2sKalika%20Staff%20Khana%20Hotel%20and%20Restaurant!5e0!3m2!1sen!2snp!4v1730090320100!5m2!1sen!2snp"
         className='border-0 mx-auto w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] 2xl:max-w-full'
          width="220"
           height="350"
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade">
          </iframe>

          <Card className="w-full py-10 border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-4">Contact Us</CardTitle>
          <CardDescription className="text-center">Get in touch with us or leave a message</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p>01-4039670, +977-9840055307</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <p>Sitapaila, Nagarjun-04, Kathmandu</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p>neweraeducationalconsultancy@gmail.com</p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Leave a message</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" required />
                  <Input placeholder="Last Name" required />
                </div>
                <Input type="email" placeholder="Email" required />
                <Textarea placeholder="Your message" className="pb-16" required />
                <Button type="submit" className="w-auto hover:bg-blue-800 bg-blue-600 rounded-none">Submit</Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>

        </>
    )
}

const Page = () => {
  return (
    <>
      <Navbar/>
      <Body/>
      <Footer/>
    </>
  )
}

export default Page
