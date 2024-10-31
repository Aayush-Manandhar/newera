"use client"

import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import IELTS from '@/images/ielts.jpg';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"



function EducationalFeatures() {
  const features = [
    { icon: "📑", title: "Visa Processing" },
    { icon: "👨‍🏫", title: "Experienced Teachers" },
    { icon: "💰", title: "Affordable Fees" },
    { icon: "🖥️", title: "Well-equipped Lab" },
  ]
    return (
      <div className="w-full bg-background py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="flex flex-col items-center text-center p-6 border-none"
              >
                <div
                  className="mb-6 rounded-full bg-blue-600 p-4 text-6xl"
                  style={{
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  function Ielts() {
    const features = [
      {
        title: "Experienced Teachers",
        description: "Teachers with 8+ years of experience"
      },
      {
        title: "Exam Arrangements",
        description: "We arrange for your exams to help you"
      },
      {
        title: "Visa Processing",
        description: "Processing your documents for visa"
      },
      {
        title: "Excellent Resources",
        description: "Helping you with great resources to succeed in exam"
      },
      {
        title: "Well Managed Practice Session",
        description: "Practice in person before exams"
      },
      {
        title: "Regular Tests and Exams",
        description: "Making sure you are at your full potential"
      }
    ];
  
    return (
      <div className="w-full bg-background text-foreground p-7 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-3">About IELTS class</h1>
        <p className="text-center text-muted-foreground mb-6">
        Have a dream to study in abroad? Join us for IELTS class and make your dream come true.
        </p>
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-1 bg-primary rounded-full mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Key Features</h2>
          <div className="w-16 h-1 bg-primary rounded-full ml-4"></div>
        </div>
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted hover:shadow-md"
            >
              <CheckCircle className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h1 className="font-semibold text-xl">{feature.title}</h1>
                <p className="text-base text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 mb-10 text-center">
        <Link href={"/form"}>
        <Button className="text-lg rounded-none font-medium hover:bg-orange-800 underline-offset-4 bg-orange-600"  >
          Enroll Now
        </Button>
        </Link>
        </div>
      </div>
    );
  };

function Body() {
  return(
    <>
    <h1 className="mx-4 sm:mx-16 mt-14 mb-2 flex justify-center text-3xl sm:text-5xl font-bold text-blue-950 ">
        IELTS Class
    </h1>

    <Image
    alt='course'
    src={IELTS}
    width={850}
    height={950}
    className='mx-auto'
    />

    <EducationalFeatures/>
    <Ielts/>

    </>
  )
}

const page = () => {
  return (
    <>
      <Navbar/>
      <Body/>
      <Footer/>
    </>
  )
}

export default page;