import '../css/compet.css'
import compet0 from '../img/compet1.svg'
import compet2 from '../img/compet2.svg'
import compet3 from '../img/compet3.svg'
import compet4 from '../img/compet4.svg'
import compet5 from '../img/compet5.svg'
import compet6 from '../img/compet6.svg'
import compet7 from '../img/compet7.svg'
import compet8 from '../img/compet8.svg'

export default function Compet() {
    return (
    <section className="competencies">
    <div className="container">
        <div className="row">
        <div className="col-md-6">
            <h2>14 лет совершенствуем <br /> компетенции в Drupal <br /> поддержке!</h2>
            <div className="competencies-main-text">
            Разрабатываем и оптимизируем модули, расширяем <br /> функциональность сайтов, обновляем дизайн
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-6 col-md-3 compet-block">
            <div className="competency-icon"><img src={ compet0 } alt="Competency"/></div>
            <div className="text">
            Добавление <br /> информации на сайт,<br /> создание новых <br /> разделов
            </div>
        </div>
        <div className="col-6 col-md-3 compet-block">
            <div className="competency-icon"><img src={ compet2 } alt="Competency"/></div>
            <div className="text">
            Разработка <br /> и оптимизация <br /> модулей сайта
            </div>
        </div>
        <div className="col-6 col-md-3 compet-block">
            <div className="competency-icon"><img src={ compet3 } alt="Competency"/></div>
            <div className="text">
            Интеграция с CRM, <br /> 1C, платежными <br /> системами, любыми <br /> веб-сервисами
            </div>
        </div>
        <div className="col-6 col-md-3 compet-block">
            <div className="competency-icon"><img src={ compet4 } alt="Competency"/></div>
            <div className="text">
            Любые доработки <br /> функционала <br /> и дизайна
            </div>
        </div>
        <div className="col-6 col-md-3 compet-block">
            <div className="competency-icon"><img src={ compet5 } alt="Competency"/></div>
            <div className="text">
            Аудит и мониторинг <br /> безопасности Drupal <br /> сайтов
            </div>
        </div>
        <div className="col-6 col-md-3 compet-block">
            <div className="competency-icon"><img src={ compet6 } alt="Competency"/></div>
            <div className="text">
            Миграция, импорт <br /> контента и апгрейд <br /> Drupal
            </div>
        </div>
        <div className="col-6 col-md-3 compet-block">
            <div className="competency-icon"><img src={ compet7 } alt="Competency"/></div>
            <div className="text">
            Оптимизация <br /> и ускорение <br /> Drupal-сайтов
            </div>
        </div>
        <div className="col-6 col-md-3 compet-block">
            <div className="competency-icon"><img src={ compet8 } alt="Competency"/></div>
                <div className="text">
                    Веб-маркетинг, <br /> консультации <br /> и работы по SEO
                </div>
            </div>
        </div>
    </div>
</section>
    )}
