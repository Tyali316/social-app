import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="friends" element={<Friends />} />
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>  
    </BrowserRouter>
  );
}


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

export default App;
