"use client"

import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [end, duration, inView])

  return <span ref={ref}>{count}</span>
}

export default function InstituteStats() {
  const stats = [
    { stat: 500, name: "Students Enrolled" },
    { stat: 15, name: "Unique Courses" },
    { stat: 10, name: "Colleges Affiliated" },
  ]

  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Our Institute by Numbers
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            They Trust Us
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((item) => (
            <Card key={item.name} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 bg-white hover:bg-blue-50 transition-colors duration-300">
                <p className="text-5xl font-bold text-blue-800 mb-2">
                  <CountUp end={item.stat} />+
                </p>
                <p className="text-lg text-gray-600">{item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}