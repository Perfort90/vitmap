import { useState } from "react";
import "../styles/HomePage.css";
import { useNavigate } from 'react-router-dom';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import api from "@/api/api";

function Auth() {

  const [name, setName] = useState("");
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      console.log("Пользователь создан:", response.data);
      alert("Регистрация успешна");
      navigate("/profile")
    } catch (error) {
      console.error(error);
      alert("Ошибка регистрации");
    }
  }

  return (
    <div className="wrapper">
      <form className="infoBox" onSubmit={handleRegister}>
        <h1>Регистрация</h1>

        <label>логин</label>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Введите логин"
        />

        <label>почта</label>
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Введите почту"
        />

        <label>пароль</label>
        <Input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Введите пароль"
        />

        <Button type="submit">Зарегистрироваться</Button>
      </form>
    </div>
  );
}

export default Auth;