import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
           {color}
           <button onClick={onClick}>Click me</button>
        </div>
    );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return (
        <div>
            Hello! From ChildAsFC component
            <button onClick={onClick}>Click me</button>
        </div>
    )
}