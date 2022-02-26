import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
const App = () => {
  
 
return <div id="root">
      <Header>
        <NavBar/>
      </Header>
      <Main>
      <ItemListContainer/>
      </Main>
    <Footer></Footer>
</div>
} 

export default App