import {nextStep} from "./DOM";

function translate (answer, id) {
    let func = function (ans){
        if (ans == answer) {
            nextStep(true, id);
        }
        else {
            nextStep(false, id);
        }
    }
    return func;
}

let rounds_arr = [
    [
        "Перевод",
        "Hello.",
        "Привет"
    ],
    [
        "Перевод",
        "Pink",
        "Розовый"
    ],
    [
        "Перевод",
        "Прыжок",
        "Jump"
    ],
    [
        "Перевод",
        "Jump",
        "Прыжок"
    ],
    [
        "Перевод",
        "Bay",
        "Пока"
    ],
    [
        "Перевод",
        "Белый",
        "White"
    ],
    [
        "Перевод",
        "Blue",
        "Голубой"
    ],
];


export {rounds_arr, translate}