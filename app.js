const age = parseInt(document.querySelector("#age").value);
const gender = document.querySelector("input[name='gender']:checked");
const weight = parseFloat(document.querySelector("#weight").value);
const height = parseFloat(document.querySelector("#height").value);
const activity = parseInt(document.querySelector("#activity").value);
const form = document.querySelector("#form");
let h2 = document.querySelector("#water-intake");

let waterIntake = function(b){
    b = b/1000.0
    h2.textContent=`You need to consume ${b.toFixed(0)} L of water daily`;
}

form.addEventListener('submit', function(evt){
    evt.preventDefault();

    if (isNaN(age) || isNaN(weight) || isNaN(height) || !gender || isNaN(activity) || activity === 0) {
        alert("Please fill out all fields with valid information.");
        return;
    }
    
    let bmr = 0;
    bmr = (10 * weight) + (6.25 * height) - (5 * age);

    if (gender.value === "male") {
        bmr += 5;
    } else {
        bmr -= 161;
    }

    switch (activity) {
        case 1:
            bmr *= 1.2;
            break;
        case 2:
            bmr *= 1.375;
            break;
        case 3:
            bmr *= 1.55;
            break;
        case 4:
            bmr *= 1.725;
            break;
        case 5:
            bmr *= 1.9;
            break;
        default:
            alert("Please select an activity level.");
            return;
    }

    waterIntake(bmr);
});

function clearFormOnLoad(){
    if(form){
        form.reset();
    }
}

window.onload = clearFormOnLoad;