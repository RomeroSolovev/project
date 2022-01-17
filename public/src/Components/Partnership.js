import '../css/partnership.css'
import company1 from '../img/big/company-1.png'
import company2 from '../img/big/company-2.png'
import company3 from '../img/big/company-3.png'
import company4 from '../img/big/company-4.png'
import company5 from '../img/big/company-5.png'
import company6 from '../img/big/company-6.png'
import company7 from '../img/big/company-7.png'
import company8 from '../img/big/company-8.png'
import company9 from '../img/big/company-9.png'
import company10 from '../img/big/company-10.png'
import company11 from '../img/big/company-11.png'
import company12 from '../img/big/company-12.png'
import company13 from '../img/big/company-13.png'
import company14 from '../img/big/company-14.png'
import company15 from '../img/big/company-15.png'
import company16 from '../img/big/company-16.png'
import company17 from '../img/big/1.png'
import company18 from '../img/big/2.png'
import company19 from '../img/big/3.png'
import company20 from '../img/big/4.png'
import company21 from '../img/big/5.png'
import company22 from '../img/big/6.png'
import company23 from '../img/big/7.jpg'
import company24 from '../img/big/8.jpg'
import company25 from '../img/big/9.svg'
import company26 from '../img/big/14.png'
import Slider from "react-slick";


export default function Carousel () {

    const settings1 = {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 3}
            },
            {
                breakpoint:600,
                settings: {slidesToShow: 2}
            }
        ]
    }

    const settings2 = {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 3}
            },
            {
                breakpoint:600,
                settings: {slidesToShow: 2}
            }
        ]
    }

    return (
        <section className="partnership">
        <h2>С нами работают</h2>
        <div className="partnership-header">
          Десятки компаний доверяют нам самое ценное, что у них есть в интернете
          – свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
        </div>
        <div className="carrousel_wrapper" id="slider-1" style={{ width: "100%" }}>
          <Slider {...settings1}>
            <div className="carrousel_image">
              <div>
                <img src={company1} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company2} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company3} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company4} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company5} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company6} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company7} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company8} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company17} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company18} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company19} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company20} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company21} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company22} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company23} alt="Company"/>
              </div>
            </div>
          </Slider>
        </div>
        <div className="carrousel_wrapper" id="slider-2" style={{ width: "100%" }}>
          <Slider {...settings2}>
            <div className="carrousel_image">
              <div>
                <img src={company9} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company10} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company11} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company12} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company13} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company14} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company15} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company16} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company22} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company23} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company24} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company25} alt="Company"/>
              </div>
            </div>
            <div className="carrousel_image">
              <div>
                <img src={company26} alt="Company"/>
              </div>
            </div>
          </Slider>
        </div>
      </section>
)}