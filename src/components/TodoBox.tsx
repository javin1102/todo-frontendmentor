import React from "react";

const TodoBox = ({
  children,
  className,
  roundedTop = true,
  roundedBottom = true,
}: {
  children?: React.ReactNode;
  className?: string;
  roundedTop?: boolean;
  roundedBottom?: boolean;
}) => {
  const borderRadiusClass = `${roundedTop ? "rounded-t-sm" : ""} ${roundedBottom ? "rounded-b-sm" : ""}`;
  return (
    <div
      className={`w-full h-12.5 bg-white ${borderRadiusClass} shadow-md px-6 py-2 flex items-center ${className}`}
    >
      {children}
    </div>
  );
};
export default TodoBox;
