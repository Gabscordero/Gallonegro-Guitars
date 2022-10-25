let form=document.querySelector("#contact-form")
console.log (form)
let email=document.querySelector("#email")
let message=document.querySelector("#message")
let imputname=document.querySelector("#name")

let emailValue

email.addEventListener("change",(event)=>{
emailValue= event.target.value
})

let nameValue

imputname.addEventListener("change",(event)=>{
nameValue= event.target.value
})

let messageValue

message.addEventListener("change",(event)=>{
messageValue= event.target.value
})

let data={
    service_id: 'service_hio0t3h',
    template_id: 'template_mwmi658',
    user_id: '29SsFn03upRTy4d2z',
    template_params: {
        "to_name":nameValue,
        "reply_to":emailValue,
        "message":messageValue
    }
};



form.addEventListener("submit",async(event)=>{
    event.preventDefault()
    let response=fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
      },
});
console.log (await response)
})
    