import React from "react";
import './Home.css';
import MultiItemCarousel from "./MultiItemCarousel";

export const Home = () => {
    return (
        <div className="">
        <section className="banner -z-50 relative flex flex-col justify-center
            items-center">
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Wesp Food</p>
                <p className="z-10 text-gray-300 text-xl lg:text-4xl">Get the best products at the best prices</p>
            </div>
            <div className="cover absolute top-0 left-0 right-0"></div>
            <div className="fadout"></div>
            </section>
            <section className="p-10 lg:py-10 lg:px-20">
                <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">Top Meels</p>
                <MultiItemCarousel/>
            </section>
            <section>
                <h1 className="text-2xl font-semibold text-gray-400 py-3">Order From Our </h1>
            </section>
        </div>
    );
};

export default Home;