import React from 'react';

import Home from '../Pages/Home/Home';
import QuemSou from '../Pages/QuemSou/QuemSou';
import Portifolio from '../Pages/Portifolio/Portifolio';
import Contato from '../Pages/Contato/Contato';
import Certificados from '../Pages/Certificados/index'
import './rotas.css'

export default function RotasScroll() {
 return (
 
   
   <main className='Conteiner__Geral'>
 
          <div id='Home'>
            <Home/>
          </div>

            <div id='QuemSou'>
            <QuemSou/>
           </div>
        <div id="Certificados">
          <Certificados/> 
         </div>
       
        <div id='Portifolio'>
           <Portifolio/>
         </div>

        

        <div id='Contato'>
           <Contato/>
        </div>
          
        
      
      
   </main>

   

  );
}