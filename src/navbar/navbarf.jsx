import "./navbarsty.css";



function Navbarapp (){
    return(
        <div className="navS">
            <a href="/">
            <img className="homelogo" src="/assets/img/logoalahome.png" alt="logoalahomepage" />
            </a>
            <input className="searchbox" type="text"  placeholder="puedes encontrar productos aqui.."/>
            <div className="divor">
                 <ul className="orul">
                    <li className="uls">
                            <a href="/">Zapatillas</a>
                    </li>
                    <li className="uls">
                        <a href="/">Remeras</a>
                    </li>
                    <li className="uls">
                        <a href="/">Buzos</a>
                    </li>
                </ul>
                <img src="/assets/img/cart.png" alt="carrito" className="tCarrito"/>
            </div>
        </div>
    )
}

export default Navbarapp;