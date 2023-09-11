
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarBrand,
    NavLink
  } from 'reactstrap';

function NavBar(){
    return <>
            <Navbar>
                <NavbarBrand href="../Main/Main.jsx">
                    🏡
                    Inicio
                </NavbarBrand>
                <NavLink href='../Permission/Permission.jsx'>
                    Solicitar Permiso
                </NavLink>
            </Navbar>
        </>
}

export default NavBar;