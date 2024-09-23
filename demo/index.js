import $ from '../src/index.js'

console.log('js开始了');

$('.class-test').hide();
const node_list = document.getElementsByClassName('class-test');
console.log(node_list);
for(let i = 0; i < node_list.length; i++) {
    console.log(node_list[i].style.visibility);
}

// $(document).ready(function() {
//    $('.class-test').hide().show();
// });

