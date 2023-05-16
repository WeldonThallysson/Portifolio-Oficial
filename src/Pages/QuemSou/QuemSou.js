import React from "react";
import { FaHeadSideVirus } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { FaGit } from "react-icons/fa";
import "./estilos.css";
import video from "../../Assets/Videos/video.mp4";
export default function QuemSou() {
  return (
    <section className="Conteiner__PrincipalQs">
      <div className="Pai">
        <div className="fundo__video">
          <video className="video" autoPlay loop muted>
            <source src={video} alt="video de apresentação" />
          </video>
        </div>

        <div className="Retangulo__Img">
          <div>
            <img
              src={require("../../Assets/Image/Quemso.png")}
              className="Img__Retangulo"
              alt="foto de thallysson no playground"
            />
          </div>
        </div>
        <div className="retangulo">
          <div className="Conteiner__SobreMim">
            <h2 className="Titulo__Skills">Sobre Mim</h2>
            <span className="Subtitulo">
              Desenvolvedor Front end Web / Mobile
            </span>
            <p className="Descricao__Geral">
              Iniciei minha jornada em <strong>2019</strong>, começando com{" "}
              <strong>Desenvolvimento Front end</strong> e logo após{" "}
              <strong>Desenvolvimento Mobile</strong> com React Native, hoje sou
              cursado em ambas as areas e essas são as minhas skills{" "}
            </p>
          </div>
          <div className="Conteiner__LinhaDecorada">
            <hr className="Linha__Decorada" />
          </div>
          <div className="Conteiner__Skills">
            <h3 className="Titulo__Skills">Skills</h3>

            <div className="Conteiner1">
              <div className="Logica__Programacao">
                <FaHeadSideVirus size={25} color="#396e53" />
                <strong className="Subtitulo">Lógica de Programação</strong>
                <p className="Descricao__Geral">
                  Uma das primeiras habilidades que desenvolvi através do curso
                  em video
                </p>
              </div>
              <div className="Desenvolvimento__Sites">
                <MdDeveloperBoard size={25} color="#396e53" />
                <strong className="Subtitulo">Desenvolvimento de Sites</strong>
                <p className="Descricao__Geral">
                  Habilidade que desenvolvi ao longo de 2 anos começando com
                  Html5 e Css3 e hoje com React como framework !{" "}
                </p>
              </div>
            </div>
            <div className="Conteiner1">
              <div className="Desenvolvimento__Mobile">
                <MdOutlineMobileFriendly size={25} color="#396e53" />
                <strong className="Subtitulo">Desenvolvimento Mobile</strong>
                <p className="Descricao__Geral">
                  Essa é minha Principal Skill além do Front Web, desenvolvi
                  essa habilidade com React e React Native de 2019/2022 onde
                  hoje sou certificado na área pela Udemy!
                </p>
              </div>
              <div className="Git__GitHub">
                <FaGit size={25} color="#396e53" />
                <strong className="Subtitulo">Git e Git Hub</strong>
                <p className="Descricao__Geral">
                  Habilidade de versionamento de projetos com Git:
                  "Branches,Tags,Commits,Push,Pull" e Git hub: "Code,Issues e
                  Pull request com Git Hub"
                </p>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
