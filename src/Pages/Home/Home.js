import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaJava,
  FaPhp,
  FaAngular,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandReactNative, TbBrandJavascript } from "react-icons/tb";

import "./estilos.css";

export default function Home() {
  return (
    <section className="fundopreto">
      <img
        src={require("../../Assets/Image/homeoffice-trabalho-em-casa.jpg")}
        className="imagem"
        alt="Fundo com homem mexendo em computador"
      />

      <div className="Conteiner__icone">
        <div className="Conteiner__Textos">
          <h2 className="Titulo">Weldon Thallysson</h2>
          <p className="Descricao">Desenvolvedor Front End Web / Mobile</p>
        </div>

        <div className="Conteiner__RedesSociais">
          <a href="https://www.linkedin.com/in/weldon-thallysson-54a0a1219/">
            <FaLinkedinIn size={25} />
          </a>
          <a href="https://www.instagram.com/thallysson_programax/">
            <FaInstagram size={25} />
          </a>
          <a href="https://github.com/WeldonThallysson">
            <FaGithub size={25} />
          </a>
        </div>
      </div>

      <div className="Conteiner__Img">
        <div className="Img__Fundo">
          <img
            src={require("../../Assets/Image/Avatar.png")}
            className="Avatar"
            alt="logo de perfil com a foto de weldon thallysosn"
          />
        </div>
      </div>

      <div className="Conteiner__TituloPrincipal">
        <h1 className="Titulo__Principal">
          Olá, Seja Bem Vindo(a) ao Meu Portifolio...
        </h1>
        <div className="Conteiner__Ensignias">
          <FaReact className="ensignias react" color="white" size={25} />

          <TbBrandReactNative
            className="ensignias reactnative"
            color="white"
            size={25}
          />

          <FaAngular className="ensignias angular" color="white" size={25} />
          <FaHtml5 className="ensignias html" color="white" size={25} />
          <FaCss3 className="ensignias css3" color="white" size={25} />

          <SiRedux className="ensignias redux" color="white" size={25} />
          <TbBrandJavascript
            className="ensignias javascript"
            color="white"
            size={25}
          />

          <FaPhp className="ensignias php" color="white" size={26} />
          <FaJava className="ensignias java" color="white" size={25} />

          <FaGitAlt className="ensignias git" color="white" size={25} />
          <FaGithub className="ensignias github" color="white" size={25} />
        </div>
      </div>
    </section>
  );
}
