# movies-explorer-frontend
## Верстка и функционал для приложения /Приветственная страница /Регистрация /Авторизация /Главная /Избранное /Управление Аккаунтом(редактирование) /404 /Поисковая строка и небольшая фильтрация
### Технологии и инструменты  
1. JSX  
2. CSS
3. Figma 
4. БЭМ
5. Flex
6. Grid
7. Адаптивная, резиновая верстка  
8. React, React Router
## Запуск проекта
Полная версия приложения https://movies-frontend.nomoredomainsicu.ru/;
Локальный запуск
1.запустить сервер локально https://github.com/InDaZZ/movies-explorer-api
2.в src/components/utils/MainApi.js заменить значение url на http://localhost:3000/ вот так:
export const api = new Api({
  url: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  }
}); На
3.`npm run start` — запускает приложение
