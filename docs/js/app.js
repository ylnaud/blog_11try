document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const email = form.querySelector('input[name="email"]').value;
    const firstName = form.querySelector('input[name="first_name"]').value;

    if (!email || !firstName) {
      event.preventDefault();
      alert("Please fill out all required fields.");
    }

    // Aquí podrías agregar lógica adicional, como validación de email
  });
});
