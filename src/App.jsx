import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoreDetails from "./pages/MoreDetails";

function App() {
  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/more-details" element={<MoreDetails/>}/>
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
