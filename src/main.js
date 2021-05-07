// body style :
document.body.style.background = "black";
document.body.style.color = "white";

// Selector
const output = document.querySelector("#output");

const email = output.querySelectorAll("input")
email.forEach(em => {
     em.addEventListener(("blur"), _ => {
        if (email[1].value == email[0].value) {
            email.forEach(el => el.style.background = "green")
        } else {
            email.forEach(el => el.style.background = "red")
        }
    })
})