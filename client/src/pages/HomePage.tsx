import { Link, useLocation } from 'react-router-dom';
import "../styles/HomePage.css"
import { Typewriter } from 'react-simple-typewriter';
import { Button } from '@/components/ui/button';


function HomePage() {
    return (

        <div className="main">
             <div className="Time">время</div>
             <div className='wrapper'>
            <div className="infoBox">
          <Typewriter
  words={['Найди интересные места']}
  loop={1}
  cursor
  cursorStyle="|"
  typeSpeed={70}
  deleteSpeed={0}
  delaySpeed={999999}
/>
<Button>Вперед</Button>
                
                
            </div>
            </div>
 








        </div>
    )
}
export default HomePage