const nameInput = document.getElementById("name");
const enterpriseInput = document.getElementById("enterprise");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const checkInput = document.getElementById("check");
const messageTextarea = document.getElementById("message");
const form = document.getElementById("form");
const warningText = document.getElementById("warnings");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,80}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^[+*#0-9]{7,14}$/,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  warningText.innerHTML = "";

  let warnings = "";
  let isValid = true;

  if (!expresiones.name.test(nameInput.value)) {
    warnings += `El nombre no es válido. Debe contener solo letras y espacios, y tener entre 1 y 80 caracteres.<br>`;
    isValid = false;
  }

  if (!expresiones.email.test(emailInput.value)) {
    warnings += `El email no es válido. Por favor, ingrese un email válido.<br>`;
    isValid = false;
  }

  if (!expresiones.phone.test(phoneInput.value)) {
    warnings += `El teléfono debe contener entre 7 y 14 caracteres, incluyendo solo números, +, *, #.<br>`;
    isValid = false;
  }

  if (!checkInput.checked) {
    warnings += `Debe aceptar los términos y condiciones para continuar.<br>`;
    isValid = false;
  }

  if (!isValid) {
    warningText.innerHTML = warnings;
    warningText.style.display = "block";
    warningText.style.color = "#f5333f";
  } else {
    warningText.innerHTML = "Enviado!";
    warningText.style.display = "block";
    warningText.style.color = "#303536";

    nameInput.value = "";
    enterpriseInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageTextarea.value = "";
    checkInput.checked = false;

    const newUser = {
      nombre: nameInput.value,
      empresa: enterpriseInput.value,
      email: emailInput.value,
      telefono: phoneInput.value,
      mensaje: messageTextarea.value,
    };
    console.log("Nuevo usuario:", newUser);
  }
});
