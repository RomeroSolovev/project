import '../css/reviews.css';
import React, { Component } from "react";
import Slider from "react-slick";
import company1 from '../img/big/1.png'
import company5 from '../img/big/2.png'
import company7 from '../img/big/3.png'
import company2 from '../img/big/4.png'
import company6 from '../img/big/5.png'
import company4 from '../img/big/6.png'
import company3 from '../img/big/7.jpg'
import company8 from '../img/big/8.jpg'

  export default class Reviews extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  state = { currentSlide: 0 };

  handleAfterChange(index) {
    if (index < 0) {
      this.setState({
        currentSlide: 7
      });
    }
    else if (index > 7) {
      this.setState({
        currentSlide: 0
      });
    }
    else {
    this.setState({
      currentSlide: index
    });
  }
  };

  next() {
    this.slider.slickNext();
    this.handleAfterChange(this.state.currentSlide + 1);
  }
  previous() {
    this.slider.slickPrev();
    this.handleAfterChange(this.state.currentSlide - 1);
  }
  render() {
    const settings = {
      infinite: true,
        speed: 600,
        fade: true,
        swipe: false,
        draggable: false,
        slidesToShow: 1,
        adaptiveHeight: true,
      };

    return (
      <section className="review-wrapper">
      <section className="container review">
        <h2>Отзывы</h2>
        <div className="review-shadow">
          <div className="review-block">
            <div className="review-slider">
            <Slider ref={c => (this.slider = c)} {...settings}>
              <div className="review-slide">
                <img alt="Company's rewiews" src={company1} />
                <div className="review-text">
                  Долгие поиски единственного и неповторимого мастера на многострадальный сайт&nbsp;www.cielparfum.com,
                  который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть,
                  привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не
                  проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не
                  работало
                  - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими существенными
                  и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и
                  доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф).
                  Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает
                  с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант.
                  Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта
                  CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго!
                  Спасибо!!!
                </div>
                <div className="review-author">
                  С уважением, Наталья Сушкова руководитель Отдела веб-проектов Группы компаний «Си Эль парфюм»&nbsp;
                  <a href="http://www.cielparfum.com/" tabIndex={0}>http://www.cielparfum.com/</a>
                </div>
              </div>
              <div className="review-slide">
                <img alt="Company's rewiews" src={company2} />
                <div className="review-text">
                Сергей — профессиональный, высококвалифицированый программист с огромным опытом в ИТ. 
                Я долгое время общался с топ-фрилансерами (вся первая двадцатка) на веблансере и могу сказать, что С СЕРГЕЕМ ОНИ И РЯДОМ НЕ ВАЛЯЛИСЬ. 
                Работаем с Сергеем до сих пор. С ним приятно работать, я доволен. 
                </div>
                <div className="review-author">
                Сергей Чепурко, руководитель проекта&nbsp;
                  <a href="www.personal-writer.com" tabIndex={0}>www.personal-writer.com</a>
                  &nbsp;/&nbsp;
                  <a href="www.writers-united.org" tabIndex={0}>www.writers-united.org</a>
                </div>
              </div>
              <div className="review-slide">
                <img alt="Company's rewiews" src={company3} />
                <div className="review-text">
                Выражаю глубочайшую благодарность команде специалистов компании "Инитлаб" и лично Дмитрию Купянскому и Алексею Синице. 
                Сайт был первоклассно перевёрстан из старой табличной модели в новую на базе Drupal с дополнительной функциональностью. 
                Всё было сделано с высочайшим качеством и точно в сроки. 
                Всем кому хочется без нервов и лишних вопросов разработать сайт рекомендую обращаться именно к этой команде профессионалов.
                </div>
                <div className="review-author">
                Леонид Александрович Ледовский
                </div>
              </div>
              <div className="review-slide">
                <img alt="Company's rewiews" src={company4} />
                <div className="review-text">
                Моя электронная газета www.nashagazeta.ch существует в Швейцарии уже 10 лет. 
                За это время мы сменили 7 специалистов по техподдержке, и только сейчас, в последние несколько месяцев, с начала сотрудничества с 
                Алексеем Синицей и его командой, я впервые почувствовала, что у меня есть надежный технический тыл. 
                Без громких слов и обещаний, ребята просто спокойно и качественно делают работу, быстро реагируют, находят решения, 
                предлагают конкретные варианты улучшения функционирования сайта и сами их оперативно осуществляют. 
                Сотрудничество с ними – одно удовольствие!
                </div>
                <div className="review-author">
                Надежда Сикорская, Женева, Швейцария
                </div>
              </div>
              <div className="review-slide">
                <img alt="Company's rewiews" src={company5} />
                <div className="review-text">
                Наша компания Estee Design занимается дизайном интерьеров. Сайт сверстан на Drupal. 
                Искали программистов под выполнение ряда небольших изменений и корректировок по сайту.
                Пообщавшись с Алексеем Синицей, приняли решение о начале работ с компанией Initlab/drupal-coder. 
                Сотрудничеством довольны на 100%. Четкая и понятная система коммуникации, достаточно оперативное решение по задачам. 
                Дали рекомендации по улучшению програмной части сайта, исправили ряд скрытых ошибок.
                Никогда не пишу отзывы (нет времени), но в данном случае, по просьбе Алексея, не могу не рекомендовать 
                Initlab другим людям - действительно компания профессионалов.
                </div>
                <div className="review-author">
                  Кузин Вадим, руководитель строительного направления Дизайн-бюро интерьеров Estee &nbsp;
                  <a href="http://www.estee-design.ru" tabIndex={0}>estee-design.ru</a>
                </div>
              </div>
              <div className="review-slide">
                <img alt="Company's rewiews" src={company6} />
                <div className="review-text">
                Наша компания за несколько лет сменила несколько команд программистов и специалистов техподдержки, 
                и почти отчаялась найти на российском рынке адекватное профессиональное предложение по разумной цене. 
                Пока мы не начали работать с командой "Инитлаб", воплощающей в себе все наши представления о нормальной системе взаимодействия в сочетании
                с профессиональным неравнодушием. Впервые в моей деловой практике я чувствую надежно прикрытыми важнейшие задачи в жизни электронного СМИ,
                при том, что мои коллеги работают за сотни километров от нас и мы никогда не встречались лично.
                </div>
                <div className="review-author">
                Константин Бельский, зам. генерального директора портала&nbsp;
                  <a href="http://www.cableman.com/" tabIndex={0}>Кабельщик.ру</a>
                </div>
              </div>
              <div className="review-slide">
                <img alt="Company's rewiews" src={company7} />
                <div className="review-text">
                За довольно продолжительный срок (2014 - 2016 годы) весьма плотной работы
                (интернет-магазин на безумно замороченном Drupal 6: устраняли косяки разработчиков, ускоряли сайт, сделали множество новых функций и т.п.)
                - только самые добрые эмоции от работы с командой Initlab / Drupal-coder: всегда можно рассчитывать на быструю и толковую помощь, 
                поддержку, совет. Даже сейчас, не смотря на то, что мы почти год не работали на постоянной основе (банально закончились задачи), 
                случайно возникшая проблема с сайтом была решена мгновенно! В общем, только самые искренние благодарности и рекомендации!Спасибо! )

                </div>
                <div className="review-author">
                С уважением, Владислав,&nbsp;
                  <a href="http://serebro.ag" tabIndex={0}>Serebro.Ag</a>
                </div>
              </div>
              <div className="review-slide">
                <img alt="Company's rewiews" src={company8} />
                <div className="review-text">
                Хотел поблагодарить за работу над нашими сайтами.За 4 месяца работы привели сайт в порядок, а самое главное получили инструмент, 
                с помощью мы теперь можем быстро и красиво выставлять контент для образования и работы с предприятиями http://lpcma.tsu.ru/ru/post/reference_material
                Ну и многому научись благодаря работе с вами. Мы очень рады, что удалось найти настолько компетентных ребят )
                </div>
                <div className="review-author">
                Дмитрий Новиков,&nbsp;
                  <a href="http://lpcma.tsu.ru" tabIndex={0}>lpcma.tsu.ru</a>
                </div>
              </div>
              </Slider>
            </div>
            <div className="review-arrow-block">
              <button id="review-prev" onClick={this.previous} />
              <div className="review-display">
                <span id="review-number">{" "}{this.state.currentSlide + 1} </span> / 8
              </div>
              <button id="review-next" onClick={this.next} />
            </div>
          </div>
        </div>
      </section>
    </section>
);
}
}
