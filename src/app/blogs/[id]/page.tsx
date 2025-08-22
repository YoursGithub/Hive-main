// app/blogs/[id]/page.tsx
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { fetchBlogsById } from "@/services/blogs";
import Image from "next/image";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params Promise
  const { id } = await params;
  const blog = await fetchBlogsById(id);

  return (
    <>
      <Navbar />
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <Image
              src={blog.thumbnail}
              alt="Blog Header Image"
              width={800}
              height={450}
              unoptimized
              className="w-[900px] h-[450px] rounded-xl shadow-lg object-cover"
            />
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {blog.title}
          </h1>

          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>
              By <span className="font-semibold">Nearhive Team</span>
            </span>
            <span className="mx-2">•</span>
            <span>
              {blog.createdAt.toDate().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>{blog.content}</p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}