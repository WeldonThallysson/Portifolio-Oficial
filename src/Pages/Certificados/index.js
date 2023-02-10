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
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoHtml2.png")}
                className="Img__Certificado"
              />
            </li>
         
            
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoHtml3.png")}
                className="Img__Certificado"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoHtml4.png")}
                className="Img__Certificado"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoArquitetura.png")}
                className="Img__Certificado"
              />
            </li>
          </div>
          <div className="Conteiner__Certificados">
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoFlexBox.png")}
                className="Img__Certificado"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificademJavascript.png")}
                className="Img__Certificado"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoResponsividade.png")}
                className="Img__Certificado"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoemUx.png")}
                className="Img__Certificado"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoReactNative.png")}
                className="Img__Certificado udemy"
              />
            </li>
          </div>

          <div className="Conteiner__Certificados CursoemVideo">
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoHtmlCv.jpeg")}
                className="Img__Certificado"
              />
            </li>

            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoPython3.jpeg")}
                className="Img__Certificado"
              />
            </li>
            <li className="Itens__Certificados">
              <img
                src={require("../../Assets/Image/CertificadoAlgoritmos.jpeg")}
                className="Img__Certificado"
              />
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}
