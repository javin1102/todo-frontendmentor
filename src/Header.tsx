const Header = () => {
    return (
        <div className="flex w-full h-full justify-between items-center">
            <h1 className="text-[24px]  h-fit tracking-[0.5em] font-bold text-white">TODO</h1>
            <button className="h-fit hover:cursor-pointer">
                <img src="/src/assets/images/icon-moon.svg" alt="moon icon"/>
            </button>
        </div>
    )
}
export default Header
