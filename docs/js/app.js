document.addEventListener("DOMContentLoaded", (event) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => console.log("Formulario enviado exitosamente"))
    .catch((error) => alert("Error al enviar el formulario: " + error));
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);
});
