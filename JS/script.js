let dMass = document.getElementById('mass');
let dDegree = document.getElementById('degree');
let bol = true;
let submit = document.getElementById('submit-btn').addEventListener('click',function(){
    var w = Number(document.getElementById('w-in').value);
    var h = Number(document.getElementById('h-in').value);
    var mass = w/(h*h);
    if (bol){
        document.getElementById('bg-output').classList.toggle('hidden');
        bol = false;
    }
    switch(true){
        case(mass>=18 && mass<25):
            dDegree.innerHTML = "Slim"
            dMass.innerHTML = `Your Body Mass : ${mass.toFixed(2)}`
            dDegree.style = "color: rgb(141, 139, 0);";
            break;
        case(mass>=25 && mass<30):
            dDegree.innerHTML = "Perfect weight"
            dMass.innerHTML = `Your Body Mass : ${mass.toFixed(2)}`
            dDegree.style = "color: green;";
            break;
        case(mass>=30 && mass<35):
            dDegree.innerHTML = "Overweight"
            dMass.innerHTML = `Your Body Mass : ${mass.toFixed(2)}`
            dDegree.style = "color: rgb(216, 115, 0);"
            break;
        case(mass>=35 && mass<40):
            dDegree.innerHTML = "First degree obesity"
            dMass.innerHTML = `Your Body Mass : ${mass.toFixed(2)}`
            dDegree.style = "color: rgb(216, 68, 0);";
            break;
        case(mass>=40):
            dDegree.innerHTML = "Second degree obesity"
            dMass.innerHTML = `Your Body Mass : ${mass.toFixed(2)}`
            dDegree.style = "color: red;";
            break;
        default:
            dDegree.innerHTML = "out of range"
            dMass.innerHTML = "Please enter a valid numbers";
            break;

    }



})