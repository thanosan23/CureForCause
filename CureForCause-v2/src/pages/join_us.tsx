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
            <section className="bg-white p-10 grid grid-cols-1 md:grid-cols-2 gap-8 h-screen pt-60">
    <div className="rounded-xl bg-cover bg-center flex items-center justify-center drop-shadow-lg" style={{backgroundImage: `url('/events.jpg')`}}>
        <div className="p-10 bg-gray-200 bg-opacity-75 rounded-xl w-100">
            <h2 className="text-center text-black font-bold text-2xl mb-4">Events Team</h2>
            <p className="text-center text-black mb-4">We are on the lookout for passionate individuals for sharing information on various health issues. The team members will be responsible for planning events that align with Cure For Cause’s vision. <aside className='font-bold'>Applications are open till December 10th.</aside>
</p>
            <div className="text-center">
                <a href="link_to_application_1" target="_blank">
                    <button className="bg-gradient-to-b px-4 py-1 from-[#58AAF2] to-[#89C3F7] text-white rounded-2xl transition hover:scale-110 hover:opacity-80">Apply Now</button>
                </a>
            </div>
        </div>
    </div>
    <div className="rounded-xl bg-cover bg-center flex items-center justify-center drop-shadow-lg" style={{backgroundImage: `url('/research.jpg')`}}>
        <div className="p-10 bg-gray-200 bg-opacity-75 rounded-xl w-100">
            <h2 className="text-center text-black font-bold text-2xl mb-4">Research Team</h2>
            <p className="text-center text-black mb-4">We are on the lookout for passionate individuals that are dedicated to researching a learning new topics in healthcare. The team members will be responsible for researching and coordinating with the events/marketing teams to educate people on relevant health issues.

</p>
            <div className="text-center">
                <a href="link_to_application_1" target="_blank">
                    <button className="bg-gradient-to-b px-4 py-1 from-[#FF0000] to-[#FF6347] text-white rounded-2xl transition hover:scale-110 hover:opacity-80">Closed</button>
                </a>
            </div>
        </div>
    </div>
</section>
            <Footer />
        </>
    );
}
