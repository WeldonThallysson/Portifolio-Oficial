import React, { useContext, useState } from "react";
import "./estilos.css";
import { TiContacts } from "react-icons/ti";
import { AuthContext } from "../../Context/context";
import { toast } from "react-toastify";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const { enviarEmail } = useContext(AuthContext);

  function enviarMensagem(e) {
    e.preventDefault();
    if (nome === "" || email === "" || mensagem === "") {
      toast.dismiss("Por favor preencha os campos corretamente");
      return;
    } else {
      enviarEmail(nome, email, mensagem);
      setNome("");
      setEmail("");
      setMensagem("");
    }
  }

  return (
    <section className="Section__Contact">
        <div className="Container__TitleP">
          <h2 className="Title__P" >Contato</h2>
          <TiContacts color="white" size={25} />
        </div>
      <div className="Container__Contact">
   
        <div className="Container__Form">
          <form className="Form__Contact" onSubmit={enviarMensagem}>
            <input
              value={nome}
              onChange={(text) => setNome(text.target.value)}
              required
              placeholder="Nome"
              type="text"
              className="Input__Contact"
            />
            <input
              value={email}
              onChange={(text) => setEmail(text.target.value)}
              required
              placeholder="Email"
              type="email"
              className="Input__Contact"
            />
            <textarea
              value={mensagem}
              onChange={(text) => setMensagem(text.target.value)}
              required
              placeholder="Mensagem"
              className="Input__Contact--textarea"
              cols={22}
              rows={11}
            />

            <span className="span__submit">
              <input type="submit" value="Enviar" className="btn__submit" />
            </span>
            <a
            href={require("../../Assets/Pdf/Cv Weldon DevFullStack.pdf")}
            download
            className="Dowload__Cv diferente"
          >
            Baixar meu Cv
          </a>
          </form>
        </div>
        <div className="Container__MsgContact">
          <h2 className="title__Contact">Entre em Contato Direto Comigo !</h2>
          <img
            className="Img__Contact"
            src={require("../../Assets/Image/Contato.png")}
            alt="cartoon homem com prancheta"
          />
          <a
            href={require("../../Assets/Pdf/Currículo Dev Thallysson.pdf")}
            download
            className="Dowload__Cv"
          >
            Baixar meu Cv
          </a>
        </div>
      </div>
    </section>
  );
}
