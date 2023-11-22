import React from 'react';
import Navbar from '~/components/Navbar';
import Features from '~/components/Features';
import { motion } from 'framer-motion';
import History from '~/components/History';
import Footer from '~/components/Footer';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Navbar />
            <section className="bg-white" id="#">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <motion.div  initial={{ scale: 0.2 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                        <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSfk1SUv3xF0rILV6RNa_ZMcrALp1RYgbRmjU8Tit9wVnEkcDQ/viewform?usp=sf_link" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full  hover:bg-gray-200" role="alert">
                            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3 bg-[#58AAF2]">New</span> <span className="text-sm font-medium">Events Team Applications are Open</span>
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        </a>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6x">Cure for Cause</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Here at Cure for Cause, we strive to educate the community on disease prevention through awareness.</p>
                        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Link href="/join_us" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:scale-110 transition">
                                Join Us
                            </Link>
                        </div>
                    </motion.div>
                    <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    </div>
                </div>
                <History />
                <Features />
                {/* <Contact /> */}
                <Footer />
            </section>
        </>
    );
}
