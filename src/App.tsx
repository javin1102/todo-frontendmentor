import Header from "./Header.tsx";
import MainSection from "./MainSection.tsx";
import { TodoProvider } from "./contexts/ProviderTodo.tsx";

function App() {
  return (
    <TodoProvider>
      <div className="w-svw h-svh relative bg-gray-100">
        <img
          src="/src/assets/images/bg-mobile-light.jpg"
          className="object-cover absolute w-full h-[35%] top-0"
          alt="background"
        />
        <div className="w-[80%] max-w-150 py-12 flex flex-col items-center gap-8 mx-auto text-gray-500 relative z-10">
          <Header />
          <MainSection />
        </div>
      </div>
    </TodoProvider>
    // </ContextTodo.Provider>
  );
}

export default App;
