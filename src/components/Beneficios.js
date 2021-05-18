import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import spa from '../assets/images/icons/spa.svg'
import massage from '../assets/images/icons/massage.svg'
import estetica from '../assets/images/icons/estetica.svg'

const Beneficios = () => {
    return (
        <section className="c-beneficios">
            <div className="container">
                <div className="c-beneficios__content">
                    <h2>benefícios da massoterapia</h2>
                    <ul className="c-beneficios__list">
                        <li className="c-beneficios__list__item">
                            <div className="c-beneficios__list__item__image">
                                <img src={spa} />
                            </div>
                            <ul className="c-beneficios__sublist">
                                <li>Controle do estresse</li>
                                <li>Diminuição da ansiedade</li>
                                <li>Alívio das dores de cabeça</li>
                                <li>Diminuição do cansaço</li>
                                <li>Alívio da tensão e das dores musculares</li>
                            </ul>
                        </li>
                        <li className="c-beneficios__list__item">
                            <div className="c-beneficios__list__item__image">
                                <img src={massage} />
                            </div>
                            <ul className="c-beneficios__sublist">
                                <li>Fortalecimento do sistema imunológico</li>
                                <li>Alívio de dores crônicas</li>
                                <li>Recuperação de lesões</li>
                                <li>Eliminação de toxinas e resíduos metabólicos</li>
                                <li>Diminuição da pressão arterial no caso de pacientes hipertenso</li>
                                <li>Melhora a circulação sanguínea e promove a desintoxicação</li>
                            </ul>
                        </li>
                        <li className="c-beneficios__list__item">
                            <div className="c-beneficios__list__item__image">
                                <img src={estetica} />
                            </div>
                            <ul className="c-beneficios__sublist">
                                <li>Auxilia no emagrecimento e combate a celulite</li>
                                <li>Sensação de bem-estar</li>
                                <li>Melhora da qualidade do sono</li>
                                <li>Diminuição das insônias</li>
                                <li>Melhora da circulação sanguínea, elasticidade da pele e sistema imune</li>
                                <li>Estimulação e equilíbrio do sistema intestinal;</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Beneficios