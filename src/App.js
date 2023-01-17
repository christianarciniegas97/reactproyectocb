import Itemlistcontainer from "./itemscontainer/itemListContaniner";
import Navbarapp from "./navbar/navbarf";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetail from "./pdp/itemdeatail";


function App() {
  return (
      <BrowserRouter>
          <Navbarapp />
          <Routes>
              <Route path="/" element={<Itemlistcontainer />} />
              <Route path="/item/:id" element={<ItemDetail />} />
              <Route path="/category/:category" element={ < Itemlistcontainer/>} />
          </Routes> 
      </BrowserRouter>
  );
}

export default App;
 