import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#morning">Good Morning</a></p>
        <p><a href="#afternoon">Good Afternoon</a></p>
        <p><a href="#evening">Good Evening</a></p>
        <p><a href="#night">Good Night</a></p>
    </>
)

const Navbar = () => {
    
    const [ toggleMenu, setToggleMenu ] = useState(false);
    
    return (
        <div className="toggle__box">
            <div className="toggle__box-menu">
                {toggleMenu
                ? <RiCloseLine color="white" size={50} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color="white" size={50} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu &&
                    (
                        <div> 
                            <Menu />  {/* Se eu quiser n usar a const Menu lá me cima, só apagá-la e recriala dentro dessa div */}
                        </div>
                    )

                }
            </div>
        </div>
    )
}

export default Navbar;