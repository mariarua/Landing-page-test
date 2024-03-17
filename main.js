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
    warningText.style.color = "#ffffff";
    warningText.style.padding = "0.5rem";
    warningText.style.backgroundColor = "#2c6823";
    warningText.style.borderRadius = "5px";

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

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".review");

let sliderIndex = 0;
let width = slides[0].offsetWidth;

window.addEventListener("resize", (_event) => {
  width = slides[0].offsetWidth;
  slider.style.transform = `translateX(-${sliderIndex * width}px)`;
});

function nextReview() {
  sliderIndex++;
  if (sliderIndex >= slides.length) {
    sliderIndex = 0;
  }
  slider.style.transform = `translateX(-${sliderIndex * width}px)`;
}

function prevReview() {
  sliderIndex--;
  if (sliderIndex < 0) {
    sliderIndex = slides.length - 1;
  }
  slider.style.transform = `translateX(-${sliderIndex * width}px)`;
}

document
  .getElementById("sliderPrevButton")
  .addEventListener("click", prevReview);
document
  .getElementById("sliderNextButton")
  .addEventListener("click", nextReview);
