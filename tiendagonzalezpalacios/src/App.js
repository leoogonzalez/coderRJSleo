import NavBar from './components/NavBar';
import Main from  "./Main"
import Footer from "./Footer"
import {BrowserRouter} from "react-router-dom";
import MiProvider from './contexto/CartContext';

const App = () => {
  
return (
  <MiProvider>
    <BrowserRouter>
      <div id="root">
        <NavBar />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  </MiProvider>
)

} 

export default App