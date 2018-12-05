import {nextStep} from "./DOM";

function translate (answer, id) {
    let func = function (ans){
      let result = ans.toLowerCase();
      let failCounter;
      //-----Обработка введенного ответа---------
      if (result.indexOf(" ") == result.length-1){
        result = result.slice(0,-1);
      }
      if (result == answer) {
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
        "As long as.",
        "до тех пор пока",
    ],
    [
        "Перевод",
        "тo teach",
        "учить"
    ],
    [
        "Перевод",
        "Esantial",
        "существенный"
    ],
    [
        "Перевод",
        "To show",
        "скрывать"
    ],
    [
        "Перевод",
        "To that",
        "чтобы"
    ],
    [
        "Перевод",
        "To find",
        "искать"
    ],
    [
        "Перевод",
        "To find out",
        "выяснять"
    ],
    [
        "Перевод",
        "Other",
        "другой"
    ],
    [
        "Перевод",
        "Early",
        "рано"
    ],
    [
        "Перевод",
        "To think",
        "думать"
    ],
    [
        "Перевод",
        "invention",
        "изобретение"
    ],
    [
        "Перевод",
        "neccessary",
        "нужный"
    ],
    [
        "Перевод",
        "Quite",
        "вполне"
    ],
    [
        "Перевод",
        "To use",
        "использовать"
    ],
];


export {rounds_arr, translate}
