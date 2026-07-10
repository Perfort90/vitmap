import { Link} from 'react-router-dom';
import "../../styles/Header.css"
import { Button } from '@/components/ui/button';
 
function Header() {
    return (
        <div className='Header'>
      <div className='info-section'>
        <Button ><Link to="/Auth">Профиль</Link></Button>
        <Button>Карта</Button>
        <Button>Подборки</Button>
        <Button>Рекомендации</Button>
        <Button>Рекомендации</Button>
        </div>
        <div>
        <button><Link to="/">Логотип</Link></button>
        </div>
        </div>
    )
}
export default Header