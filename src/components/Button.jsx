import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    icon,
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-3 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
           
            {children}
            {icon && 
                <div>{icon}</div>
            }
        </button>
    );
}