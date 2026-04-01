# GitHub Avatar Override (Broma para un amigo)

Este es un proyecto de extensión de Chrome creado con fines puramente humorísticos. Su única función es reemplazar el avatar de un usuario específico de GitHub (en este caso, FrancisDeea) por una imagen de mi elección.

La idea es gastarle una broma a un amigo, actualizando su "fea" foto de perfil en mi navegador local cada vez que interactúo con él en GitHub.

**¡Advertencia!** Esto es solo una broma inofensiva que solo afecta a mi navegador. No modifica el perfil real del usuario en GitHub.

## ¿Cómo funciona?

La extensión inyecta un pequeño script de JavaScript (`content.js`) en las páginas de GitHub. Este script busca todas las imágenes de avatar asociadas con el usuario `FrancisDeea` y las sustituye por una imagen predefinida (codificada en Base64 para evitar problemas de Content Security Policy).

## Instalación (si quieres gastar una broma similar)

1.  **Clona este repositorio:**
    ```bash
    git clone https://github.com/daniheras/github-avatar-override.git
    ```
2.  **Personaliza la imagen y el usuario:**
    -   Abre `content.js`.
    -   Cambia la URL de la imagen `NUEVO_AVATAR_URL` por la que desees.
    -   Cambia `USUARIO_OBJETIVO` por el nombre de usuario de GitHub de tu amigo.
3.  **Carga la extensión en Chrome/Edge/Brave:**
    -   Ve a `chrome://extensions/` (o `edge://extensions/`).
    -   Activa el "Modo desarrollador".
    -   Haz clic en "Cargar descomprimida" y selecciona la carpeta de este proyecto.
4.  **¡Disfruta de la broma!**

---

**Nota:** Este proyecto es una demostración de cómo se pueden crear extensiones de navegador sencillas y no tiene ninguna intención maliciosa. ¡Por favor, úsalo de forma responsable y solo con amigos que tengan buen sentido del humor!
