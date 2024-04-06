import { Route, Routes } from "react-router";
import Home from "./component/Home";
import Details from "./component/Details";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/detail/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
};

export default App;
