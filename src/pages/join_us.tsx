import React from 'react';
import Navbar from '~/components/Navbar';
import Features from '~/components/Features';
import Contact from '~/components/Contact'
import { motion } from 'framer-motion';
import History from '~/components/History';
import Footer from '~/components/Footer';

export default function JoinUs() {
    return (
        <>
            <Navbar />
            <section className="bg-white" id="#">
                <div className="mt-20 min-h-screen p-10">
                    <div>
                        <h1 className="text-center font-bold text-3xl">Future Applications Will Be Posted Below</h1>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-[33%]">
                        <div className="rounded-xl mt-16 bg-team-pattern flex justify-center items-center align-middle p-5">
                        <div className="bg-opacity-75 bg-gray-100 rounded p-5 flex justify-center text-center">
                            <div className="flex gap-3 flex-col">
                                <h2 className="text-2xl underline font-bold">Events Team</h2>
                                <p className="font-blue">We are on the lookout for passionate individuals for sharing information on various health issues. The team members will be responsible for planning events that align with Cure For Cause{"'"}s vision.</p>
                                <div className="">
                                    <a target="_blank" href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfk1SUv3xF0rILV6RNa_ZMcrALp1RYgbRmjU8Tit9wVnEkcDQ/viewform?usp=sf_link"><button className="px-5 py-1 rounded-2xl bg-[#0E3455] text-white hover:scale-105 transition hover:opacity-80">Apply Now</button></a>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
