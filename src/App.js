import logo from './logo.svg';
import './App.css';
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import RightSBar from './Components/RightSBar';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={SideBar}></Route>
        </Routes>
      </BrowserRouter> */}
      <SideBar/>
      <Header/>
      <RightSBar/>
    </div>
  );
}

export default App;
