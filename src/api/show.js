import {SYM_NODE_LIST} from '../utils/symbol.js'

export default function show() {
    console.log('show: ', this[SYM_NODE_LIST]);
    for(let i = 0; i < this[SYM_NODE_LIST].length; i++) {
        this[SYM_NODE_LIST][i].style.visibility = 'visible';
    }
    
    return this;

}