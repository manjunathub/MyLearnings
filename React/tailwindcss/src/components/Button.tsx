import {ReactNode} from "react";

interface ButtonProps {
    children?: ReactNode;
    props: ButtonProps;
    onClick: () => void;
}

function Button({children,onClick,  ...props}:ButtonProps) {
    //Adding psudeo classers in tailwind
    return (
        <button className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500" {...props} onClick={onClick}>{children}</button>
    );
}

export default Button;
