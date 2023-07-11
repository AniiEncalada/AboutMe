import React from "react";

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/me_ED_2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Here is a litle background</h1>
          <p className="py-6">
            Hi, my name is Maria, I'm a software developer, I'm from Ecuador.
            I'm a person who likes to learn new things everyday. In my holidays
            I like to travel and know new places.
          </p>
          <button className="btn btn-primary">See more</button>
        </div>
      </div>
    </div>
  );
};
