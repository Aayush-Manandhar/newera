import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Plane, Paintbrush, Code, Smartphone } from "lucide-react"

const WindowsLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z" fill="currentColor"/>
  </svg>
)

const courses = [
  {
    icon: <WindowsLogo className="w-12 h-12" />,
    title: "Office Handling Package",
    description: "Computer course that will enable the students to be able to handle general office works like printing, data entry, calculations."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Tuition Classes",
    description: "We offer tuition classes that are exam-oriented. Tuition classes are run for students of grade 5 to bachelor's students."
  },
  {
    icon: <Plane className="w-12 h-12" />,
    title: "IELTS Class",
    description: "The most in-demand course in the present day. With the help of qualified teachers, you can achieve your dream goals too."
  },
  {
    icon: <Paintbrush className="w-12 h-12" />,
    title: "Designing",
    description: "Passionate about creating amazing contents? Designing is the right course for you to learn Photoshop, UI/UX, Illustrator etc."
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Web Development",
    description: "Ever wondered what runs behind our computer screens when we open a website? Learn to create great sites."
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile Development",
    description: "Creating games, applications for corporate level solution and a lot more using languages like Java, React Native and Flutter."
  }
]

export default function Courses() {
  return (
    <div className="py-24 px-4 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-b-[100px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-2">WHAT WE OFFER</h2>
        <h1 className="text-5xl font-bold text-center text-white mb-12">Our Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="bg-blue-900 bg-opacity-80 border-none shadow-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-100">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-white">{course.icon}</div>
                <CardTitle className="text-xl font-semibold text-white">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}