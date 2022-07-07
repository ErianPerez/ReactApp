
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import  './styles.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Body />}></Route>
        <Route path='/category/:category' element={<Body category = 'category'/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
