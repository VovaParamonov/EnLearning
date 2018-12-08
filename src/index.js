import {level} from "./DOM";
import './css/styles.css';
import './DOM.js';
import './funcs.js';
import $ from "jquery"
import {arr_rounds} from "./rounds";


$(document).ready(function(){
    level(arr_rounds[0]);
});