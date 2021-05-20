import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import spa from '../assets/images/icons/spa.svg'
import massage from '../assets/images/icons/massage.svg'
import estetica from '../assets/images/icons/estetica.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'

const Beneficios = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
              },
        ]
    }

    return (
        <section className="c-beneficios">
            <div className="container">
                <div className="c-beneficios__content">
                    <h2>benefícios da massoterapia</h2>
                    <div className="c-beneficios__list">
                        <Slider {...settings}>
                            <div className="c-beneficios__list__item">
                                <div className="c-beneficios__list__item__image">
                                    <img alt="icone de spa - frepik" src={spa} />
                                </div>
                                <ul className="c-beneficios__sublist">
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Controle do estresse</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Diminuição da ansiedade</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Alívio das dores de cabeça</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Diminuição do cansaço</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Alívio da tensão e das dores musculares</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Diminuição das insônias</span></li>
                                </ul>
                            </div>
                            <div className="c-beneficios__list__item">
                                <div className="c-beneficios__list__item__image">
                                    <img alt="icone de massagem - freepik" src={massage} />
                                </div>
                                <ul className="c-beneficios__sublist">
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Fortalecimento do sistema imunológico</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Alívio de dores crônicas</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Recuperação de lesões</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Eliminação de toxinas e resíduos metabólicos</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Diminuição da pressão arterial no caso de pacientes hipertenso</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Melhora a circulação sanguínea e promove a desintoxicação</span></li>
                                </ul>
                            </div>
                            <div className="c-beneficios__list__item">
                                <div className="c-beneficios__list__item__image">
                                    <img alt="icone de estetica - freepik" src={estetica} />
                                </div>
                                <ul className="c-beneficios__sublist">
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Melhora da qualidade do sono</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Sensação de bem-estar</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Melhora da circulação sanguínea, elasticidade da pele e sistema imune</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Estimulação e equilíbrio do sistema intestinal</span></li>
                                    <li><FontAwesomeIcon icon={faArrowRight} /><span>Auxilia no emagrecimento e combate a celulite</span></li>
                                </ul>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Beneficios