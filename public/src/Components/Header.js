import sampl from '../img/Video.mp4';
import '../css/header.css'

export default function Header() {
    return (
    <div id="main">
        <div id="react-main" />
        <header>
        <div id="video-block">
            <div id="video-filter" />
            <video className="video-background" playsInline autoPlay="autoplay" loop preload="auto" muted>
            <source src={sampl} type="video/mp4" />
            </video>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <h1 className="page-title">Поддержка<br />сайтов на Drupal</h1>
                <div className="title-text">
                Сопровождение и поддержка сайтов<br />
                на CMS Drupal любых версий и запущенности
                </div>
                <a href="#tariffs" className="tariff-button">ТАРИФЫ</a>
            </div>
            <div className="col-md-6">
                <div className="row red-line-blocks">
                <div className="col-sm-4 col-6 red-line-block">
                    <div className="red-line">
                    <div className="red-line-title">#1</div>
                    <div className="red-line-text">
                        Drupal-разработчик <br /> в России по версии Рейтинга Рунета
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 col-6 red-line-block">
                    <div className="red-line">
                    <div className="red-line-title">3+</div>
                    <div className="red-line-text">
                        средний опыт <br /> специалистов более <br /> 3 лет
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 col-6 red-line-block">
                    <div className="red-line">
                    <div className="red-line-title">14</div>
                    <div className="red-line-text">
                        лет опыта в сфере Drupal
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 col-6 red-line-block">
                    <div className="red-line">
                    <div className="red-line-title">50+</div>
                    <div className="red-line-text">
                        модулей и тем <br /> в формате DrupalGive
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 col-6 red-line-block">
                    <div className="red-line">
                    <div className="red-line-title">90 000+</div>
                    <div className="red-line-text">
                        часов поддержки <br /> сайтов на Drupal
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 col-6 red-line-block">
                    <div className="red-line">
                    <div className="red-line-title">300+</div>
                    <div className="red-line-text">
                        Проектов <br /> на поддержке
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>
    </div>

    )
}
