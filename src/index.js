import './css/styles.css';
import './DOM.js';
import './funcs.js';
import {round_create, nextStep} from "./DOM";
import $ from "jquery";

var rounds_arr = [
    [
        "Перевод",
        "Hello.",
        function callback(answer, id){
            if (answer == "Привет") {
                nextStep(true, id);
            }
            else {
                nextStep(false, id);
            }
        }
    ],
    [
        "Перевод",
        "She speaks, that she loves him",
        function callback(answer, id){
            if (answer == "Она говорит, что любит его" || answer == "Она говорит что любит его" || answer == "она говорит, что любит его" || answer == "Она говорит, что она любит его" || answer == "Она говорит что она любит его") {
                nextStep(true, id);
            }
            else {
                nextStep(false, id);
            }
        }
    ],
    [
        "Перевод",
        "Чёрный",
        function callback(answer, id){
            if (answer == "Black" || answer == "black") {
                nextStep(true, id);
            }
            else {
                nextStep(false, id);
            }
        }
    ],
]

nextStep(true);

export {rounds_arr};