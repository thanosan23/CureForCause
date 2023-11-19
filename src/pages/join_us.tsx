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
                <div className="min-h-screen p-10">
                    <div>
                        <h1 className="text-center font-bold text-3xl">Future Applications Will Be Posted Below</h1>
                    </div>
                    <div className="text-center p-10">
                        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfk1SUv3xF0rILV6RNa_ZMcrALp1RYgbRmjU8Tit9wVnEkcDQ/viewform"><button className="bg-gradient-to-b px-4 py-1 from-[#58AAF2] to-[#89C3F7] text-white rounded-2xl transition hover:scale-110 hover:opacity-80">Events Team Application</button></a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
