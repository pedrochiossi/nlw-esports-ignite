import "./styles/main.css";
import logo from "./assets/logo-nlw-esports.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logo} alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a className="relative rounded-lg overflow-hidden" href="game-1">
          <img src="/game-1.png" alt="game-1" />
          <div className="absolute bottom-0 right-0 left-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="game-2">
          <img src="/game-2.png" alt="game-2" />
          <div className="absolute bottom-0 right-0 left-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="game-3">
          <img src="/game-3.png" alt="game-3" />
          <div className="absolute bottom-0 right-0 left-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="game-4">
          <img src="/game-4.png" alt="game-4" />
          <div className="absolute bottom-0 right-0 left-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="game-5">
          <img src="/game-5.png" alt="game-5" />
          <div className="absolute bottom-0 right-0 left-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="game-6">
          <img src="/game-6.png" alt="game-6" />
          <div className="absolute bottom-0 right-0 left-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 rounded-lg bg-nlw-gradient mt-8 overflow-hidden max-w-[1200px] w-full">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="text-white font-medium bg-violet-500 rounded-md flex items-center gap-3 py-3 px-4 hover:bg-violet-600">
            <MagnifyingGlassPlus color="white" size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
