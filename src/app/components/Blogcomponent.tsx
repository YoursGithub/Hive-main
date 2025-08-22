"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { fetchBlogs } from "@/services/blogs";

export default function Blogcomponent() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  return (
    <>
      {blogs.map((blog) => (
        <div
          key={blog.blogId}
          className="bg-[#F5F5F5] m-5 lg:m-0 overflow-hidden"
        >
          <Image
            className="w-full h-48 object-cover p-4 md:p-0"
            src={blog.thumbnail}
            width={450}
            height={450}
            alt="Blog Image"
          />
          <div className="p-10">
            <p className="text-gray-400 text-xs mb-2">
              {blog.createdAt.toDate().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
              {blog.title}
            </h5>
            <p className="mb-4 text-sm text-gray-600">
              {blog.description.split(" ").slice(0, 20).join(" ")}
              {blog.description.split(" ").length > 20 && "..."}
            </p>
            <Link
              href={`/blogs/${blog.blogId}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-[#F1B729] rounded-md transition"
            >
              Read Full Blog <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
