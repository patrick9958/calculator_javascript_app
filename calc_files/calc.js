var zero = $('#button0');
var one = $('#button1');
var two = $('#button2');
var three = $('#button3');
var four = $('#button4');
var five = $('#button5');
var six = $('#button6');
var seven = $('#button7');
var eight = $('#button8');
var nine = $('#button9');
var num_keys = [zero, one, two, three, four, five, six, seven, eight, nine];
for (var i = 0; i < num_keys.length; i++) {
    num_keys[i].addClass('num_keys');
}
num_keys = $('.num_keys');

var add_key = $('#addButton');
var sub_key = $('#subtractButton');
var multiply_key = $('#multiplyButton');
var divide_key = $('#divideButton');
var equals_key = $('#equalsButton');
var clear_key = $('#clearButton');
var display_elem = $('#display');

var add_op = 'add';
var sub_op = 'sub';
var multiply_op = 'multiply';
var divide_op = 'divide';


function num_click_handler() {
    console.log('num_click_handler called');
    if (localStorage.needs_clear) {
        display_elem.val($(this).val());
        localStorage.removeItem('needs_clear');
    }
    else if (display_elem.val()) {
        var new_val = display_elem.val() + $(this).val();
        display_elem.val(new_val);
    }
    else {
        display_elem.val($(this).val());
    }
}

function op_click(this_op) {
    localStorage.setItem('first_num', display_elem.val());
    localStorage.setItem('op', this_op);
    localStorage.setItem('needs_clear', 'true');
}

function add_click_handler() {
    console.log('add_click_handler called');
    op_click(add_op);
}

function subtract_click_handler() {
    console.log('subtract_click_handler called');
    op_click(sub_op);
}

function multiply_click_handler() {
    console.log('multiply_click_handler called');
    op_click(multiply_op);
}

function divide_click_handler() {
    console.log('divide_click_handler called');
    op_click(divide_op);
}

function equals_click_handler() {
    console.log('equals_click_handler called');
    // do equals op
    var first_num = parseInt(localStorage.first_num);
    var second_num = parseInt(display_elem.val());
    var op = localStorage.op;
    if (op === add_op) {
        display_elem.val(first_num + second_num);
    }
    else if (op === sub_op) {
        display_elem.val(first_num - second_num);
    }
    else if (op === multiply_op) {
        display_elem.val(first_num * second_num);
    }
    else if (op === divide_op) {
        display_elem.val(first_num / second_num);
    }
    clear_local_storage();
    localStorage.setItem('needs_clear', 'true');
}

function clear_click_handler() {
    console.log('clear_click_handler called');
    display_elem.val('');
    clear_local_storage();
}

function clear_local_storage() {
    console.log('local storage cleared');
    if (localStorage.first_num) {
        localStorage.removeItem('first_num');
    }
    if (localStorage.op) {
        localStorage.removeItem('op');
    }
    if (localStorage.needs_clear) {
        localStorage.removeItem('needs_clear');
    }
}

num_keys.click(num_click_handler);
add_key.click(add_click_handler);
sub_key.click(subtract_click_handler);
multiply_key.click(multiply_click_handler);
divide_key.click(divide_click_handler);
equals_key.click(equals_click_handler);
clear_key.click(clear_click_handler);

