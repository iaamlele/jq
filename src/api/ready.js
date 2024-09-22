import {SYM_NODE_LIST} from '../utils/symbol.js'

export default function ready(f) {
    if(this[SYM_NODE_LIST][0] === document) {
        return document.addEventListener("DOMContentLoaded", f);
    }else {
        return null;
    }
    
}