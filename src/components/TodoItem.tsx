import TodoBox from "./TodoBox.tsx";
import Checker from "./Checker.tsx";
import React from "react";

const TodoItem = ({children}: { children?: React.ReactNode }) => {
    return (
        <li>
            <TodoBox className="gap-4">
                <Checker/>
                <p className="text-margin-fix line-through flex-1">{children}</p>
                <span className="cursor-pointer">
                    <img src="/src/assets/images/icon-cross.svg" alt="x"/>
                </span>
            </TodoBox>
        </li>
    )
}
export default TodoItem
