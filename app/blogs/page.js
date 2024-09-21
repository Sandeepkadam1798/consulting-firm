'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

import Blog from "../../public/Images/Blog.png";
import { motion } from "framer-motion";


const blogs = [
  {
    id: 1,
    title: 'Introduction to HAZOP Studies',
    author: 'John Doe',
    date: 'August 14, 2024',
    excerpt: 'This article introduces the fundamentals of HAZOP (Hazard and Operability) studies, their methodology, and why they are crucial for process safety...',
    image: Blog,
  },
  {
    id: 2,
    title: 'HAZOP in the Oil and Gas Industry',
    author: 'Jane Smith',
    date: 'September 5, 2024',
    excerpt: 'The oil and gas industry heavily relies on HAZOP studies to identify potential hazards and ensure safety protocols are in place. In this article...',
    image: Blog,
  },
  {
    id: 3,
    title: 'The Evolution of HAZOP Techniques',
    author: 'Mark Lee',
    date: 'September 12, 2024',
    excerpt: 'Over the years, HAZOP techniques have evolved to adapt to new challenges and industries. This blog discusses the modern trends in HAZOP analysis...',
    image: Blog,
  }
];

export default function BlogPage() {

  // Scroll-triggered animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('animate-fade-in-slide');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Blog - Aura Veritas</title>
        <meta name="description" content="Latest blog posts related to HAZOP studies, safety management, and risk analysis." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white p-8 shadow-lg">
          {/* Page Title */}
          <h1 className="text-xl lg:text-4xl md:text-3xl font-bold text-center text-primary mb-12 animate-scale-up">
            Latest Blog Posts
          </h1>

          {/* Featured Post */}
          <motion.section className="mb-12 animate-on-scroll"  initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}>
            <h2 className="font-semibold mb-6 text-gray-800 text-xl lg:text-4xl md:text-3xl  ">Featured Post</h2>
            <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogs[0].title}</h3>
                <p className="text-gray-600 mb-4">{blogs[0].excerpt}</p>
                <p className="text-gray-500 text-sm mb-2">By {blogs[0].author} | {blogs[0].date}</p>
                {/* <a href="#" className="text-[#0b8d7c] font-semibold hover:underline">Read More</a> */}
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  width={500}
                  height={300}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.section>

          {/* Blog List */}
          <motion.section className="animate-on-scroll" initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}>
            <h2 className="text-xl font-semibold mb-6 text-gray-800 " >Recent Posts</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {blogs.slice(1).map((blog) => (
                <div key={blog.id} className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={200}
                    className="object-cover lg:w-1/3"
                  />
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                      <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-2">By {blog.author} | {blog.date}</p>
                      {/* <a href="#" className="text-[#0b8d7c] font-semibold hover:underline">Read More</a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
