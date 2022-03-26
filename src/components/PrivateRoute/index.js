import { useContext } from "react"; //
import { Route, Redirect } from "react-router-dom"; //Route (маршрут) для перенаправления запросов соответствующим функциям. Связывает HTTP действия(GET, POST, PUT, DELETE, etc), URL пути и обрабатывающую это всё функцию 
import { AuthContext } from "../context/AuthContext";
import { auth } from "../../firebase"; 
import { StyledSideButton } from "../../styles";

//мы создадим ayth-контекст и ayth-контекст-провайдер для получения данных
//мы должны не поломать поведение нашего исходного роута. тобишь мы должны вернуть этот исходный роут.
export const PrivateRoute = ({component: Component, ...rest}) => { //переименовываю пропсы component на Сomponent с большой буквы, иначе они не будут передаваться
  const currentUser = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signOut();
  };

  return <Route 
  {...rest} //передаем роутеру все основные пропсы
  render={ //передаем в него тело функции. render работает как компонент, только поведение функции описывается внутри render
    (props) => currentUser ? (
      <>
        <StyledSideButton onClick={handleLogout}>Log out</StyledSideButton> 
        <Component {...props}/> 
      </>
    ): (
    <Redirect to='Sign in'/> )//если данные есть, то мы идем за этими данными в Route. Если данных нет, то мы переходим на sign in
  }
  /> 
}
