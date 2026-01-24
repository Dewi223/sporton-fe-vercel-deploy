import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  {
    name: "Running",
    imgUrl: "category-running.png",
  },
];

type TCategoriesProps = {
  categories: Category[];
}

const CategoriesSection = ({categories}: TCategoriesProps) => {
  return (
    <section id="categories-section" className="container mx-auto pb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium hover:text-primary/80">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" size={20} />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-6 mt-8">
        {categories.map((category) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow" // PERBAIKAN: ] ditambahkan
            key={category._id}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <Image
                src={getImageUrl(category.imageUrl)}
                width={86}
                height={86} // PERBAIKAN: ubah string ke number
                alt={category.name}
                className="mb-3"
              />
              <div className="text-primary font-medium text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;