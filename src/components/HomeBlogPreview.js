import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import Roadmap from '@/images/roadmap.jpg';
import Hacker from '@/images/hacker.jpg';
import Computer from '@/images/computer.jpeg';


const blogPosts = [
  {
    id: "1",
    title: "Roadmap to become a fullstack developer",
    image: Roadmap,
    description: "Learn the essential steps to becoming a proficient fullstack developer.",
    link: "#"
  },
  {
    id: "2",
    title: "Security Threats You Must Know",
    image: Hacker,
    description: "Stay informed about the latest security threats in the digital world.",
    link: "#"
  },
  {
    id: "3",
    title: "Microsoft Excel Important Shortcuts",
    image: Computer,
    description: "Boost your productivity with these essential Excel shortcuts.",
    link: "#"
  }
]

export default function BlogPreview() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-2 text-foreground">LEARN MORE</h2>
        <h3 className="text-5xl font-bold text-center mb-12 text-foreground">Latest Blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <h4 className="text-xl font-semibold mb-2 text-foreground">{post.title}</h4>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full transition-all duration-300 bg-blue-800 hover:bg-blue-900">
                  <Link href={post.link}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}