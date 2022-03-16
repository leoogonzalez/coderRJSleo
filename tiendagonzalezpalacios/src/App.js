import NavBar from './components/NavBar';
import Main from  "./Main"
import Footer from "./Footer"
import {BrowserRouter} from "react-router-dom"





const App = () => {
  
return(

    <BrowserRouter>

    <div id="root">
         <NavBar/>
        <Main/>
         <Footer/>
    </div> 

 </BrowserRouter>

) 

} 

export default App