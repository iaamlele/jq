import {SYM_NODE_LIST} from './utils/symbol.js'
import hide from './api/hide.js'
import show from './api/show.js'
import ready from './api/ready.js'

export default class Core{
    constructor(selector) {
        if(selector === document || selector instanceof Node) {
            this[SYM_NODE_LIST] = [selector];
            console.log("OOO", this[SYM_NODE_LIST]);
        }else if(selector instanceof NodeList) {
            this[SYM_NODE_LIST] = [...document.querySelectorAll(selector)];
        }else if(typeof selector === 'string') {
            console.log("string:", selector);
            this[SYM_NODE_LIST] = [...document.querySelectorAll(selector)];
            console.log("III", this[SYM_NODE_LIST]);
        }else if(selector === undefined) {
            this[SYM_NODE_LIST] = [];
        }else {
            throw new Error('Parameter error.');
        }
        return this;
    }
}

Core.prototype.hide = hide;
Core.prototype.ready = ready;
Core.prototype.show = show;

// const $ = (function() {
//     class Jquery{
//         constructor(arg) {
//             this.arg = arg;
    
//             if(typeof arg === "string") {
//                 const arg_class = new RegExp("^\\..*");
//                 const arg_id = new RegExp("^#.*");
//                 const arg_tag = new RegExp("^[a-zA-Z][a-zA-z0-9]*");
//                 if(arg_class.test(arg)) {
//                     const classes = document.getElementsByClassName(arg.slice(1));
//                     this.arg = classes;
//                 }else if(arg_id.test(arg)) {
//                     const ids = document.getElementById(arg.slice(1));
//                     this.arg = ids;
//                 }else if(arg_tag.test(arg)) {
//                     const tags = document.getElementsByTagName(arg);
//                     this.arg = tags;
//                 }else {
//                     console.log("Regular expression matching failed");
//                     return;
//                 }
//             }else if(typeof arg === "object") {
//                 this.arg = arg;
//             }else {
//                 print("Please enter the correct data type.");
//             }          
//         }
    
        
//     }

//     return function(arg) {
//         return new Jquery(arg);
//     }
// })();



// $(document).ready(function() {
//     $("p").hide().show();
// });
