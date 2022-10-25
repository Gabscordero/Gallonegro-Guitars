let form = document.querySelector("#contact-form");
console.log(form);
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let imputname = document.querySelector("#name");

var emailValue;

email.addEventListener("input", (event) => {
  emailValue = event.target.value;
});

var nameValue;

imputname.addEventListener("input", (event) => {
  nameValue = event.target.value;
});

var messageValue;

message.addEventListener("input", (event) => {
  messageValue = event.target.value;
  console.log(messageValue);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!nameValue || !nameValue || !emailValue) {
    return alert("Todos los campos son necesarios");
  } else {
    let response = fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify({
        service_id: "service_hio0t3h",
        template_id: "template_mwmi658",
        user_id: "29SsFn03upRTy4d2z",
        template_params: {
          to_name: `${nameValue}`,
          from_name: "Gallo negro guitars",
          reply_to: `${emailValue}`,
          message: `${messageValue}`,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
});
