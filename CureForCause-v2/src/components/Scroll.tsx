import { useEffect, useState } from 'react';

let thumbHeight = 0;
let thumbTop = 0;

const CustomScrollbar: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrollPosition(position);
            setScrollHeight(height);
            thumbHeight = (window.innerHeight / document.documentElement.scrollHeight) * 100;
            thumbTop = (scrollPosition / scrollHeight) * 100;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition, scrollHeight]);

    return (
        <div className="fixed z-[100] right-0 top-0 w-3 h-full">
            <div 
                className="bg-sky-600 rounded-full" 
                style={{ height: `${thumbHeight}%`, transform: `translateY(${thumbTop}%)` }}
            />
        </div>
    );
};

export default CustomScrollbar;