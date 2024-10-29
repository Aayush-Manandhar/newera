"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

import { Star } from "lucide-react"
import Image from "next/image"

import Businesswoman1 from '@/images/business_woman.jpeg';
import Businesswoman2 from '@/images/business_woman_2.jpeg';
import Hacker from '@/images/hacker.jpg';


const testimonials = [
  {
    name: "Ronin Karki",
    image: Hacker,
    quote: "New Era helped me to pass my 12th grade exam. Thanks a lot!",
    rating: 5,
  },
  {
    name: "Smriti Khadka",
    image: Businesswoman1,
    quote: "I took Advanced Computer Course from New Era. Now, I have a government job as a Computer Operator.",
    rating: 5,
  },
  {
    name: "Riza Sthapit",
    image: Businesswoman2,
    quote: "I was fascinated with Web Development. I took the training from New Era. I am working for a US company now. Thank You, New Era!",
    rating: 5,
  },
]

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="w-full bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-gray-600">KNOW ABOUT US</h2>
          <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Testimonials
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                hoveredIndex === index ? "shadow-xl -translate-y-2" : "shadow-md"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-center">{testimonial.quote}</p>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="font-semibold text-gray-800 text-center">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}