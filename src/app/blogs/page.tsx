import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

function BlogDetails() {
  return (
    <>
      <Navbar />
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
  <Image
    src="/assets/photo.png"
    alt="Blog Header Image"
    width={800}
    height={600}
    unoptimized
    className="w-full rounded-xl shadow-lg object-cover"
  />
</div>


          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            How Nearhive is Changing Local Commerce
          </h1>

          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>By <span className="font-semibold">Nearhive Team</span></span>
            <span className="mx-2">•</span>
            <span>August 11, 2025</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam qui repudiandae dolore quidem odio accusantium hic cumque et harum nihil. Voluptatibus at expedita voluptatem voluptas quos error nihil atque a pariatur sunt excepturi officia repellat sint asperiores nostrum libero, labore qui unde quas. Doloribus eos in, minima voluptate deleniti accusamus. Temporibus laudantium quo voluptatum eligendi earum commodi in quam repudiandae iusto. Explicabo molestiae enim ipsum harum rerum praesentium possimus eaque similique. Harum praesentium ex qui sequi beatae quas porro enim, totam, error rerum quis aut soluta numquam iusto delectus possimus illum nobis? Veritatis molestiae libero, ab numquam error dignissimos. Eos rerum saepe corporis numquam facere ducimus repellendus temporibus est nostrum alias! Ad expedita similique, dolorem minima facilis labore ea, modi, nihil neque quibusdam debitis voluptatem minus praesentium dignissimos doloribus odio? Fugit eos, illo nostrum totam ex sint aut magnam assumenda repellendus saepe rem velit. Dolorum non ab quidem. Qui sapiente earum aperiam harum autem hic quae, amet asperiores reprehenderit doloribus perspiciatis dolorem blanditiis quidem modi! Omnis, saepe! Atque, rerum praesentium? Inventore illo velit eaque? Minus, alias nostrum. Deserunt, officia quos illo perspiciatis suscipit quasi excepturi iste odit tempore voluptatum iusto nam magni aut, reiciendis quae impedit dicta eius. Suscipit repellendus amet doloribus vero quos aspernatur corporis nam possimus aperiam, magnam ipsum error eius quas labore neque quia voluptas eaque earum deserunt nihil cumque dolores minima eligendi facilis. Nisi debitis quod inventore totam repudiandae nulla autem enim quasi repellendus pariatur tenetur vitae, libero impedit eveniet molestiae. Culpa quod facere autem illum dolorum sint perspiciatis voluptatem? Omnis et doloremque, iusto quis voluptate fuga tempore quos incidunt reiciendis rerum cumque saepe consequatur quidem a veritatis perferendis modi, odit maxime suscipit asperiores porro dolorum. Ab asperiores porro tempora ullam, labore incidunt recusandae corrupti voluptatem consequuntur sunt, laborum fugiat nesciunt culpa, eius sequi inventore quia!
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

export default BlogDetails;