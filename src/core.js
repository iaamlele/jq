import {SYM_NODE_LIST} from './utils/symbol.js'
import hide from './api/hide.js'
import show from './api/show.js'
import ready from './api/ready.js'

export default class Core{
    constructor(selector) {
        if(selector === document || selector instanceof Node) {
            this[SYM_NODE_LIST] = [selector];
        }else if(selector instanceof NodeList) {
            this[SYM_NODE_LIST] = [...document.querySelectorAll(selector)];
        }else if(typeof selector === 'string') {
            this[SYM_NODE_LIST] = [...document.querySelectorAll(selector)];
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
