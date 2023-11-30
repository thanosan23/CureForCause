const Contact = () => {
    return (
        <>
        <section className="bg-white" id="contact">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Have a question? Want to give us feedback? Want to partner with us? Let us know.</p>
                <form action="https://formspree.io/f/moqooaaz" method="POST" className="space-y-8">
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-9000">Your email</label>
                        <input type="email" id="email" name="email" className="shadow-none bg-transparent border-b border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:border-sky-600 focus:bg-gray-50 block w-full p-2.5" placeholder="yourEmail@gmail.com" required
/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                        <input type="text" id="subject" className="shadow-none bg-transparent border-b border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:border-sky-600 focus:bg-gray-50 block w-full p-2.5" placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                        <textarea id="message"  rows={6} name="message" className="shadow-none bg-transparent border-b border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:border-sky-600 focus:bg-gray-50 block w-full p-2.5" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 border border-gray-300">Send message</button>
                </form>
            </div>
        </section>
</>
    )
}
export default Contact;
