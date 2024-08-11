document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  // Escuchar el evento de envío del formulario
  form.addEventListener("submit", function (event) {
    // Validar los campos requeridos
    const firstName = form.querySelector('input[name="first_name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const bio = form.querySelector('textarea[name="bio"]').value.trim();
    const checkbox = form.querySelector('input[name="valid"]').checked;

    // Validación básica
    if (!firstName) {
      alert("Por favor, introduce tu nombre.");
      event.preventDefault(); // Prevenir el envío si falta el nombre
      return;
    }

    if (!email || !validateEmail(email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      event.preventDefault(); // Prevenir el envío si el email es inválido
      return;
    }

    if (!bio) {
      alert("Por favor, escribe una breve biografía.");
      event.preventDefault(); // Prevenir el envío si la biografía está vacía
      return;
    }

    if (!checkbox) {
      alert("Por favor, valida el reCAPTCHA.");
      event.preventDefault(); // Prevenir el envío si no se marca el checkbox
      return;
    }

    // Aquí puedes agregar cualquier otra lógica antes del envío
  });

  // Función para validar el formato del email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
