# 📁 M-VictoriaCM-back_portafolio_mvcm

Proyecto backend para el portafolio de M. Victoria. Hecho con Node.js, Express y Sequelize, conectado a una base de datos MySQL.


## 🚀 Tecnologías utilizadas

* Node.js
* Express
* MySQL2
* Sequelize
* typescript
* dotenv
* CORS
* ESLint v9
* Nodemon

## 📦 Instalación de dependencias

```
npm install
```

## 📦 Dependencias instaladas:
```
"cors": "^2.8.5",
"dotenv": "^16.4.7",
"express": "^5.1.0",
"mysql2": "^3.14.0",
"sequelize": "^6.37.7"
```

## 🔧 Dependencias de desarrollo (devDependencies)
```
"@eslint/js": "^9.24.0",
"eslint": "^9.24.0",
"eslint-plugin-vue": "^10.0.0", // (si no usás Vue en este backend, podés sacarlo)
"globals": "^16.0.0",
"nodemon": "^3.1.9"

```

## 🛠️ Scripts disponibles
* npm run dev: Ejecuta el servidor con nodemon (archivo principal: src/app.js)
* npm run lint: Corre ESLint para revisar errores de estilo y sintaxis.
* npm run lint:fix: Aplica correcciones automáticas con ESLint.

## 🌍 Configuración del entorno
Crear un archivo .env en la raíz del proyecto con los siguientes datos:

```
PORT=
DB_DATABASE=nombre_de_tu_base
DB_USERNAME=usuario
DB_PASSWORD=contraseña

```