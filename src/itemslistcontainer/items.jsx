function Items({imag,titulo,precio,descripcion,boton}){
    return(
        <div>
            <div>
                <img src={imag} alt="productos"/>
            </div>
            <div>
                <h2>{titulo}</h2>
                <h3>{precio}</h3>
                <p>{descripcion}</p>
                <button>{boton}</button>
            </div>
        </div>
    )
}

export default Items;