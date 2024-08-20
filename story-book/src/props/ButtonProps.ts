export interface ButtonProps extends React.ComponentProps<"button">{
    shape?: "Pill" | "Round" | "Square";
    scheme?: "Primary" | "Secondary" | "Outline" | "Text";
    label?: string;
    fullWidth?: boolean;
    onButtonClick?: () => void;
}