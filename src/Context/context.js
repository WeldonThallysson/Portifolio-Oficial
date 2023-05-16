import React,{useState,createContext} from 'react';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'


export const AuthContext = createContext({})

export default function Context({children}) {
  const [items,setItems] = useState([
    {id:1,
      img: {
        1: require('../Assets/Image/Flynvi.png'),
        2: require('../Assets/Image/SpaceCall.png'),
        3: require('../Assets/Image/Academy.png'),
      },
      links:{
        1:'https://github.com/WeldonThallysson/Flynvi-sistema-de-viagens',
        2:'https://github.com/WeldonThallysson/Space_Call_Sistema_de_Chamados',
        3:'https://github.com/WeldonThallysson/Tasks-React-Js',
      },
      nomes:{
        1: 'Flynvi Sistema de Viagens', 
        2: 'Space Call',
        3: 'Academy'
      },
      desc:{
        1: 'Sistema feito com React,Requisições http com axios,Redux e Redux saga com muitas outras bibliotecas...',
        2: 'Sistema de Chamados com ContextApi, Firebase, Database, authentication, storage, hooks e muito mais, o projeto tem o objetivo de cadastrar clientes e abrir chamados',
        3: 'Sistema Academy, projeto de gerenciamento de cadastros de alunos em instituições feito com linguagem Php e MySQL em um CRUD.'
      }
    },
    {
      id:2,
      img:{
        1: require('../Assets/Image/LandMarioBross.png'),
        2: require('../Assets/Image/SiteTask.png'),
        3: require('../Assets/Image/ReactFilms.png'),
      },
      links:{
        1:'https://github.com/WeldonThallysson/Projeto-Super-Mario-Bross',
        2:'https://github.com/WeldonThallysson/Academy-Aplication-PhP/tree/main',
        3:'https://github.com/WeldonThallysson/React_Films',
      },
      nomes:{
        1: 'Landing Page Mario Bross',
        2: 'Task Online',
        3: 'React Filmes'
      },
      desc:{
        1: 'Landing page do Mario bross feita apenas com Html 5 css3 e javascript vanilla com Modal Trailer.',
        2: 'Aplicação para criar Tarefas feita em React Js,Firebase,Database e LocalStorage, o projeto tem o objetivo de salvar tarefas do dia a dia',
        3: "Site feito com React js e Requisições Http com Axios em Api TMDB(The Movie Database) com listagem de filmes e favoritos "
      }

    },

    {
      id:3,
      img:{
        1: require('../Assets/Image/BluesStack.png'),
        2: require('../Assets/Image/blogstore.png'),
        3: require('../Assets/Image/SitePequenos.png'),
      },
      links:{
        1:'https://github.com/WeldonThallysson/blues-stack-cognita-',
        2:'https://github.com/WeldonThallysson/BlogStore',
        3:'https://github.com/WeldonThallysson/Pequenos_De_Jesus',
      },
      nomes:{
        1: 'Blues Stack',
        2: 'BlogStore',
        3: 'Pequenos de Jesus'
      },
      desc:{
        1: 'Sistema de listagem das melhores musicas, nessa aplicação foi feito react js firebase,firestore, context Api e muito mais...',
        2: 'blogstore como o proprio nome se refere, é uma aplicação baseade em um blog, feita com react js, requisições http a api com axios,bibliotecas de icons e muito mais...',
        3: "Site em React js,com o objetivo de fornecer inumeras atividade e dowloads gratuitos, com bibliotecas como email.js e toastfy, react-router-dom e muito mais..."
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