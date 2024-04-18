import React from 'react';
import image from "../../../app/public/pancakes.png"

export default function About() {
  return (
    <div className="flex justify-between items-start h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-start items-start ml-8" style={{ marginLeft: "175px" }}>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-left mb-14 " style={{ color: "#365486" }}>Lorem ipsum dolor sit amet</h1>
        <p className="text-base md:text-lg lg:text-xl mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus. Pharetra massa massa ultricies mi quis hendrerit. Vel eros donec ac odio tempor orci dapibus ultrices in.</p>
      </div>

      {/* Right Section */}
      <div className="mr-8">
        <img src="app\public\pancakes.png" alt="Image" className="w-470 h-356" />
      </div>
    </div>
  );
}
