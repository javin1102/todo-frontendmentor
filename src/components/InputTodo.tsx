import TodoBox from "././TodoBox.tsx";
import Checker from "./Checker.tsx";

const InputTodo = () => {
    return (
        <TodoBox className="gap-4">
            <Checker/>
            <input placeholder="Create a new todo.." className="h-fit mt-1.5 outline-none" id="todo" name="todo"/>
        </TodoBox>
    )
}
export default InputTodo
