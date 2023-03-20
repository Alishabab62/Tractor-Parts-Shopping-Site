import { BrowserRouter , Routes ,Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Parts from "./components/Parts";
import WishList from "./components/WishList";
import Kart from "./components/Kart";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/parts" element={<Parts />}></Route>
        <Route path="/wishlist" element={<WishList/>}></Route>
        <Route path="/kart" element={<Kart/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
