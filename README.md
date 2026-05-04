# CountryApp

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" height="50" alt="angular logo"/>&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" height="50" alt="tailwindcss logo" />
</p>

**CountryApp** aplicacion para obtener la lista de paises y capital usando la API de **REST Countries**. Hecho con **Angular** y para los estilos **Tailwind CSS** y **daisyUI**.

## Run Locally

Clone the project

```bash
  git clone https://github.com/miguel-camara/country-app.git
```

Go to the project directory

```bash
  cd blackjack-angular
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your **environment.ts** files

`API_URL`

## Demo

[Demo](https://country-app-miguel.netlify.app/)

## Screenshots

![App Screenshot](public/screens/screen-1.png)

![App Screenshot](public/screens/screen-2.png)

![App Screenshot](public/screens/screen-3.png)

![App Screenshot](public/screens/screen-4.png)

## Features

- **Country App:** Aplicación en donde consumimos la API de REST Countries, especializada en países en donde podemos obtener países por nombre, así como información relacionada a ese país como fronteras, capital, etc.
- **Por Capital:** En esta sección el texto ingresado en el buscador obtendrá una lista de países cuya capital coincide con el texto ingresado, en caso de no encontrar ninguno mostrará un mensaje de error.
- **Por País:** En esta sección el texto ingresado en el buscador obtendrá una lista de países con base al texto ingresado, en caso de no encontrar ninguno mostrará un mensaje de error.
- **Por Región:** En esta sección se encuentran la lista de regiones (America, Africa, Asia, etc). Al hacer clic en el elemento se mostrarán los países relacionados a esa región

## Tech Stack

**Frontend:** Angular, Tailwind CSS y daisyUI
