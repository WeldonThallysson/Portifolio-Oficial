import React from 'react';
import { Link } from 'react-scroll'
import {FaInstagram,FaWhatsapp} from 'react-icons/fa'
import Logo from '../../Assets/Image/Logo.png'
import './Estilos.css'


export default function Header() {
 return (

   <header className='Conteiner__Cabecalho'>
    
              <div>
                <h2 className='Titulo__Cabacalho'>Thallysson</h2>
              </div>
  
        <div className='Conteiner__Navegacao'>
          
          <nav className='Lista__Navegacao'>
            <ul className='Lista__Itens'>
             
              <li className='Itens'> 
               <Link to="Home" smooth={true} duration={1000} className='Link'>Home</Link>
              </li>
            
              <li className='Itens'>
                <Link to="QuemSou" smooth={true}  duration={1000}  className='Link'>Sobre</Link>
              </li>
                
              <li className='Itens'>
                <Link to="Certificados" smooth={true}  duration={1000}  className='Link'>Certificados</Link>
              </li>
            
                 
              <li className='Itens'>
                <Link to="Portifolio" smooth={true} duration={1000}  className='Link'>Portifólio</Link>
              </li>
              
              <li className='Itens'>
                <Link to="Contato" smooth={true} duration={1000}  className='Link'>Contato</Link></li>

            </ul>
          </nav>
        </div>

       

   </header>

  );
}