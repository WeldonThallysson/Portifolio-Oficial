import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Context from "./Context/context";
import RotasScroll from "./Rotas";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    
    <BrowserRouter>
      <Context>
     
      <ToastContainer autoClose={3000}/>

         <Header/>
          <RotasScroll/>
          <Footer/>
      </Context>
     
    </BrowserRouter>
  );
}

export default App;
