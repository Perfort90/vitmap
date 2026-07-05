import { Link} from 'react-router-dom';
import "../../styles/Header.css"
import { Button } from '@/components/ui/button';

function Header() {
    return (
        <div className='Header'>
      <div className='info-section'>
        <Button>Меню</Button>
        <Button>Карта</Button>
        <Button>Подборки</Button>
        <Button>Рекомендации</Button>
        <Button>Рекомендации</Button>
        </div>
        <div>
        <button>ЛОГОТИП</button>
        </div>
        </div>
    )
}
export default Header