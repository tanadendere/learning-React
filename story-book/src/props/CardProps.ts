export interface CardProps extends React.ComponentProps<"div">{
    focus?: "Image" | "Heading" | "Text";
    imageLocation?: "Start" | "End";
}