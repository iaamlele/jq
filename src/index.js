import Core from './core.js'
export default function $(arg) {
    if(typeof arg === 'function') {
        new Core(document).ready(arg);
    }else if(arg === undefined) {
        return new Core();
    }else {
        return new Core(arg);
    }
}