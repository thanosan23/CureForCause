import React from 'react';

const History = () => {
    return (
        <>
            <section className="bg-white" id="about">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">About Us</h2>
                        <p className="mb-4">Cure for Cause is a non-profit organization founded by a group of motivated secondary school students based on bringing awareness and education to students regarding issues in global health. </p>
                        <p className="mb-4">We want to raise awareness on different health conditions impacting the world and how to prevent the proliferation of these issues. </p>
                        <p className="mb-4">We also plan to raise awareness issues in the healthcare industry with the goal of improving the quality of healthcare and access to healthcare worldwide.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="office content 1"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default History;
