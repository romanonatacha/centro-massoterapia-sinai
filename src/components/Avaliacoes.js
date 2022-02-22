import Slider from 'react-slick'
import feedbacks from '../data/feedbacks'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Avaliacoes = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return (
        <div className="c-avaliacoes">
            <div className="container">
                <div className="c-avaliacoes__content">
                    <h2>avaliações de pacientes</h2>
                    <Slider {...settings}>
                        {feedbacks && feedbacks.map((item, i) => {
                            let stars = []
                            for (let i = 0; i < item.rate; i++) {
                                stars.push(<FontAwesomeIcon icon={faStar} />)
                            }
                            return (
                                <div className="c-avaliacoes__slide" key={`feedback-${i}`}>
                                    <div>
                                        {stars}
                                    </div>
                                    <p className="top16">{item.review}</p>
                                    <span>{item.patient}</span>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Avaliacoes