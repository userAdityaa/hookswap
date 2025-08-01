import React from 'react';
import Image from 'next/image';

export default function TokenCreation() {
  return (
    <div className="bg-black text-white min-h-screen px-20 flex items-center justify-between relative overflow-hidden" style={{
        backgroundImage: 'url(/background_image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      {/* Left Side: Token Creation Form */}
      <div className="max-w-lg w-full h-[40rem]">
        <h1 className="text-5xl font-extrabold mb-8 leading-tight">
          Create a Token-2022<br />with Transfer Hook
        </h1>

        <div className="flex flex-col gap-4 mb-6">
          <p className='font-semibold'>TOKEN DETAILS</p>
          <input
            type="text"
            placeholder="Token Name"
            className="w-full p-3 rounded-md bg-[#1f1f1f] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="text"
            placeholder="Token Symbol"
            className="w-full p-3 rounded-md bg-[#1f1f1f] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="number"
            placeholder="Decimals"
            defaultValue="6"
            className="w-full p-3 rounded-md bg-[#1f1f1f] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <p className='font-semibold'>TRANSFER HOOK</p>
          <select
            className="w-full p-3 rounded-md bg-[#1f1f1f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">Select Hook Program</option>
            {/* Populate with actual programs */}
          </select>
        </div>

        <button className="w-full mt-2 py-3 rounded-md bg-gradient-to-r from-purple-700 to-purple-500 hover:opacity-90 transition duration-200 font-semibold text-white">
          Create Token
        </button>
      </div>

      {/* Right Side: Illustration */}
      <div className="hidden md:block -mr-[6rem] -mt-[8rem]">
        <Image
          src="/three_coins.png"
          alt="Token Visual"
          width={1300}
          height={1500}
          priority
        />
      </div>
    </div>
  );
}
