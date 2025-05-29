import React from "react";
import Navlogo from "../assets/NavLogo.jpg";
import checkout from "../assets/ckeckout.png";
import homebtn from "../assets/backbutton.png";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="fixed top-0 left-0 w-full  bg-transparent backdrop-blur-md  md:px-6 py-4 md:py-6 flex  justify-between">
        <div className="flex  ">
          <img
            src={Navlogo}
            alt="Logo"
            className="w-10 h-10 md:w-10 md:h-10 ml-4 rounded"
          />
        </div>

        <nav className="flex  space-x-10">
          <a href="#about" className="text-gray-400 ">
            About Us
          </a>
          <a href="#waitlist" className="text-gray-400 ">
            Waitlist
          </a>
          <a href="#cart" className="text-black-300 underline  ">
            Cart
          </a>
        </nav>
      </header>

      <div className=" flex flex-col items-center justify-start pt-32 ">
        <div className="flex items-center w-full max-w-6xl  gap-4">
          <img
            src={homebtn}
            alt="navigate back to home"
            className="h-6 w-6  cursor-pointer hover:bg-gray-200 rounded transition duration-300 ease-in-out"
            onClick={() => navigate("/")}
          />
          <h2 className="text-xl font-semibold ">Shipping Address</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-auto md:h-[60vh] px-4 md:px-24 gap-4 mt-8">
        <div className="w-full md:w-1/2 bg-white rounded p-6 md:p-8 border-2 border-gray-300">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              checked
              readOnly
              name="size"
              className="scale-150 accent-red-600 mr-4"
            />
            <span className="text-lg font-medium">Add New Address</span>
          </div>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 w-full border-gray-300 sm:w-1/2 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 w-full border-gray-300 sm:w-1/2 rounded"
              />
            </div>

            <input
              type="text"
              placeholder="Street Address"
              className="border p-2 w-full border-gray-300 rounded"
            />

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <input
                type="text"
                placeholder="Apt Number"
                className="border p-2 w-full sm:w-1/3 border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="State"
                className="border p-2 w-full sm:w-1/3 border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Zip"
                className="border p-2 w-full border-gray-300 sm:w-1/3 rounded"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button
                type="button"
                className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded w-full sm:w-auto hover:bg-red-600"
              >
                Save This Address
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 bg-gray-200 rounded-md p-6 md:p-8">
          <p className="text-sm text-gray-500 mb-4">
            By placing your order, you agree to our company's Privacy
            <br />
            policy and Conditions of use
          </p>
          <hr className="border-gray-300 border mb-4" />

          <div className="space-y-2 mb-4">
            <h3 className="text-lg font-medium">Order Summary</h3>
            <div className="flex justify-between text-sm">
              <span>Items - Silhouette No. 1 - Vermilion</span>
              <span>7,999</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping and handling:</span>
              <span>200</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Before tax:</span>
              <span>6,599</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax Collected:</span>
              <span>1,400</span>
            </div>
          </div>
          <hr className="border-gray-300 border mb-4" />

          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Order Total:</span>
            <span>8,199</span>
          </div>

          <div className="mx-0 md:mx-8 mt-6">
            <button className="bg-black text-white w-full py-2 rounded hover:bg-red-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
