"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Blogcomponent from "../components/Blogcomponent";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { fetchBlogs, type Blog } from "@/services/blogs";

const Hiveblogs = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const fetchedBlogs = await fetchBlogs();
        const sortedBlogs = fetchedBlogs.sort((a, b) => 
          b.createdAt.toMillis() - a.createdAt.toMillis()
        );
        setBlogs(sortedBlogs);
        setFeaturedBlogs(sortedBlogs.slice(0, 2));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const getDynamicContents = () => {
    return featuredBlogs.map(blog => ({
      title: blog.title,
      description1: blog.description.substring(0, 200) + (blog.description.length > 200 ? "..." : ""),
      description2: blog.description.substring(200, 400) + (blog.description.length > 400 ? "..." : ""),
      buttonText: "Read Full Blog",
      blogId: blog.blogId,
    }));
  };

  const dynamicContents = getDynamicContents();
  const currentContent = dynamicContents[activeContent] || dynamicContents[0];

  const renderThumbnails = () => (
    <>
      {dynamicContents.map((content, index) => (
        <div
          key={index}
          className={`w-20 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 bg-white ${
            activeContent === index ? 'ring-2 ring-[#F1B729]' : ''
          }`}
          onClick={() => setActiveContent(index)}
        >
          <div className="w-full h-20 relative">
            <Image
              src={featuredBlogs[index]?.thumbnail || "/assets/Rectangle 3699.png"}
              alt={content.title}
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="p-2 hidden lg:block text-center text-black font-semibold text-[10px] whitespace-nowrap leading-tight">
            {content.title.length > 20 ? content.title.substring(0, 20) + '...' : content.title}
          </div>
        </div>
      ))}
    </>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-1">
        <div className="max-w-7xl mx-auto bg-white min-h-[500px] flex flex-col md:flex-row mt-10 lg:mt-0">
          <div className="lg:mt-40 mt-6 mx-auto flex flex-row items-start gap-2">
            <Image
              src={featuredBlogs[activeContent]?.thumbnail || ""}
              width={800}
              height={800}
              alt="Main"
              className="object-cover w-[260px] lg:w-[400px] h-44 lg:h-64"
            />

            <div className="lg:hidden">
              <div className="flex flex-col justify-start gap-4">
                {renderThumbnails()}
              </div>
            </div>
          </div>

          <div className="flex-1 px-12 py-16 bg-white lg:text-left text-center relative flex flex-col justify-center">
            <div className="text-center lg:max-w-md">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {currentContent?.title}
              </h1>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                {currentContent?.description1}
              </p>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {currentContent?.description2}
              </p>

              <Link 
                href={currentContent?.blogId ? `/blogs/${currentContent.blogId}` : '/blogs'} 
                className="bg-[#F1B729] text-black px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
              >
                {currentContent?.buttonText} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="hidden md:flex absolute right-10 top-1/2 transform -translate-y-1/2 flex-col gap-4">
              {renderThumbnails()}
            </div>
          </div>
        </div>
      </div>

      <section className="w-full bg-black text-center py-16 mt-[-250px] lg:mt-0">
        <div className="space-y-10">
          <div className="text-white px-4">
            <h2 className="text-3xl">don&apos;t just order, have fun</h2>
            <p className="text-sm mt-5 lg:max-w-md mx-auto text-center">
              Join as a NearHive creator and earn credits, offers, goodies and
              many more by contributing to NearHive community. Join as a
              NearHive creator and earn credits, offers, goodies and many more
              by contributing to NearHive community.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/assets/photo.png"
              width={500}
              height={500}
              alt="Fun Section"
            />
          </div>

          <Link href="/blogs" className="p-3 text-black bg-amber-400 w-52 whitespace-nowrap mx-auto mt-10">
            Read full blog
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-center text-black">
          <p className="text-sm">HIVE BLOGS</p>
          <h2 className="text-xl m-3">
            Get NearHive updates, tips, and news through our exciting blogs.
          </h2>
        </div>

        <div className="max-w-5xl text-center mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Blogcomponent />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hiveblogs;