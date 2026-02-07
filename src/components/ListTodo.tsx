import TodoItem from "./TodoItem.tsx";
import TodoBox from "./TodoBox.tsx";
const ListTodo = () => {
    return (
        <div className="w-full">
            <ul className="w-full">
                <TodoItem>Complete</TodoItem>
                <TodoItem>10 minutes meditation</TodoItem>
                <TodoItem>Read for 1 hour</TodoItem>
                <TodoItem>Pick up groceries</TodoItem>
                <TodoItem>Complete Todo App on Frontend Mentor</TodoItem>
            </ul>
            <TodoBox className="justify-between">
                <span className="text-sm text-gray-400 text-margin-fix">5 items left</span>
                <span className="text-sm text-gray-400 cursor-pointer text-margin-fix">Clear Completed</span>
            </TodoBox>
        </div>
    )
}
export default ListTodo
