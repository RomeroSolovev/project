import '../css/expertise.css'
import laptop from '../img/laptop.png'

export default function Expertise() {
    return (
        <section className="Expertise">
  <div className="container">
    <div className="row">
      <div className="col-lg-6" />
      <div className="col-lg-6 block-with-redlines">
        <div className="row red-line-blocks">
          <div className="col-12">
            <h2>Экспертиза в Drupal,<br /> опыт 14 лет!</h2>
          </div>

          <div className="col-md-6 col-12 red-line-block">
            <div className="red-line">
              <div className="red-line-text">
                Только системный подход – контроль версий, резервирование и тестирование!
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 red-line-block">
            <div className="red-line">
              <div className="red-line-text">
                Только Drupal сайты, не берем на поддержку сайты на других CMS!
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 red-line-block">
            <div className="red-line">
              <div className="red-line-text">
              Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем <a href>свои модули Drupal</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 red-line-block">
            <div className="red-line">
              <div className="red-line-text">
              Поддерживаем сайты на Drupal 5, 6, 7 и 8
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="Expertise-picture">
    <img src={laptop} alt="laptops"/>
  </div>
</section>
)}
