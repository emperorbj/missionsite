import NumberTicker from "@/components/magicui/number-ticker";

const NumberTickerDemo = () => {
    return (
        <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter 
        text-sky-500 dark:text-white">
        <NumberTicker value={240} />
        </p>
    );
    };

export default NumberTickerDemo;