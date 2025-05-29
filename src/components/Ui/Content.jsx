import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.png";
import img9i from "../../assets/img9(1).jpg";
import img9ii from "../../assets/img9 (2).jpg";
import img9iii from "../../assets/img9 (3).jpg";
import img10iv from "../../assets/img10 (4).png";
import img10i from "../../assets/img10 (1).png";
import img10ii from "../../assets/img10 (2).png";
import img10iii from "../../assets/img10 (3).png";

import { ArrowDown } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import heroImg from "../../assets/Hero_mp4.png";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";

function Content() {
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-black ">
        <div className="w-full flex-col pt-40">
          <div className="flex flex-wrap justify-between items-center px-4 py-2">
            <img
              src={img1}
              alt="Eclypse content image"
              className="w-full max-w-sm h-auto mb-2 sm:mb-0"
            />
            <img
              src={img2}
              alt="2025 image"
              className="w-12 h-auto mt-2 sm:mt-0"
            />
          </div>

          <div>
            {/* <section className="relative w-full h-[500px] overflow-hidden">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={video1}
                autoPlay
                muted
                loop
                playsInline
              />
            </section> */}
            <section className="mb-6 px-[20px]">
              <img src={heroImg} alt="Hero model" className="w-full rounded" />
            </section>
          </div>
        </div>

        <section className="text-5xl text-white my-16 text-left ml-4">
          <p>
            Rooted in a philosophy of quiet luxury, our <br />
            garments are designed to speak softly in <br />
            cut, in movement, in presence.
          </p>
          <a
            href="#learn-more"
            className="group text-2xl mt-14 inline-block border-b-1 border-white pb-1 px-2 p-3
             hover:bg-white hover:text-black hover:translate-x-1 
             transition-all duration-400 ease-in-out transform"
          >
            Learn more about Eclypse
            <span className="inline-block group-hover:opacity-0 transition-opacity duration-400">
              →
            </span>
          </a>
        </section>

        <section className="grid grid-cols-3 gap-3 ml-4 mr-4 mb-6">
          <video
            className="rounded col-span-2 w-full h-100 object-cover"
            src={video2}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="relative group w-full h-100 rounded overflow-hidden">
            <img
              src={img3}
              alt="Look 2"
              className="w-full h-100 object-cover rounded transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-4xl font-semibold  bg-opacity-60 px-2 py-4 ">
                Premium wool blend in <br />
                Signature Vermilion
              </p>
            </div>
          </div>
          <div className="relative group w-full h-90 rounded overflow-hidden">
            <img
              src={img4}
              alt="Look 3"
              className="w-full h-90 object-cover rounded transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-4xl font-semibold  bg-opacity-60 px-2 py-4 text-left ">
                Discreet Side pockets
                <br />
                with clean finish
              </p>
            </div>
          </div>
          <div className="relative group w-full h-90 rounded overflow-hidden">
            <img
              src={img5}
              alt="Look 4"
              className="w-full h-90 object-cover rounded transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-4xl font-semibold  bg-opacity-60 px-2 py-4 text-left ">
                Hand-cut and
                <br />
                assembled in small
                <br />
                batches
              </p>
            </div>
          </div>

          <div className="relative w-full  rounded overflow-hidden group">
            <img
              src={img6}
              alt="Brand mark"
              className="w-full h-90 rounded transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={img1}
              alt="Brand mark hover"
              className=" absolute top-30 left-25 w-72 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </section>

        <p className="text-3xl text-white flex m-4 my-32 ">
          Silhouette No. 1 — Vermilion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-white">
          <div className="w-full h-full">
            {/* <section className="relative w-full h-[500px] overflow-hidden"> */}
            <video
              className=" w-full h-[150vh] object-cover"
              src={video3}
              autoPlay
              muted
              loop
              playsInline
            />
            {/* </section> */}
          </div>
          <div className="flex justify-center text-left  p-8 flex-col">
            <h2 className="text-md text-left font-semibold text-black mb-4">
              A tailored composition in motion. Cut from structured wool with a
              sculpted shoulder and softened hem, this piece captures presence
              without force. Worn here in the stillness of a city in motion.
            </h2>
            <div className="grid grid-cols-3 gap-2 mb-16">
              <img
                src={img9i}
                alt="Red suit front"
                className="w-full h-auto rounded"
              />
              <img
                src={img9ii}
                alt="Red suit side"
                className="w-full h-auto rounded"
              />
              <img
                src={img9iii}
                alt="Red suit back"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="flex  mb-6">
              <div className=" text-3xl font-semibold ">₹ 7,999</div>
              <div className="text-md flex p-2 text-gray-500 ">
                MRP incl. of all taxes
              </div>
            </div>
            <div className="mb-2 font-medium ">
              Please select a size
              <span className="p-4 hover:text-blue-500 uderline curosr-pointer">
                Size chart
              </span>
            </div>
            <div className="mt-10  ">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <Button
                  varient="outline"
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-9 py-6 mx-4 ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {size}
                </Button>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-20">
              <Button
                variant="outline"
                className="w-full md:w-auto py-4 px-6 md:py-6 text-base md:text-xl font-semibold border border-gray-400"
              >
                Add to Cart
              </Button>
              <Button
                className="w-full md:w-[400px] py-4 px-6 md:px-24 md:py-6 text-base md:text-xl font-semibold hover:bg-red-600"
                onClick={() => navigate("/checkout")}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
        <section className="bg-black text-white px-4  py-6 space-y-6">
          <div className="border-b border-gray-700 py-12  hover:border-blue-500  transition-colors duration-300">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-3xl text-white">Size & Fit</h3>
              <ArrowDown className="w-10 h-10 text-white hover:text-blue-500 transition-colors duration-300 " />
            </div>
          </div>

          <div className="border-b border-gray-700 py-12 hover:border-blue-500  transition-colors duration-300">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-3xl">Delivery & Returns</h3>
              <ArrowDown className="w-10 h-10 text-white hover:text-blue-500 transition-colors duration-300 " />
            </div>
          </div>

          <div className="border-b border-gray-700 py-12 hover:border-blue-500  transition-colors duration-300">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-3xl">How This Was Made</h3>
              <ArrowDown className="w-10 h-10 text-white hover:text-blue-500 transition-colors duration-300 " />
            </div>
          </div>
        </section>
        <div className="w-full mt-9 px-4 sm:px-6 md:px-8">
          <h4 className="text-white text-left mb-4 text-sm sm:text-base ">
            OUR CUSTOMERS
          </h4>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-start md:pl-5">
              <img
                src={img10iv}
                alt=""
                className="w-12 h-9 mb-2 md:mb-0 md:px-2"
              />
              <p className="text-white text-lg sm:text-2xl md:text-4xl md:pl-2">
                Understated, but unforgettable. It
                <br className="hidden md:block" />
                feels like it was made for me.
              </p>
            </div>

            <div className="text-white flex items-center justify-center md:justify-end md:pr-4">
              <ChevronLeft />
              <img src={img10i} alt="" className="px-4" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-6 gap-4">
            <div className="text-white text-left pl-4 sm:pl-20">
              <p className="text-base sm:text-lg md:text-xl">Random Women</p>
              <p className="pt-1 text-xs text-gray-500 font-bold">NY, USA</p>
            </div>

            <div className=" gap-4 pr-4 sm:pr-16">
              <img src={img10ii} alt="" className="w-10 sm:w-12 md:w-14 py-4" />
              <img
                src={img10iii}
                alt=""
                className="w-10 sm:w-12 md:w-14 py-4"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-900 " />
      </div>
    </>
  );
}

export default Content;
