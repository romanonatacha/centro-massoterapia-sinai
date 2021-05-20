import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contato = () => {
    return (
        <section className="c-contato">
            <div className="container">
                <div className="c-contato__content">
                    <h2>entre em contato para agendar</h2>
                    <div className="c-contato__content__text">
                        <h6>
                            Celina R. Ferreira
                            <span>Massoterapeuta Profissional AEPERS 7694/01</span>
                        </h6>
                        <p>
                            <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            <span>(51) 9217-3433</span>
                        </p>
                        <a href="https://api.whatsapp.com/send?phone=555192173433" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsappSquare} />
                            <span>(51) 9217-3433</span>
                        </a>
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>Capão da Canoa - Centro / RS<br></br><span>Próximo à Rodoviária</span></span>
                        </p>
                    </div>
                </div>
            </div>
             <div className="c-contato__image" role="img" aria-label="Telefone - Frepik">
                <div className="c-contato__image__overlay"></div>
            </div>
        </section>
    )
}

export default Contato