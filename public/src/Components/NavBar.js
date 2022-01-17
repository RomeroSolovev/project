import '../css/navbar.css'
import logo from '../img/logo.svg'
import hamb from '../img/hamb.svg'

 export default function NavBar() {
    return (
    <div className="navbar-absolute">
        <div className="container-md">
        <nav className="navbar navbar-expand-md">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <a className="nav-link" href>ТЕХ ПОДДЕРЖКА DRUPAL</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href>
                    АДМИНИСТРИРОВАНИЕ
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href>МИГРАЦИЯ</a>
                    <a className="dropdown-item" href>БЭКАПЫ</a>
                    <a className="dropdown-item" href>АУДИТ БЕЗОПАСНОСТИ</a>
                    <a className="dropdown-item" href>ОПТИМИЗАЦИЯ СКОРОСТИ</a>
                    <a className="dropdown-item" href>ПЕРЕЕЗД НА HTTPS</a>
                </div>

                </li>
                <li className="nav-item">
                <a className="nav-link" href>ПРОДВИЖЕНИЕ</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href>РЕКЛАМА</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href>
                    О НАС
                </a>
                <div className="dropdown-menu dropdown-menu-second" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href>КОМАНДА</a>
                    <a className="dropdown-item" href>DRUPALGIVE</a>
                    <a className="dropdown-item" href>БЛОГ</a>
                    <a className="dropdown-item" href>КУРСЫ DRUPAL</a>
                </div>
                </li>
                <li className="nav-item">
                <a className="nav-link" href>ПРОЕКТЫ</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href>КОНТАКТЫ</a>
                </li>
            </ul>
            </div>
            <a className="navbar-brand" href>
            <img className="nav-logo" src={logo} alt="Лого" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={hamb} alt="hamb icon" style={{ width: "100%"}}/>
            <span src={hamb} className="icon-bar" />
            </button>
        </nav>
        </div>
    </div>
    )}