# Portafolio Agraound

Este repositorio contiene el codigo fuente del sitio web personal de Agraound. Se basa en la plantilla [Astral](https://html5up.net/astral) de **HTML5 UP** y esta pensado para publicarse como pagina estatica.

## Estructura del proyecto

- `index.html`: version principal compatible con GitHub Pages. El formulario de contacto usa `mailto:` para abrir el cliente de correo del visitante.
- `index_original.html`: alternativa que utiliza `send_email.php` para enviar mails. Requiere un servidor con PHP.
- `send_email.php`: script en PHP que procesa el formulario y redirige a `mailSuccess.html` o `mailError.html`.
- `assets/`: contiene hojas de estilo (SASS/CSS), JavaScript y fuentes.
- `images/` y `Portafolio/`: recursos graficos utilizados en la pagina.
- `.htaccess`: reglas para servidores Apache (no se usan en GitHub Pages).
- `LICENSE.txt` y `README.txt`: licencia y creditos de la plantilla original.

## Uso local

1. Clona este repositorio.
2. Abre `index.html` en tu navegador para ver la version estatica.
3. Si deseas probar la version con PHP, sube los archivos a un servidor que ejecute PHP y abre `index_original.html` (puedes renombrarlo como `index.html`).

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub e incluye estos archivos.
2. En las **Settings** del repositorio, en la seccion **Pages**, selecciona la rama `main` y la carpeta `/` como fuente.
3. Guarda los cambios y GitHub Pages publicara automaticamente el sitio usando `index.html`.

Para el formulario basado en PHP es necesario utilizar un hosting que permita ejecutar scripts del lado del servidor.

## Personalizacion

Los estilos se generan a partir de los ficheros SASS ubicados en `assets/sass`. Para recompilarlos se puede utilizar:

```bash
sass assets/sass/main.scss assets/css/main.css
```

Es posible editar textos e imagenes de la carpeta `images/` y `Portafolio/` para adaptar el contenido.

## Creditos

Plantilla [Astral](https://html5up.net/astral) de HTML5 UP distribuida bajo licencia Creative Commons Attribution 3.0. Las imagenes de ejemplo provienen de [Unsplash](https://unsplash.com).
