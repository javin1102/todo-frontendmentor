import TodoBox from "./components/TodoBox.tsx";

const FilterTodo = () => {
    return (
        <TodoBox className="justify-center gap-8">
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
        </TodoBox>
    )
}
export default FilterTodo
