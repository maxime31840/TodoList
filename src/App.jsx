import "./App.css";
import HeaderCustom from "./Components/HeaderCustom/HeaderCustom";
import Content from "./Components/Contenu/Content";
import FooterCustom from "./Components/FooterCustom/FooterCustom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-600 text-white">
      <HeaderCustom />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-slate-500 text-gray-800 p-6 rounded-xl shadow-xl w-full max-w-lg">
          <Content />
        </div>
      </main>
      <FooterCustom />
    </div>
  );
}

export default App;
