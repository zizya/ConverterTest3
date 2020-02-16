
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

    if (Number.isInteger(income.distance.value)) {

    }
    else {
        alert('Введите число!');
        return;

    }

    let unit = income.distance.unit;
    let value = income.distance.value;
    function convertToMM(unit, value) {
        let b =
            (unit === 'mm') ? (value * 1) :
                (unit === 'cm') ? (value * 10) :
                    (unit === 'm') ? (value * 1000) :
                        (unit === 'km') ? (value * 1e+6) :
                            (unit === 'in') ? (value * 25.4) :
                                (unit === 'ft') ? (value * 304.8) :
                                    (unit === 'yd') ? (value * 914.4) :
                                        'Vse good';

        let a =
            (income.conver_to === 'mm') ? (b * 1) :
                (income.conver_to === 'cm') ? (b / 10) :
                    (income.conver_to === 'm') ? (b / 1000) :
                        (income.conver_to === 'km') ? (b / 1000000) :
                            (income.conver_to === 'in') ? (b / 25.4) :
                                (income.conver_to === 'ft') ? (b / 304.8) :
                                    (income.conver_to === 'yd') ? (b / 914.4) :
                                        'vse good';

        let result = {
            unit: income.conver_to,
            value: a.toFixed(5)
        }
        let again = JSON.stringify(result);
        decode(again);
    }



    function decode(again) {
        let result2 = JSON.parse(again);
        console.log(result2);
        let screen = document.getElementById('resultat');

        screen.innerHTML = result2.value + result2.unit;
    }

    convertToMM(unit, value);

}






