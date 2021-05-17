import { faSpa } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <nav className="c-navbar">
            <div className="c-navbar__logo">
                <FontAwesomeIcon icon={faSpa} />
                <span>
                    <a href="#home">
                        Centro de massoterapia Sinai
                    </a>
                </span>
            </div>
            <ul className="c-navbar__menu">
                <li className="c-navbar__menu__item">
                    <a href="#massagens">Massagens e procedimentos</a>
                </li>
                <li className="c-navbar__menu__item">
                    <a href="#beneficios">benefícios da massoterapia</a>
                </li>
                <li className="c-navbar__menu__item">
                    <a>Contato</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar