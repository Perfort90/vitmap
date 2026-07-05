import { Link, useLocation } from 'react-router-dom';
import "../../styles/Header.css"
function Header() {
    return (
        <div className='Header'>
      <div className='info-section'>
        <button>Меню</button>
        <button>Карта</button>
        <button>Подборки</button>
        <button>Рекомендации</button>
                <button>Рекомендации</button>
        </div>
        <div>
            <button>ЛОГОТИП</button>
        </div>
        </div>
    )
}
export default Header