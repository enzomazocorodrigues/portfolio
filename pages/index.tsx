import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Sun, List } from "phosphor-react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Text } from "../components/Text";

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
          <section className="mt-10 w-full flex flex-col">
            <Heading small>Um pouco sobre mim</Heading>
            <Text className="mt-6" small>
              Me chamo Enzo Mazoco Rodrigues, tenho 19 anos e nasci em São
              Paulo, Brasil. Comecei a ter contato com lógica de programação
              desde os 12 anos através do meu pai. Desde então, sempre continuei
              a me aprofundar neste mundo.
            </Text>
            <Text small>
              Hoje, seguramente, posso dizer que sou experiente em
              desenvolvimento em aplicações full-stack baseadas em Node.js.
              Pretendo expandir meu conhecimento sobre o mundo Node.js e dominar
              outras ferramentas que ele pode oferecer.
            </Text>
          </section>
          <section className="mt-10 w-full flex flex-col">
            <Heading small>Meus projetos</Heading>
          </section>
          <section className="mt-10 w-full flex flex-col">
            <Heading small>Minhas habilidades</Heading>
          </section>
        </main>
        <footer className="w-full mt-8 bg-slate-900 p-8 flex flex-col items-center">
          <div className="w-full flex flex-col gap-8 max-w-md">
            <Card className="w-full flex flex-col gap-4">
              <Text className="font-semibold">Entre em contato comigo</Text>
              <Input value="enzo.rodrigues2@gmail.com" disabled />
              <Button className="bg-blue-500">Copiar</Button>
            </Card>
            <div className="w-full flex flex-col gap-4">
              <Button className="bg-sky-800">Me adicione no LinkedIn</Button>
              <Button className="bg-gray-800">Visite meu GitHub</Button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
