import Vue from "vue";
window.Vue = Vue;

//import "jquery";
let jquery= require('jquery');
window.jquery = window.$ = jquery;//分配给windows变量、美元符号

import "popper.js";

import "bootstrap";

require('./product');
var vm = new Vue({el:"#app"})

require('./components/ProductForm.js');
require('./components/CartForm.js');

let axios = require('axios');
window.axios = axios;

window.Noty = require('noty');