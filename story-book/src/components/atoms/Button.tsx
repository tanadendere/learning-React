import { ButtonProps } from "../../props/ButtonProps";
 
const Button = (props: ButtonProps) => {

    let className = "btn-base";

    switch (props.scheme) {
        case "Outline": className += " btn-outline";
            break;
        case "Primary": className += " btn-primary"; 
            break;
        case "Secondary": className += " btn-secondary"; 
            break;
        case "Text": className += " btn-text"; 
            break;
    }

    switch (props.shape) {
        case "Round": className += " aspect-square rounded-full";
            break;
        case "Pill": className += " rounded-full"; 
            break;
        case "Square": className += " rounded-lg"; 
            break;
    }

    return <button type="button" 
        className={className + ` ${props.fullWidth && "w-full"}`}>
            {props.label ?? props.children}
        </button>;
}
 
export default Button;