import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/context";
import Carousel from "react-elastic-carousel";
import { GoProject } from "react-icons/go";
import "./estilos.css";

const breakPoints = [
  { width:1 , itemsToShow: 1 },
  { width:550, itemsToShow: 1},
  { width: 768, itemsToShow:1,itemsToScroll: 1},
  { width: 1200, itemsToShow: 1},
];

export default function Portifolio() {
  const { items } = useContext(AuthContext);

  return (
    <section className="Conteiner">
      <div className="Conteiner__TituloPortifolio">
        <h3 className="Titulo__Certificados">Portfólio</h3>
        <GoProject color="white" size={25} />
      </div>

      <Carousel breakPoints={breakPoints} className="carousel__portifolio" autoPlaySpeed={1000}>
        {items.map((item) => (
          <div className="Conteiner__Lista" key={item.id}>
            <ul className="Lista__Portifolio" >
              <li className="Itens__Portifolio" >
                <div className="Conteiner__Conteudo">
                  <img
                    src={item.img[1]}
                    alt="site pequenos de jesus"
                    className="Imagens__Portifolio primeiro"
                  />
                  <span className="Subtitulo__Portifolio texto__descricao">
                    {item.nomes[1]}
                  </span>
                  <p className="Descricao__Portifolio">
                   {item.desc[1]}
                  </p>
                  <a
                    className="Btn__Portifolio"
                    href={item.links[1]}
                    target="_blank"
                  >
                    Saiba Mais
                  </a>
                </div>
              </li>
              <li className="Itens__Portifolio">
                <div className="Conteiner__Conteudo">
                  <img
                    src={item.img[2]}
                    alt="site pequenos de jesus"
                    className="Imagens__Portifolio"
                  />
        
                  <span className="Subtitulo__Portifolio">{item.nomes[2]}</span>
                  <p className="Descricao__Portifolio">
                   {item.desc[2]}
                  </p>
                  <a
                    className="Btn__Portifolio"
                    href={item.links[2]}
                    target="_blank"
                  >
                    Saiba Mais
                  </a>
                </div>
                
              </li>

              <li className="Itens__Portifolio alterado__baixaResolucao">
                <div className="Conteiner__Conteudo">
                  <img
                    src={item.img[3]}
                    alt="site pequenos de jesus"
                    className="Imagens__Portifolio"
                  />
                  <span className="Subtitulo__Portifolio">{item.nomes[3]}</span>
                  <p className="Descricao__Portifolio">
                   {item.desc[3]}
                  </p>
                  <a
                    className="Btn__Portifolio"
                    href={item.links[3]}
                    target="_blank"
                  >
                    Saiba Mais
                  </a>
                </div>
              </li>
            </ul>
            
          </div>
        ))}
      </Carousel>

    </section>
  );
}
