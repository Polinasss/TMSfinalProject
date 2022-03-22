import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }) => {
  const [data, setData] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(setData); //поменялось состояние авторизации (либо залогинился или разлогинился)
    //auth - наш ключик - токен - apiKey
  }, []); //массив зависимостей // выполняем только один раз 
  //передаем value, которое будет доступно везде,где мы обернем наш контекст и используем в прилаге useContext.
  //в строке ниже будут лежать любые чилдрены, которые будут иметь доступ к data
  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  );
};