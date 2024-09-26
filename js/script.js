// ini javascript

// replaceName
function replaceName() {
    let userjs = prompt("Hello, there! Before entering my portofolio, please fill out this field with your name!", "");
    document.getElementById("userjs").innerHTML = userjs
}

replaceName()

// photobanner
var slideIndex = 0
showDivs()

function showDivs() {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow")

    for(i = 0; i <imgList.length; i++) {
        imgList[i].style.display = 'none'
    }

    slideIndex++
    if (slideIndex > imgList.length) {
        slideIndex = 1
    }

    imgList[slideIndex-1].style.display = 'block'

    setTimeout(showDivs, 5000)
}

// form
function validateForm() {
    const name = document.forms['message-form']['full-name'].value;
    const birthdate = document.forms['message-form']['birth-date'].value;

    const genderRadios = document.forms['message-form']['genders'];
    let gender = "";
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            gender = genderRadios[i].value;
            break;
        }
    }

    const messages = document.forms['message-form']['messages'].value;

    // Check for empty fields
    if (name === "" || birthdate === "" || gender === "" || messages === "") {
        alert("Tidak Boleh Kosong!");
        return false;
    }

    // Set results in the display area
    setSenderUI(name, birthdate, gender, messages);
    
    return false;
}

function setSenderUI(name, birthdate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = messages;
}


