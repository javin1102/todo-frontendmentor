import React from "react";

const TodoBox = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full h-12.5 bg-white dark:bg-navy-900 dark:text-gray-300 shadow-md px-6 py-2 flex items-center ${className}`}
    >
      {children}
    </div>
  );
};
export default TodoBox;
