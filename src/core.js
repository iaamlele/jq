export default class Core{
    constructor(selector) {
        if(selector === document || selector instanceof Node) {
            this.selector = [selector];
        }else if(selector instanceof NodeList) {
            this.selector = [...document.querySelectorAll(selector)];
        }else if(typeof selector === 'string') {
            this.selector = [...document.querySelectorAll(selector)];
        }else if(selector === undefined) {
            this.selector = [];
        }else {
            throw new Error('Parameter error.');
        }
    }

    hide() {
        if(this.selector instanceof HTMLCollection || this.selector instanceof NodeList) {
            for(let i = 0; i < this.selector.length; i++) {
                this.selector[i].style.visibility = 'hidden';
            }
        }else {
            this.selector.style.visibility = 'hidden';
        }
        
        return this;
    }

    show() {
        if(this.selector instanceof HTMLCollection || this.selector instanceof NodeList) {
            for(let i = 0; i < this.arg.length; i++) {
                this.selector[i].style.visibility = 'visible';
            }
        }else {
            this.selector.style.visibility = 'visible';
        }
        
        return this;
    }

    ready(f) {
        if(this.selector === document) {
            return document.addEventListener("DOMContentLoaded", f);
        }else {
            return null;
        }
        
    }

    // return function(arg) {
    //     return new Jquery(arg);
    // }
}

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
