import '../css/support.css'
import support1 from '../img/support1.svg'
import support2 from '../img/support2.svg'
import support3 from '../img/support3.svg'
import support4 from '../img/support4.svg'
import support5 from '../img/support5.svg'
import support6 from '../img/support6.svg'
import support7 from '../img/support7.svg'
import support8 from '../img/support8.svg'
  
export default function Support() {
    return (
  <section className="support">
  <h2>Разработка<br />от Drupal-coder</h2>
  <div className="container">
    <div className="row mx-0">
      <div className="col-12 col-md-6 col-lg-3 support-col">
        <div className="support-cards">
          <div className="support-number">01.</div>
          <div className="support-headline">Постановка задачи по Email</div>
          <div className="text">
            Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.
          </div>
          <div className="support-img"><img alt="Support" src={support1} /></div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 support-col">
        <div className="support-cards">
          <div className="support-number">02.</div>
          <div className="support-headline">Система Helpdesk – отчетность, прозрачность</div>
          <div className="text">
            Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.
          </div>
          <div className="support-img"><img alt="Support" src={support2} /></div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 support-col">
        <div className="support-cards">
          <div className="support-number">03.</div>
          <div className="support-headline">Расширенная техническая поддержка</div>
          <div className="text">
            Возможность организации расширенной техподдержки с 8:00 до 22:00 без выходных.
          </div>
          <div className="support-img"><img alt="Support" src={support3} /></div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 support-col">
        <div className="support-cards">
          <div className="support-number">04.</div>
          <div className="support-headline">Персональный менеджер проекта</div>
          <div className="text">
            Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые
            вопросы.
          </div>
          <div className="support-img"><img alt="Support" src={support4} /></div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 support-col">
        <div className="support-cards">
          <div className="support-number">05.</div>
          <div className="support-headline">Удобные способы оплаты</div>
          <div className="text">
            Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.
          </div>
          <div className="support-img"><img alt="Support" src={support5} /></div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 support-col">
        <div className="support-cards">
          <div className="support-number">06.</div>
          <div className="support-headline">Работаем с SLA и NDA</div>
          <div className="text">
            Работа в рамках соглашений о конфиденциальности и об уровне качества работ.
          </div>
          <div className="support-img"><img alt="Support" src={support6} /></div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 support-col">
        <div className="support-cards">
          <div className="support-number">07.</div>
          <div className="support-headline">Штатные специалисты</div>
          <div className="text">
            Надежные штатные специалисты, никаких фрилансеров.
          </div>
          <div className="support-img"><img alt="Support" src={support7} /></div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3 support-col">
        <div className="support-cards">
          <div className="support-number">08.</div>
          <div className="support-headline">Удобные каналы связи</div>
          <div className="text">
            Консультации по телефону, скайпу, в месенджерах.
          </div>
          <div className="support-img"><img alt="Support" src={support8} /></div>
        </div>
      </div>
    </div>
  </div>
</section>
)}
