
function convert() {
    let text = document.getElementById("units");
    let units = text.value;
    let choose = document.getElementById("from");
    let measure = choose.value;
    let choose2 = document.getElementById("to");
    let measure2 = choose2.value;
    let data = {
        distance: {
            unit: measure,
            value: + units
        },
        conver_to: measure2
    }
    let json = JSON.stringify(data);
    read(json);

}


function read(json) {
    let income = JSON.parse(json);

        if( Number.isInteger(income.distance.value)){
           
        }
        else{
             alert('Введите число!');
             return;
        
    }

let a = (income.distance.unit === 'mm' && income.conver_to === 'mm') ?  (income.distance.value * 1) :
(income.distance.unit === 'mm' && income.conver_to === 'cm') ?  (income.distance.value / 10)  :
(income.distance.unit === 'mm' && income.conver_to === 'm') ?  (income.distance.value / 1000) :
(income.distance.unit === 'mm' && income.conver_to === 'km') ?  (income.distance.value / 1000000) :
(income.distance.unit === 'mm' && income.conver_to === 'in') ?  (income.distance.value / 25.4) :
(income.distance.unit === 'mm' && income.conver_to === 'ft') ?  (income.distance.value / 304.8) :
(income.distance.unit === 'mm' && income.conver_to === 'yd') ?  (income.distance.value / 914.4) :

(income.distance.unit === 'cm' && income.conver_to === 'mm') ?  (income.distance.value * 10) :
(income.distance.unit === 'cm' && income.conver_to === 'cm') ?  (income.distance.value * 1) :
(income.distance.unit === 'cm' && income.conver_to === 'm') ?  (income.distance.value / 10) :
(income.distance.unit === 'cm' && income.conver_to === 'km') ?  (income.distance.value / 100000) :
(income.distance.unit === 'cm' && income.conver_to === 'in') ?  (income.distance.value / 2.54) :
(income.distance.unit === 'cm' && income.conver_to === 'ft') ?  (income.distance.value / 30.48) :
(income.distance.unit === 'cm' && income.conver_to === 'yd') ?  (income.distance.value / 91.44) :

(income.distance.unit === 'm' && income.conver_to === 'mm') ?  (income.distance.value * 1000) :
(income.distance.unit === 'm' && income.conver_to === 'cm') ?  (income.distance.value * 100) :
(income.distance.unit === 'm' && income.conver_to === 'm') ?  (income.distance.value * 1) :
(income.distance.unit === 'm' && income.conver_to === 'km') ?  (income.distance.value / 1000) :
(income.distance.unit === 'm' && income.conver_to === 'in') ?  (income.distance.value * 39.37) :
(income.distance.unit === 'm' && income.conver_to === 'ft') ?  (income.distance.value * 3.281) :
(income.distance.unit === 'm' && income.conver_to === 'yd') ?  (income.distance.value * 1.094) :

(income.distance.unit === 'km' && income.conver_to === 'mm') ?  (income.distance.value * 1e+6) :
(income.distance.unit === 'km' && income.conver_to === 'cm') ?  (income.distance.value * 100000) :
(income.distance.unit === 'km' && income.conver_to === 'm') ?  (income.distance.value * 1000) :
(income.distance.unit === 'km' && income.conver_to === 'km') ?  (income.distance.value * 1) :
(income.distance.unit === 'km' && income.conver_to === 'in') ?  (income.distance.value * 39370.1) :
(income.distance.unit === 'km' && income.conver_to === 'ft') ?  (income.distance.value * 3280.84) :
(income.distance.unit === 'km' && income.conver_to === 'yd') ?  (income.distance.value * 1093.61) :

(income.distance.unit === 'in' && income.conver_to === 'mm') ?  (income.distance.value * 25.4) :
(income.distance.unit === 'in' && income.conver_to === 'cm') ?  (income.distance.value * 2.54) :
(income.distance.unit === 'in' && income.conver_to === 'm') ?  (income.distance.value / 39.37) :
(income.distance.unit === 'in' && income.conver_to === 'km') ?  (income.distance.value / 39370.1) :
(income.distance.unit === 'in' && income.conver_to === 'in') ?  (income.distance.value * 1) :
(income.distance.unit === 'in' && income.conver_to === 'ft') ?  (income.distance.value / 12) :
(income.distance.unit === 'in' && income.conver_to === 'yd') ?  (income.distance.value / 36) :

(income.distance.unit === 'ft' && income.conver_to === 'mm') ?  (income.distance.value * 304.8) :
(income.distance.unit === 'ft' && income.conver_to === 'cm') ?  (income.distance.value * 30.48) :
(income.distance.unit === 'ft' && income.conver_to === 'm') ?  (income.distance.value / 3.281) :
(income.distance.unit === 'ft' && income.conver_to === 'km') ?  (income.distance.value / 3281) :
(income.distance.unit === 'ft' && income.conver_to === 'in') ?  (income.distance.value * 12) :
(income.distance.unit === 'ft' && income.conver_to === 'ft') ?  (income.distance.value * 1) :
(income.distance.unit === 'ft' && income.conver_to === 'yd') ?  (income.distance.value / 3) :

(income.distance.unit === 'yd' && income.conver_to === 'mm') ?  (income.distance.value * 914.4) :
(income.distance.unit === 'yd' && income.conver_to === 'cm') ?  (income.distance.value * 91.44) :
(income.distance.unit === 'yd' && income.conver_to === 'm') ?  (income.distance.value / 1.094) :
(income.distance.unit === 'yd' && income.conver_to === 'km') ?  (income.distance.value / 1093.61) :
(income.distance.unit === 'yd' && income.conver_to === 'in') ?  (income.distance.value * 36) :
(income.distance.unit === 'yd' && income.conver_to === 'ft') ?  (income.distance.value * 3) :
(income.distance.unit === 'yd' && income.conver_to === 'yd') ?  (income.distance.value * 1) :
'Vse good';

let result = {
    unit: income.conver_to,
    value: a.toFixed(5)
}
let again=JSON.stringify(result);
decode(again);
}

function decode(again){
    let result2=JSON.parse(again);
    console.log(result2);
    let screen = document.getElementById('resultat');

    screen.innerHTML = result2.value +result2.unit;
}











