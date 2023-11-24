const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer p-5 mt-20 flex justify-between bg-sky-600/[.3] shadow-md">
                <aside>
                    <img src="/logo.png" alt="logo" className="w-14 h-14"/>
                    <p className="font-bold">Cure for Cause<br/><span className="font-light">Educating the community on disease prevention.</span></p>
                </aside>
                <div>
                    <form className="pt-4" action="https://app.us21.list-manage.com/subscribe/post?u=adbaf9d35dc2355e6970d64f3&amp;id=0437810db5&amp;f_id=00e33ae7f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                        <div id="mc_embed_signup_scroll">
                            <h2 className="text-black font-semibold pb-2">General Interest</h2>
                            <div className="mc-field-group">
                                <input type="email" name="EMAIL" className="required email p-2 rounded border" placeholder="Your email" id="mce-EMAIL" required />
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="hover:opacity-80 transition hover:cursor-pointer hover:scale-105 button p-2 rounded bg-blue-900 text-white ml-2" defaultValue="Join" />
                            </div>
                            <div id="mce-responses" className="clear foot">
                                <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                                <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                            </div>
                            <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                                <input type="text" name="b_adbaf9d35dc2355e6970d64f3_0437810db5" tabIndex={-1} defaultValue="" />
                            </div>
                        </div>
                    </form>
                </div>
                <nav>
                    <header className="text-black font-semibold pt-4">Socials</header>
                    <div className="grid grid-flow-col pr-8 gap-4">
                        <a className="hover:opacity-80 hover:cursor-pointer" target="_blank" href="https://instagram.com/cureforcause?igshid=MTk0NTkyODZkYg%3D%3D&utm_source=qr"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" fill="url(#gradient)" viewBox="0 0 30 30">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                    <stop offset="0%" style={{stopColor: '#FDE047'}} />
                                    <stop offset="50%" style={{stopColor: '#F97294'}} />
                                    <stop offset="100%" style={{stopColor: '#4F46E5'}} />
                                </linearGradient>
                            </defs>
                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                        </svg></a>
                        <a className="hover:opacity-80 hover:cursor-pointer" target="_blank" href="mailto:cureforcause.info@gmail.com">
                            <svg viewBox="0 0 900 1000" fill="url(#blueGradient)" height="30" width="30">
                                <defs>
                                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: '#65AEDD' }} />
                                        <stop offset="50%" style={{ stopColor: '#3490DC' }} />
                                        <stop offset="100%" style={{ stopColor: '#1E3A8A' }} />
                                    </linearGradient>
                                </defs>
                                <path d="M30 264C8.667 252-.667 238.667 2 224c1.333-9.333 10-14 26-14h846c25.333 0 32 10.667 20 32-5.333 9.333-13.333 16.667-24 22-9.333 4-73.333 38-192 102s-179.333 96.667-182 98c-10.667 6.667-26 10-46 10-18.667 0-34-3.333-46-10-2.667-1.333-63.333-34-182-98S39.333 268 30 264m850 100c13.333-6.667 20-3.333 20 10v368c0 10.667-5.667 21.333-17 32-11.333 10.667-22.333 16-33 16H50c-10.667 0-21.667-5.333-33-16-11.333-10.667-17-21.333-17-32V374c0-13.333 6.667-16.667 20-10l384 200c12 6.667 27.333 10 46 10s34-3.333 46-10l384-200" />
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    )
}

export default Footer;
