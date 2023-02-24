
# react-notes

![image](https://user-images.githubusercontent.com/49817117/221088719-b92b128f-f1cc-4359-a15a-aef712c26433.png)

## Описание проекта

Приложение для добавление заметок в формате текста\изображения.

## Основной функционал

- 📍 Добавление и редактирование заметок в рабочей области
- 📍 Возможность смены темы, сохранение темы в localstorage
- 📍 Сохранение результата в localstorage
- 📍 Нотификации уведомляющие об ошибках добавления заметок
- 📍 Возможность удаления заметок из истории

## Используемые технологии и основной инструментарий

- 📍 Приложение написано с помощью 📍React + Typescript
- 📍 Линтинг приложения - 📍eslint
- 📍 Нотификации -  📍react toastify
- 📍 Библиотека компонентов -  📍storybook
- 📍 Скриншотное тестирование - 📍loki + reg-cli
- 📍 Стили - 📍css-modules

![image](https://user-images.githubusercontent.com/49817117/221087885-356aeb52-4acc-406a-a6e2-09d8b3b729f9.png)

## Структура проекта

- `app` – Корневой слой приложения
    - `./styles` – Стили
    - `./types` – глобальные типы + декларации
    - `./App.tsx` – точка входа App
- `pages` – Страницы
- `shared` – Переиспользуемые компоненты, хэлперы
    - `./icons` – иконки
    - `./ui` – компоненты
    - `./utils` – хэлперы
- `widgets` – Основные компоненты приложения
- `index.tsx` – точка входа

## Демо

https://react-notes-h0tgat94a-aghaismagit.vercel.app

## Установка проекта и запуск

- 📍 Запуск проекта <br/>
  ```webpack serve --env port=3000```
- 📍 Билд проекта dev <br/>
  ```webpack  --env mode=development```
- 📍 Билд проекта prod <br/>
  ```webpack  --env mode=production```

## Запуск скриншотных тестов

- 📍 Запуск storybook <br/>
  ```start-storybook -p 6006 -c ./config/storybook```
- 📍 Запуск Loki <br/>
  ```npx loki test```
- 📍 В случае, если новые изменения вас устраивают, вы можете сделать approve <br/>
  ```npx loki approve```
- 📍 Если вы случайно что-то поменяли и тесты упали, вы можете выполнить следующую команду чтобы визуально оценить, что изменилось<br/>
  ```npm run visual:report:json && npm run visual:report:html```

![image](https://user-images.githubusercontent.com/49817117/221153778-1799e7f9-9afd-4e70-8b11-04143fc61650.png)


