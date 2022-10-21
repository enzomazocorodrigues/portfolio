import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Sun, List } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enzo Mazoco</title>
      </Head>
      <div className="h-screen w-full  bg-slate-800 p-8 font-mono">
        <nav className="h-8 w-full flex justify-end gap-4">
          <Sun className="text-amber-300" size={32}></Sun>
          <List className="text-slate-500" size={32}></List>
        </nav>
        <main className="flex flex-col items-center mt-6">
          <Image
            src="/profile.png"
            width={128}
            height={128}
            alt="Enzo's Emoji"
          />
          <Heading className="w-[195px] mt-4 text-center">
            Olá, eu sou o Enzo Mazoco
          </Heading>
          <section className="flex flex-col gap-4 mt-10 w-full">
            <Button className="bg-sky-800">Me adicione no LinkedIn</Button>
            <Button className="bg-gray-900">Visite meu GitHub</Button>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
