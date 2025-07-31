let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");


let resultMessage = document.querySelector("#resultmessage");

// Hide message initially
resultMessage.style.display = "none";

form.addEventListener("submit", function(detail){
    detail.preventDefault();

     document.querySelector("#emailError").textContent="";
     document.querySelector("#passwordError").textContent="";


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);


    let isValid = true;


    if(!emailans){
        document.querySelector("#emailError").textContent="Email is Incorrect";
         document.querySelector("#emailError").style.display="initial";
         isValid = false;
    }

    if(!passwordans){
        document.querySelector("#passwordError").textContent="Password is Incorrect";
        document.querySelector("#passwordError").style.display="initial";
        isValid = false;
    }
    if (isValid) {
        resultMessage.textContent = "Everything is Correct...";
        resultMessage.style.color = "green"; // Optional: make it green on success
        resultMessage.style.display = "block";
    }
});

