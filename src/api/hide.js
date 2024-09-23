import {SYM_NODE_LIST} from '../utils/symbol.js'
export default function hide() {
    for(let i = 0; i < this[SYM_NODE_LIST].length; i++) {
        this[SYM_NODE_LIST][i].style.visibility = 'hidden';
    }

    return this;
}