import React from "react";
import { TbCertificate } from "react-icons/tb";
import "./estilos.css";

export default function Certificados() {
  return (
    <section className="Secao__Certificados">
      <div className="borda">
        <div className="Conteiner__TituloCertificados">
          <h3 className="Titulo__Certificados">Certificados</h3>
          <TbCertificate size={32} color="white" />
        </div>
        <ul>
          <div className="Conteiner__Certificados">
          
           
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoHtml1.png")}
                className="Img__Certificado"
                alt="certificado html 5 de weldon thallysson"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoHtml2.png")}
                className="Img__Certificado"
                alt="certificado html 5 parte 2 de weldon thallysson"
              />
            </li>
         
            
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoHtml3.png")}
                className="Img__Certificado"
                alt="certificado de html5 avançado de weldon thallysson"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoHtml4.png")}
                className="Img__Certificado"
                alt="certificado profissional em html5 de weldon thallysson"
              />1
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoArquitetura.png")}
                className="Img__Certificado"
                alt="certificação em arquitetura css3 de weldon thallysson"
              />
            </li>
     
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoFlexBox.png")}
                className="Img__Certificado"
                alt="certificação em flexbox de weldon thallysson pela alura"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificademJavascript.png")}
                className="Img__Certificado"
                alt="Certificação em linguagem de programação javascript de weldon thallysson pela alura"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoResponsividade.png")}
                className="Img__Certificado"
                alt="Certificado de responsividade de weldon thallysson pela alura"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoemUx.png")}
                className="Img__Certificado"
                alt="Certificado em Ui/Ux de weldon thallysson pela alura"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoReactNative.png")}
                className="Img__Certificado udemy"
                alt="Certificação Profissional em Desenvolvimento Mobile de Weldon Thallysson pela Udemy"
              />
            </li>
          </div>

          <div className="Conteiner__Certificados CursoemVideo">
            <li className="Itens__Certificados ">
              <img
                src={require("../../Assets/Image/CertificadoHtmlCv.jpeg")}
                className="Img__Certificado"
                alt="Certificação em Html5 pelo curso em video"
              />
            </li>

            <li className="Itens__Certificados ">
              <img
                src={require("../../Assets/Image/CertificadoPython3.jpeg")}
                className="Img__Certificado"
                alt="Certificação em python3 pelo curso em video"
              />
            </li>
            <li className="Itens__Certificados ">
              <img
                src={require("../../Assets/Image/CertificadoAlgoritmos.jpeg")}
                className="Img__Certificado"
                alt="Certificação em logica de programação pelo curso em video"
              />
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}
