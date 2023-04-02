## Description

Бэкенд обеспечивает маршрут для работы фронтенда. Маршрут принимает ИНН, и отдает имя компании. Имя можно брать из открытых источников. Например вот отсюда: https://dadata.ru/api/find-party/. После того как имя было извлечено из внешнего источника, оно должно быть размещено в реляционной БД. Если ИНН уже есть в БД, то имя нужно брать оттуда, а не из внешнего источника. 

И фронтенд и бэкенд должны быть docker’изованы и развернуты на хостинге.
В качестве платформы необходимо использовать node.js
Код должен быть залит на гитхаб

Нужно предоставить ссылку на код и на работающее веб-приложение.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
