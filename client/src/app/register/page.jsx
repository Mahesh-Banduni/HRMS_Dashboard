import { Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-center items-center gap-2 h-20 px-4">
        <Square className="text-purple-900 w-8 h-8 font-bold" />
        <h1 className="text-2xl font-bold text-purple-900">WorkLync</h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-grow px-4 md:px-10 pb-10 gap-6 shadow-2xl">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-purple-900 rounded-lg py-10 flex flex-col justify-center px-10 lg:px-20 xl:px-20">
          <div className="flex flex-col items-center">
            <Image
              src="/images/landing.png"
              alt="Landing Image"
              width={520}
              height={284}
              className="object-cover rounded-lg w-full h-auto max-h-[300px]"
            />
            <div className="text-white text-center mt-4 px-2 md:px-4">
              <p className="text-lg md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod
              </p>
              <p className="text-sm mt-4">
                Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="flex flex-col w-full max-w-md gap-4">
            <h1 className="font-semibold text-xl text-center md:text-left">Welcome to Dashboard</h1>

            {["Full Name", "Email Address", "Password", "Confirm Password"].map((label, idx) => (
              <div className="flex flex-col gap-2" key={idx}>
                <span className="inline-flex items-center">
                  <label className="font-thin text-sm text-gray-800">{label}</label>
                  <p className="text-red-700 text-sm ml-1">*</p>
                </span>
                <input
                  type="text"
                  placeholder={label}
                  className="border-2 border-gray-200 rounded-md p-2.5"
                />
              </div>
            ))}

            <button className="bg-purple-900 text-white font-semibold rounded-full p-2.5 mt-2">
              Register
            </button>

            <span className="inline-flex gap-1 text-sm justify-center md:justify-start">
              <p className="font-light text-gray-400">Already have an account?</p>
              <Link href="/auth/signin" className="text-purple-900 font-light">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
