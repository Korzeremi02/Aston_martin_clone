import '../styles/Navbar.css'
import MenuLogo from '../assets/menu.svg'
import AMLogo from '../assets/amlogo.png'

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="NavbarMenuSct">
                <img src={MenuLogo} id='NavbarMenuLogo' />
            </div>
            <div className="NavbarLogoSct">
                <img src={AMLogo} id='NavbarAMLogo' />
            </div>
            <div className="NavbarBtnSct"></div>
        </div>
    )
}

Navbar()