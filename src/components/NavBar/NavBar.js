import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <nav>
            <h3>VetCare Tienda</h3>
                <div>
                    <button>Comida</button>
                    <button>Higiene</button>
                    <button>Accesorios</button>
                </div>
                <CartWidget />
        </nav>
    )
}
export default NavBar