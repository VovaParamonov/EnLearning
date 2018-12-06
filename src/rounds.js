import {nextStep} from "./DOM";

function translate (true_answers, id) {
    let func = function (ans){
      let result = ans.toLowerCase();
      let overlap;
      let answer_arr = [];

      //-----Обработка введенного ответа---------
      while (result.indexOf("  ") != -1){
          result = result.slice(0,result.indexOf("  ")) + result.slice(result.indexOf("  ")+1, result.length);
      }
      while (result.indexOf(",") != -1){
          result = result.slice(0,result.indexOf(",")) + result.slice(result.indexOf(",")+1, result.length);
      }
      if (result.indexOf(" ") == result.length-1){
          result = result.slice(0,-1);
      }
      if (true_answers.includes(",")){
          answer_arr = true_answers.split(", ");
      } else {
          answer_arr[0] = true_answers;
      }

      overlap = answer_arr.some((item) => (item == result));

      //------------------------------------------
      if (overlap) {
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
        "до тех пор пока, до тех пор",
    ],
    [
        "Перевод",
        "тo teach",
        "учить, преподавать"
    ],
    [
        "Перевод",
        "Essential",
        "существенный, необходимый"
    ],
    [
        "Перевод",
        "To show",
        "показывать, проявлять"
    ],
    [
        "Перевод",
        "To that",
        "чтобы, для того чтобы"
    ],
    [
        "Перевод",
        "To find",
        "Находить"
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
        "Neccessary",
        "нужный, необходимый"
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
