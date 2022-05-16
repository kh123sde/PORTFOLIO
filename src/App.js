import { Route, Routes } from 'react-router-dom';
import './App.css';
import Education1 from './Components/Education1';
import Home from './PrtfolioContainer/Home/Home';

function App() {
  return (
  
  <> 
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/hire" element={<Education1/>}/>
  </Routes>
</>

  
    
);
}

export default App;
