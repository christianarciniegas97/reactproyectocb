import Itemlistcontainer from "./itemslistcontainer/itemListContaniner";
import Navbarapp from "./navbar/navbarf";

function App() {
  return (
    <div>
      <header>
        <Navbarapp />
      </header>
      <Itemlistcontainer 
       greating="Bienvenidos a mi primer ecommerce con react js"
       />
    </div>
  );
}

export default App;
