import { BrowserRouter , Routes ,Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Parts from "./components/Parts";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/parts" element={<Parts />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
