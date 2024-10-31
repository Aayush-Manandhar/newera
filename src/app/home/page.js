"use client"

import {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar.js';
import InstituteStats from '@/components/InstituteStats.js';
import HomeCourses from '@/components/HomeCourses.js';
import EducationalShowcase from '@/components/HomeEducationalShowcase.js';
import HomeBlogPreview from'@/components/HomeBlogPreview.js';
import Testimonials from '@/components/testimonials.js';

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Banner from "@/images/book_fantasy.jpg"
import Building from '@/images/newerait.edu.np_.png'
import Computer from '@/images/computer.jpeg';
import Footer from '@/components/Footer.js';
import Link from 'next/link.js';


function HeroSection () {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pb-4 pt-[40px] px-3.5 sm:mt-14 lg:mt-0 bg-gradient-to-b from-gray-200 via-gray-100 to-white h-screen">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
          <h1 
            className={`font-semibold leading-tight text-primary dark:text-white text-4xl sm:text-5xl lg:text-6xl
              transform transition-all duration-700 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
          >
            Enhancing the knowledge of{' '}
            <span className={`text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-blue-900
              transition-all duration-700 delay-300 ease-out
              ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              future generations.
            </span>
          </h1>
          
          <p className={`flex text-muted-foreground dark:text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none
            transform transition-all duration-700 delay-500 ease-out
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our classes are designed to help students excel in specific exams by offering targeted preparation, 
            ensuring that students gain the knowledge and skills needed to achieve high marks.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full
            transform transition-all duration-700 delay-700 ease-out
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link href={'/form'}>
              <Button 
                size="lg" 
                className="text-lg rounded-none font-medium bg-blue-600 hover:bg-blue-700 
                  transform transition-all duration-300 hover:scale-105"
              >
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
        
        <div className={`flex flex-1 lg:w-full lg:h-full relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl
          transform transition-all duration-1000 delay-300 ease-out
          ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <Image
            src={Banner}
            alt="Hero image"
            width={2350}
            height={2359}
            className="hidden lg:block lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96
              transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

function FeaturedCourse() {
  return(
    <div className="w-full max-w-sm mx-auto -mt-20 bg-white rounded-lg shadow-[inset_0_30px_60px_-12px_rgba(50,50,93,0.25),inset_0_18px_36px_-18px_rgba(0,0,0,0.3)] border border-black/[0.06] overflow-hidden transition-transform hover:scale-[1.02] sm:max-w-md md:max-w-lg">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <h1 className="text-xl font-semibold text-center text-gray-900">
          Featured Courses
        </h1>
      </div>

      {/* Course Content */}
      <div className="p-6 space-y-6">
        {/* Logo Container */}
        <div className="flex justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24">
            <PythonLogo className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Course Title */}
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-900 md:text-xl">
            Python Programming
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Master Python from basics to advanced concepts
          </p>
        </div>

        {/* Price and CTA */}
        <div className="pt-4">
          <Link href={'/form'}>
          <Button 
            className="w-full py-2 bg-blue-800 hover:bg-blue-950 text-white font-medium rounded-none transition-colors"
          >
            Claim 20% Discount →
          </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function WhoWeAre(){
  return(
    <div className="flex flex-col md:flex-row items-center bg-white px-8 pb-8 pt-12 rounded-lg shadow-lg max-w-6xl mx-auto">
      <div className="relative w-full md:w-1/2 h-[450px] mb-6 md:mb-0">
        <Image
          src={Building}
          alt="New Era IT Training & Educational Consultancy building"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute top-4 left-4 bg-blue-800 text-white p-4 rounded-lg">
          <p className="text-2xl font-bold">10 Years</p>
          <p>Experience</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-gray-700 mb-2 font-semibold text-2xl">WHO WE ARE</h2>
        <h1 className="text-3xl font-bold mb-4">New Era IT Training & Educational Consultancy</h1>
        <p className="text-gray-700 mb-4">
          We are a well-established and organized educational consultancy. We believe that{' '}
          <strong className='text-blue-700'>Quality cannot be compromised.</strong> Here at New Era, that belief is properly conducted.
          We create engaging environment for the students. New Era provides quality classes and
          we are determined to transform the skills of students and hence their lives.
        </p>
        <Link href={"/"}>
        <Button variant="default" className='rounded-none font-medium bg-blue-900 hover:bg-blue-700'>
          Read More →
        </Button>
        </Link>
      </div>
    </div>
  )
}


const ComputerCourseBanner = () => {
  return (
    <section className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text inline-block transition-transform duration-300 hover:scale-105">
                Providing Advanced Computer Course
              </span>
              <br />
              <span className="text-blue-700 mt-2 inline-block transition-all duration-300 hover:text-blue-800 hover:scale-105">
                to help you succeed in your career.
              </span>
            </h1>
            <p className="text-slate-700 text-lg transition-colors duration-300 hover:text-slate-900">
              Shortcuts, theory of computing, basic designing, document formatting, data entry and calculation, preparing advanced slides with animations and much more to learn here.
            </p>
            <Link href={'/form'}> 
            <Button 
              className="bg-blue-600 hover:bg-blue-700 rounded-none text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg sm:text-base px-10 py-5 mt-11"
            >
              Enroll Now
            </Button>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="relative aspect-video max-w-[500px] mx-auto group">
              <Image
                src={Computer}
                alt="Advanced Computer Course Illustration"
                // layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <FeaturedCourse/>
      <br />
      <WhoWeAre/>
      <br /><br />
      <InstituteStats/>
      <HomeCourses  />
      <br /><br />
      <ComputerCourseBanner/>
      <br /><br />
      <EducationalShowcase/>
      <br />
      <HomeBlogPreview/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

function PythonLogo(props) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  {/* <!-- Blue Snake --> */}
  <path d="M98 35c-29 0-27 13-27 13v13h28v4H57.5s-20-2-20 29c0 31 17 30 17 30h10v-14s-1-17 17-17h27s15 0 15-15V58c0-15-13-23-25.5-23zm-15 13a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" fill="#4584b6"/>
  
  {/* <!-- Yellow Snake --> */}
  <path d="M102 165c29 0 27-13 27-13v-13h-28v-4h41.5s20 2 20-29c0-31-17-30-17-30h-10v14s1 17-17 17h-27s-15 0-15 15v20c0 15 13 23 25.5 23zm15-13a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="#ffde57"/>
  
  {/* <!-- Blue Circle --> */}
  <circle cx="83" cy="53" r="5" fill="#ffffff"/>
  
  {/* <!-- Yellow Circle --> */}
  <circle cx="117" cy="147" r="5" fill="#ffffff"/>
</svg>
  )
}

export default Home;
