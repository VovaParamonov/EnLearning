import {level, main} from "./DOM";
import './css/styles.css';
import './DOM.js';
import './funcs.js';
import $ from "jquery"
import {arr_rounds} from "./rounds";


$(document).ready(function(){
    main(arr_rounds);
});