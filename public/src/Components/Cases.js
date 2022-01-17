import '../css/cases.css'
import Drupal1 from '../img/Drupal1.jpg'
import interview from '../img/interview.jpg'
import statCase from '../img/stat_case.jpg'
import google from '../img/google.jpg'
import sinz from '../img/sinz.jpg'
import sea from '../img/sea.jpg'
import seo from '../img/seo.png'

export default function Cases() {
    return (
  <section className="container cases">
    <h2 id="start">Последнее в блоге</h2>
    <div className="cases-grid">
      <a className="case-block" href>
        <div className="case-image" style={{backgroundImage: `url(${interview})`}} />
        <h3>Инитлаб в лицах. Интервью с Романом Агабековым</h3>
        <div className="case-date">22.05.2021</div>
        <div className="case-text">Интервью с руководителем отдела DevOPS, директором Initlab — Агабековым Романом...</div>
      </a>
      <a className="case-block full-screen-case" href>
        <div className="case-image" style={{backgroundImage: `url(${Drupal1})`}} />
        <h3>Drupal Coder ТОП1 в России!</h3>
      </a>
      <a className="case-block full-screen-case" href>
        <div className="case-image" style={{backgroundImage: `url(${statCase})`}} />
        <h3>Использование отчетов Ecommerce в Яндекс.Метрике</h3>
      </a>
      <a className="case-block full-screen-case" href>
        <div className="case-image" style={{backgroundImage: `url(${google})`}} />
        <h3>Изменения алгоритмов поиска Google: к чему готовиться владельцам сайтов на Drupal</h3>
        <div className="case-date">21.05.2021</div>
      </a>
      <a className="case-block full-screen-case" href>
        <div className="case-image" style={{backgroundImage: `url(${sinz})`}} />
        <h3>Инитлаб в лицах. Интервью с Сергеем Синицей</h3>
        <div className="case-date">30.03.2021</div>
      </a>
      <a className="case-block" href>
        <div className="case-image" style={{backgroundImage: `url(${sea})`}} />
        <h3>Капля в море: Запуск Drupal в Kubernetes</h3>
        <div className="case-date">14.07.2020</div>
        <div className="case-text">Опубликован статья на хабре: <span className="secret-href">https://...</span></div>
      </a>
      <a className="case-block full-screen-case" href>
        <div className="case-image" style={{backgroundImage: `url(${seo})`}} />
        <h3>Поисковая оптимизация. Трафик вырос в 2 раза!</h3>
      </a>
    </div>
    <div className="moreButton"><a href="#start">ПОКАЗАТЬ ЕЩЕ</a></div>
  </section>
)}
