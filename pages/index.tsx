import type { NextPage } from "next";
import Image from "next/image";
import profile from "/public/profile.png";
import { Sun, List } from "phosphor-react";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full  bg-slate-800 p-8 font-mono">
      <nav className="h-8 w-full flex justify-end gap-4">
        <Sun className="text-amber-300" size={32}></Sun>
        <List className="text-slate-500" size={32}></List>
      </nav>
      <main className="flex flex-col items-center mt-6">
        <Image
          src={profile}
          width={128}
          height={128}
          alt="Enzo's Emoji"
        ></Image>
        <h1 className="text-2xl font-bold text-white w-[195px] text-center mt-4">
          Olá, eu sou o Enzo Mazoco
        </h1>
        <div className="w-80 flex flex-col px-3 py-4 mt-10 bg-slate-700 border border-slate-500 rounded-md">
          <span className="text-white font-medium text-sm">
            Entre em contato comigo
          </span>
          <div className="bg-slate-600 w-full rounded-md outline-none px-4 py-3 mt-6 border border-slate-500">
            <span className="text-white text-sm">
              enzo.rodrigues2@gmail.com
            </span>
          </div>
          <button className="w-full mt-4 text-sm text-white text-center py-3 bg-blue-500 rounded-md hover:bg-blue-500/75">
            Copiar
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
