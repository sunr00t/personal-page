import React from 'react';
import Image from 'next/image';
import profile from '../public/profile.jpg';

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Olá!
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Sou graduando em Ciência da Computação.
              Tenho estudado soluções em sistemas distribuídos e aplicações escaláveis usando Docker e PaaS (CapRover).
            </p>
            <p className="mt-4">
              Possuo conhecimento em Linux, Git, Bash e Administração de Servidores (Windows/Linux). 
              Atualmente tenho participado de projetos backend em Ruby on Rails, NodeJS e utilizando bibliotecas como ReactJS e NextJS.
            </p>
            <p className="mt-4">
              Nas horas vagas gosto de ler sobre Mercado Financeiro e acompanho também a cultura DevOps e CyberSecurity.  
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
