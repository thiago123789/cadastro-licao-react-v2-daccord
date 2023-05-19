import { Link } from "react-router-dom";

const Header = () => {
    return(
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/licoes'>Cadastro</Link></li>
        </ul>
    )
}

export default Header;