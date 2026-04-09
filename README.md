# Pizza App

Веб-приложение для заказа пиццы на React + TypeScript.

## Описание

Приложение реализует базовый пользовательский сценарий сервиса доставки:

- регистрация и вход;
- просмотр меню и фильтрация по названию;
- просмотр карточки продукта;
- добавление/удаление позиций в корзине;
- оформление заказа;
- сохранение корзины и токена авторизации в localStorage.

Внешний API: https://purpleschool.ru/pizza-api-demo

## Технологии

- React 19
- TypeScript
- Vite
- React Router (data loader для страницы продукта)
- Redux Toolkit + React Redux
- Axios
- CSS Modules

## Основные маршруты

- /auth/login - вход
- /auth/register - регистрация
- / - меню (защищенный маршрут)
- /product/:id - страница товара
- /cart - корзина
- /success - успешное оформление заказа

Защита маршрутов реализована через компонент RequireAuth: при отсутствии JWT пользователь перенаправляется на страницу входа.

## Хранилище

Используется Redux Store с двумя слайсами:

- user: JWT, профиль пользователя, ошибки авторизации/регистрации
- cart: позиции корзины и количество

Persist в localStorage:

- userData - JWT
- cartData - корзина

## Установка и запуск

Требования:

- Node.js 18+
- npm 9+

Установка зависимостей:

```bash
npm install
```

Запуск dev-сервера:

```bash
npm run dev
```

Сборка production-версии:

```bash
npm run build
```

Проверка линтером:

```bash
npm run lint
```

Локальный предпросмотр production-сборки:

```bash
npm run preview
```

## Структура проекта

```text
src/
  components/      // переиспользуемые UI-компоненты
  helpers/         // API-константы и вспомогательные обертки
  interfaces/      // типы и интерфейсы
  layout/          // layout для auth и основной части приложения
  pages/           // страницы (Menu, Product, Cart, Login, Register, Success)
  store/           // Redux store и слайсы
```

## API, используемое приложением

- POST /auth/login
- POST /auth/register
- GET /user/profile
- GET /products
- GET /products/:id
- POST /order

## Что можно улучшить

- добавить обработку ошибок checkout и глобальные уведомления;
- покрыть ключевые сценарии тестами;
- вынести базовый URL API в переменные окружения;
- добавить CI-проверки (lint + build).
