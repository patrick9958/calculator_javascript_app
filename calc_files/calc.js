var num_keys = [$('#button0'), $('#button1'), $('#button2'), $('#button3'), $('#button4'),
    $('#button5'), $('#button6'), $('#button7'), $('#button8'), $('#button9')];
var add_key = $('#addButton');
var sub_key = $('#subtractButton');
var multiply_key = $('#multiplyButton');
var divide_key = $('#divideButton');
var equals_key = $('#equalsButton');
var clear_key = $('#clearButton');
var display_elem = $('#display');

function num_click_handler() {
    console.log('num_click_handler called');
    display_elem.val(3)
}

function add_click_handler() {

}

function subtract_click_handler() {

}

function multiply_click_handler() {

}

function divide_click_handler() {

}

function global_click_handler() {
    if (num_keys.includes($(this))) {
        console.log('num_key pressed');
    }
}

if ($(':button').click(global_click_handler)) {
    console.log('button pressed');
}

$('#button3').click(num_click_handler);
