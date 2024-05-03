//import Vue from "vue";
import Vue from "vue/dist/vue.js";
window.Vue = Vue;

//import "jquery";
let jquery= require('jquery');
window.jquery = window.$ = jquery;//分配给windows变量、美元符号

let axios = require('axios');
window.axios = axios;

import "popper.js";

import "bootstrap";

window.Noty = require('noty');

require('./product');
//var vm = new Vue({el:"#app"})

require('./components/MiniCart.js');
require('./components/ProductForm.js');
require('./components/CartForm.js');

//Vue custom filter
require('./filters/money.js');