import { createContext } from "react";
export const AuthContext = createContext(); //Context мы создаем путем вызова метода функции createContext() и сохранили его в переменной COMMENTSContext
//эта переменная имеет только два свойства: .Provider(обязана быть обернута вокруг чего-то), .Consumer

//Тобиш эта функция создает контекст