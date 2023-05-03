import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const NavBar = () => {

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', { replace: true });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Bovinex
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Inicio"
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Vacunacion"
                    >
                        Vacunacion
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Peso"
                    >
                        Peso
                    </NavLink>
                    
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Agregar"
                    >
                        Agregar
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-link nav-item text-primary'>{ user?.name }</span>

                    <button
                        className='nav-link nav-item btn'
                        onClick={onLogout}
                    >Logout</button>

                </ul>
            </div>

        </nav>
    )
}

