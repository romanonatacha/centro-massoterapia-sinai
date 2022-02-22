import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mobileImage from '../assets/images/vintage-pink-telephone-assortment.png'

const Contato = () => {
    return (
        <section className="c-contato">
            <div className="c-contato__image--mb dt-hide">
                <img alt="telefone retrô - freepik" src={mobileImage} />
                <div className="c-contato__image__overlay"></div>
            </div>
            <div className="container">
                <div className="c-contato__content">
                    <h2>entre em contato para agendar</h2>
                    <div className="c-contato__content__text">
                        <h6>
                            Celina R. Ferreira
                            <span>Massoterapeuta Profissional AEPERS 7694/01</span>
                        </h6>
                        <a href="https://api.whatsapp.com/send?phone=5551992173433" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsappSquare} />
                            <span>(51) 99217-3433</span>
                        </a>
                        <p>
                            <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            <span>(51) 99217-3433</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>Capão da Canoa - Centro / RS<br></br><span>Próximo à Rodoviária</span></span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="c-contato__image mb-hide" role="img" aria-label="Telefone - Frepik">
                <div className="c-contato__image__overlay"></div>
            </div>
        </section>
    )
}

export default Contato