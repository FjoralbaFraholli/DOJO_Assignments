import React, {useState} from "react";
import Survey from "./components/Survey";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";
    
function App() {
  return (
    <BrowserRouter>
      <Link to={"/Home"}>Home</Link>
      <Link to={"/survey"}>Go to Survey</Link>
      <Routes>
        <Route exact path="/survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App;