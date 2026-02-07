import Header from "./Header.tsx";
import MainSection from "./MainSection.tsx";

function App() {
    return (
        <div className="w-svw h-svh relative">
            <img src="/src/assets/images/bg-mobile-light.jpg" className="object-cover absolute w-full h-[35%] -z-10" alt=""/>
            <div className="w-[80%] max-w-150 py-12 flex flex-col items-center gap-8 mx-auto text-gray-500">
                <Header/>
                <MainSection/>
                {/*<div className="w-full h-lvh bg-linear-to-br from-primary-gradient-1 to-primary-gradient-2">*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;
