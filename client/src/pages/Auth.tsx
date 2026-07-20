import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/api/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../styles/HomePage.css";

function Auth() {
  const [authMode, setAuthMode] = useState<"register" | "login">("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(response.data));

      console.log("Пользователь создан:", response.data);
      alert("Регистрация успешна");
      navigate(`/profile/${response.data.id}`);
    } catch (error) {
      console.error(error);
      alert("Ошибка регистрации");
    }
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      localStorage.setItem("user", JSON.stringify(response.data.user));

      console.log("успешный вход в аккаунт:", response.data);
      alert("Авторизация успешна");
      navigate(`/profile/${response.data.user.id}`);
    } catch (error) {
      console.error(error);
      alert("Ошибка авторизации");
    }
  }

  return (
    <div className="wrapper">
      <form className="infoBox" onSubmit={authMode === "register" ? handleRegister : handleLogin}>
        <h1>{authMode === "register" ? "Регистрация" : "Вход"}</h1>

        {authMode === "register" && (
          <>
            <label>логин</label>
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Введите логин"
            />
          </>
        )}

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

        <Button
          type="submit"
          variant="outline"
          className="w-full whitespace-normal text-center leading-relaxed"
        >
          {authMode === "register" ? "Зарегистрироваться" : "Войти"}
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full whitespace-normal text-center leading-relaxed"
          onClick={() => setAuthMode(authMode === "register" ? "login" : "register")}
        >
          {authMode === "register" ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться"}
        </Button>
      </form>
    </div>
  );
}

export default Auth;
