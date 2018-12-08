import {nextStep, round} from "./DOM";

function translate (round_arr,true_answers) {
    let func = function (ans, id){
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
          nextStep(round_arr, true, id);
      }
      else {
          nextStep(round_arr, false, id);
      }
    }
    return func;
}


let round_colors = [
    [
        "Перевод",
            "Blue",
            "голубой",
        ],
    [
        "Перевод",
        "White",
        "белый"
    ],
    [
        "Перевод",
        "Black",
        "черный, чёрный"
    ],
    [
        "Перевод",
        "Yellow",
        "желтый, жёлтый",
    ],
    [
        "Перевод",
        "Green",
        "зеленый, зелёный"
    ],
    [
        "Перевод",
        "Pink",
        "розовый"
    ]
]

let free_round = [
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
        "привет",
        "Hello"
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
        "находить"
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

let arr_rounds = [round_colors, free_round];


export {arr_rounds, translate}
