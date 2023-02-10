import React,{useState,createContext} from 'react';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'


export const AuthContext = createContext({})

export default function Context({children}) {
  const [items,setItems] = useState([
    {id:1,
      img: {
        1: require('../Assets/Image/SitePequenos.png'),
        2: require('../Assets/Image/SpaceCall.png'),
        3: require('../Assets/Image/SiteTask.png'),
      },
      links:{
        1:'https://github.com/WeldonThallysson/Pequenos_De_Jesus',
        2:'https://github.com/WeldonThallysson/Space_Call_Sistema_de_Chamados',
        3:'https://github.com/WeldonThallysson/Tasks-React-Js',
      },
      nomes:{
        1: 'Pequenos de Jesus', 
        2: 'Space Call',
        3: 'Task Online'
      },
      desc:{
        1: 'Site feito com React,Html5,css3 e javascript, com integração de envio de email E Dowloads de Pdfs gratuitos',
        2: 'Sistema de Chamados com ContextApi, Firebase, Database, authentication, storage, hooks e muito mais, o projeto tem o objetivo de cadastrar clientes e abrir chamados',
        3: 'Aplicação para criar Tarefas feita em React Js,Firebase,Database e LocalStorage, o projeto tem o objetivo de salvar tarefas do dia a dia'
      }
    },
    {
      id:2,
      img:{
        1: require('../Assets/Image/LandMarioBross.png'),
        2: require('../Assets/Image/Academy.png'),
        3: require('../Assets/Image/ReactFilms.png'),
      },
      links:{
        1:'https://github.com/WeldonThallysson/Projeto-Super-Mario-Bross',
        2:'https://github.com/WeldonThallysson/Academy-Aplication-PhP/tree/main',
        3:'https://github.com/WeldonThallysson/React_Films',
      },
      nomes:{
        1: 'Landing Page Mario Bross',
        2: 'Academy',
        3: 'React Filmes'
      },
      desc:{
        1: 'Landing page do Mario bross feita apenas com Html 5 css3 e javascript com Modal Trailer.',
        2: 'Sistema Academy, projeto de gerenciamento de cadastros de alunos em instituições feito com linguagem Php e MySQL em um CRUD.',
        3: "Site feito com React js e Requisições Http com Axios em Api TMDB(The Movie Database) com listagem de filmes e favoritos "
      }

    },
    
])



     function enviarEmail(nome,email,mensagem){
      
      const templateParams = {
         to_name: nome,
         message: mensagem,
         email: email
      }

      emailjs.send("service_wmq0fuo","template_wasq0xn",templateParams,"ZaYU3qyoqaPncnWm9")
      .then(() => {
          toast.success('Obrigado! mensagem enviada com sucesso')
      })
      .catch(() => {
          toast.dismiss('Error, Por favor tente novamente')
      })

    }

    return (


       <AuthContext.Provider value={{
       items,
       enviarEmail
    }}>
    
    
    {children}

   </AuthContext.Provider>

  );
}