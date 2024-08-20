import { CardProps } from "../../props/CardProps";

const Card = (props: CardProps) => {

    const imageFocused = props.focus === "Image";
    const headingFocused = props.focus === "Heading";
    const textFocused = props.focus === "Text";

    return <div className={`card-base 
    ${headingFocused ? "flex-col" : 
    props.imageLocation === "End" ? `flex-row-reverse ${imageFocused ? "p-0 gap-0" : "gap-4"}` : 
    imageFocused ? "p-0 gap-0" : "gap-4" }`}>
        {headingFocused ?
            <>
                <h2 className="pb-2 font-bold text-2xl" >Card Heading</h2>
                <div className={`flex ${props.imageLocation === "End" ? "flex-row-reverse gap-4" : "gap-4"} h-full`}>
                    <img className="rounded-md" src="https://source.unsplash.com/random/300x300?sig=1" />
                    <div className="flex flex-col h-auto">
                        <p className="flex-grow flex flex-wrap max-w-96">
                            We're no strangers to love
                            You know the rules and so do I (do I)
                            A full commitment's what I'm thinking of
                            You wouldn't get this from any other guy
                        </p>
                        <div className="flex justify-center items-center px-11">
                            {props.children}
                        </div>
                    </div> 
                </div>
            </> 
        : 
            <>
                <img className={`${imageFocused ? "shadow-[0_0_10px] shadow-purple-600" : "rounded-md"}`} src="https://source.unsplash.com/random/300x300?sig=1" />
                <div className={`flex flex-col ${imageFocused && "p-4"}`}>
                    <h2 className={`pb-2 font-bold ${textFocused ? "text-2xl" : "text-xl"}`}>Card Heading</h2>
                    <p className={`flex-grow flex flex-wrap max-w-96 ${textFocused && "font-medium text-lg"}`}>
                        We're no strangers to love
                        You know the rules and so do I (do I)
                        A full commitment's what I'm thinking of
                        You wouldn't get this from any other guy
                    </p>
                    <div className="flex justify-center items-center px-11">
                        {props.children}
                    </div>
                </div>
            </>
        }
    </div>;
}
 
export default Card;