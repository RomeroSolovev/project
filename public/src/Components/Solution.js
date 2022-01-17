import '../css/solution.css'
import solut1 from "../img/competency-20.svg"
import solut2 from "../img/competency-21.svg"
import solut3 from "../img/competency-22.svg"

export default function Solution() {
    return(
<section className="quick-solutions">
  <div className="container sol">
    <div className="row">
      <div className="col-12 quick-solutions-title">
        <h2>Наши профессиональные разработчики выполняют быстро любые задачи</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-4 competency-block">
        <div className="text">
          <div className="competency-icon"><img src={solut1} alt="Solution"/></div>
          <div className="time-title">от 1ч</div>
          <div>
            Настройка события GA <br /> в интернет-магазине
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 competency-block">
        <div className="text">
          <div className="competency-icon"><img src={solut2} alt="Solution"/></div>
          <div className="time-title">от 20ч</div>
          <div>
            Разработка мобильной <br /> версии сайта
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 competency-block">
        <div className="text">
          <div className="competency-icon"><img src={solut3} alt="Solution"/></div>
          <div className="time-title">от 9ч</div>
          <div>
            Интеграция модуля <br /> оплаты
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}