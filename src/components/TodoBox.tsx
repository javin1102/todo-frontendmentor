import React from "react";

const TodoBox = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
  roundedTop?: boolean;
  roundedBottom?: boolean;
}) => {
  return (
    <div
      className={`w-full h-12.5 bg-white group-first:rounded-t-sm group shadow-md px-6 py-2 flex items-center ${className}`}
    >
      {children}
    </div>
  );
};
export default TodoBox;
