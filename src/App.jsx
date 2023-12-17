import './App.css';
import LoginPage from "./Component/LoginPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <>
   <LoginPage />
   <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={ <Home />} /> */}
          {/* <Route path="/LoginPage" element={ <LoginPage />} /> */}
          {/* <Route path="/Register" element={ <Register />} />
          <Route path="/Reset" element={ <Reset />} /> */}
        </Routes>
     {/* <Footer /> */}
   </BrowserRouter>
   </>
  </div>
  );
}

export default App;
