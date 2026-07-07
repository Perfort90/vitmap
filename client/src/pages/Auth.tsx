import "../styles/HomePage.css"
import { Link, useLocation } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import { Button } from "@base-ui/react/button";

function Auth() {
    return (
        <div className="wrapper">
        <div className="infoBox">        
        <h1>Авторизация</h1>
        <label>почта</label>
        <Input/>
        <label>пароль</label>
        <Input/>
        <Button>Ввести</Button>

        
</div>
</div>
        
    )
}
export default Auth
