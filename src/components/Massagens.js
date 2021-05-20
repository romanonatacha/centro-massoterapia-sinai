import imageMobile from '../assets/images/young-caucasian-woman-getting-anti-age-massage-mobile.png'
const Massagens = () => {

    return (
        <section className="c-massagens">
            <div className="c-massagens__image" role="img" aria-label="Mulher recebendo massagem facial - Frepik">
                <div className="c-massagens__image--mb dt-hide"><img src={imageMobile} alt="Mulher recebendo massagem facial - Frepik" /></div>
                <div className="c-massagens__image__overlay"></div>
            </div>
            <div className="container">
                <div className="c-massagens__content">
                    <h2>massagens e procedimentos</h2>
                    <ul className="c-massagens__list">
                        <li>
                            <h6>Desintoxicante</h6>
                        </li>
                        <li>
                            <h6>Drenagem Linfática</h6>
                        </li>
                        <li>
                            <h6>Pré e Pos operatória</h6>
                        </li>
                        <li>
                            <h6>Pacientes com AVC</h6>
                        </li>
                        <li>
                            <h6>Torcícolo</h6>
                        </li>
                        <li>
                            <h6>Contusões</h6>
                        </li>
                        <li>
                            <h6>Torsões</h6>
                        </li>
                        <li>
                            <h6>Gessoterapia</h6>
                        </li>
                        <li>
                            <h6>Bambuterapia</h6>
                        </li>
                        <li>
                            <h6>Tratamento Facial</h6>
                        </li>
                        <li>
                            <h6>Tratamento Corporal</h6>
                        </li>
                        <li>
                            <h6>Depilação</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Massagens