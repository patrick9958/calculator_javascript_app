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

function num_click_handler() {
    console.log('num_click_handler called');
    if (display_elem.val()) {
        var new_val = display_elem.val() + $(this).val();
        display_elem.val(new_val);
    }
    else {
        display_elem.val($(this).val());
    }
}

function add_click_handler() {
    console.log('add_click_handler called');
}

function subtract_click_handler() {
    console.log('subtract_click_handler called');
}

function multiply_click_handler() {
    console.log('multiply_click_handler called');
}

function divide_click_handler() {
    console.log('divide_click_handler called');
}

function equals_click_handler() {
    console.log('equals_click_handler called');
}

num_keys.click(num_click_handler);
add_key.click(add_click_handler);
sub_key.click(subtract_click_handler);
multiply_key.click(multiply_click_handler);
divide_key.click(divide_click_handler);
equals_key.click(equals_click_handler);

