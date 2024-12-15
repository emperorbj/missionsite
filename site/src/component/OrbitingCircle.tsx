/// ORBITING CIRCLES WITH COUNTRY FLAGS
import OrbitingCircles from "@/components/ui/orbiting-circles";

export function OrbitingCirclesDemo() {
    return (
        <div className="relative flex h-[650px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                Nations
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <Flags.usa/>
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] rounded-md  border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <Flags.nigeria />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] rounded-md  border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <Flags.france />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="size-[50px] rounded-md  border-none bg-transparent"
                radius={190}
                duration={20}
                reverse
            >
                <Flags.southAfrica />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] rounded-md border-none bg-transparent"
                radius={190}
                duration={20}
                delay={20}
                reverse
            >
                <Flags.germany />
            </OrbitingCircles>
        </div>
    );
}

const Flags = {
    usa: () => (
        <svg className="rounded-md" width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="#B22234" />
            <g fill="#FFFFFF">
                <rect y="1.384" width="24" height="1.846" />
                <rect y="4.615" width="24" height="1.846" />
                <rect y="7.846" width="24" height="1.846" />
                <rect y="11.077" width="24" height="1.846" />
                <rect y="14.308" width="24" height="1.846" />
                <rect y="17.538" width="24" height="1.846" />
                <rect y="20.769" width="24" height="1.846" />
            </g>
            <rect width="9.231" height="7.384" fill="#3C3B6E" />
            <g fill="#FFFFFF">
                <circle cx="1.231" cy="1.231" r="0.615" />
                <circle cx="2.769" cy="2.769" r="0.615" />
                <circle cx="4.308" cy="1.231" r="0.615" />
                <circle cx="5.846" cy="2.769" r="0.615" />
                <circle cx="7.384" cy="1.231" r="0.615" />
                <circle cx="1.231" cy="3.846" r="0.615" />
                <circle cx="2.769" cy="5.385" r="0.615" />
                <circle cx="4.308" cy="3.846" r="0.615" />
                <circle cx="5.846" cy="5.385" r="0.615" />
                <circle cx="7.384" cy="3.846" r="0.615" />
            </g>
        </svg>
    ),
    nigeria: () => (
        <svg className="rounded-md" width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="8" height="24" fill="#008753" />
            <rect x="8" width="8" height="24" fill="#FFFFFF" />
            <rect x="16" width="8" height="24" fill="#008753" />
        </svg>
    ),
    kenya: () => (
        <svg className="rounded-md" width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="#FF0000" />
            <rect y="5.5" width="24" height="3.5" fill="#FFFFFF" />
            <rect y="15" width="24" height="3.5" fill="#FFFFFF" />
            <rect y="9" width="24" height="6" fill="#FF0000" />
            <g fill="#FFFFFF">
                <path d="M11.5 10.5L12 11.5L12.5 10.5H11.5Z" />
                <path d="M11.5 13.5L12 12.5L12.5 13.5H11.5Z" />
            </g>
            <path d="M12 7L11.5 8H12.5L12 7ZM12 17L12.5 16H11.5L12 17Z" fill="#000000" />
            <ellipse cx="12" cy="12" rx="1.5" ry="3.5" fill="#000000" />
        </svg>
    ),
    southAfrica: () => (
        <svg className="rounded-md" width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="#002395" />
            <polygon points="0,0 24,12 0,24" fill="#FFB915" />
            <polygon points="0,0 21,12 0,24" fill="#FFFFFF" />
            <polygon points="0,0 20,12 0,24" fill="#007847" />
            <polygon points="0,9 10.5,12 0,15" fill="#000000" />
            <polygon points="0,8.5 9.5,12 0,15.5" fill="#FF0000" />
        </svg>
    ),


    france: () => (
        <svg className="rounded-md" width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="8" height="24" fill="#0055A4" />
            <rect x="8" width="8" height="24" fill="#FFFFFF" />
            <rect x="16" width="8" height="24" fill="#EF4135" />
        </svg>
    ),
    germany: () => (
        <svg className="rounded-md" width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="8" fill="#000000" />
            <rect y="8" width="24" height="8" fill="#DD0000" />
            <rect y="16" width="24" height="8" fill="#FFCE00" />
        </svg>
    ),
};
