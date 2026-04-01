// URL de la imagen que quieres usar como reemplazo
// Cambia esta URL por la imagen que prefieras
const NUEVO_AVATAR_URL = "https://www.iamfy.co/cdn/shop/files/m_2Fx1000_2F71233a11-edc3-442d-96a2-e5a58ac93561.jpg?v=1760444343";

// El nombre de usuario a buscar
const USUARIO_OBJETIVO = "FrancisDeea";

function reemplazarAvatares() {
  // Buscar imágenes por el atributo alt (ej. alt="@FrancisDeea")
  const imagenes = document.querySelectorAll(`img[alt*="${USUARIO_OBJETIVO}" i]`);
  
  imagenes.forEach(img => {
    if (img.src !== NUEVO_AVATAR_URL) {
      img.src = NUEVO_AVATAR_URL;
      // GitHub usa srcset para diferentes resoluciones, lo eliminamos para forzar nuestra imagen
      if (img.hasAttribute('srcset')) {
        img.removeAttribute('srcset');
      }
    }
  });

  // Buscar imágenes dentro de enlaces al perfil del usuario
  const enlaces = document.querySelectorAll(`a[href="/${USUARIO_OBJETIVO}"] img.avatar`);
  enlaces.forEach(img => {
    if (img.src !== NUEVO_AVATAR_URL) {
      img.src = NUEVO_AVATAR_URL;
      if (img.hasAttribute('srcset')) {
        img.removeAttribute('srcset');
      }
    }
  });
}

// Ejecutar al cargar la página
reemplazarAvatares();

// Observar cambios en el DOM para reemplazar avatares que cargan dinámicamente (ej. comentarios, PRs, scroll infinito)
const observer = new MutationObserver((mutations) => {
  let deberiaRevisar = false;
  for (const mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      deberiaRevisar = true;
      break;
    }
  }
  if (deberiaRevisar) {
    reemplazarAvatares();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});