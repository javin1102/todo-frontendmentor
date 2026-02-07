import React from "react";

const TodoBox = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`w-full h-12.5 bg-white rounded-sm shadow-md px-6 py-2 flex items-center ${className}`}>
            {children}
        </div>
    )
}
export default TodoBox
