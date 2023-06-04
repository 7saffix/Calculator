let input = document.getElementById('input');
let showBtn = (num) => {
    input.value = input.value + num;
}
let calCulation = () => {
    input.value = eval(input.value);
}
let clearBtn = () => {
    input.value = '';
}
let deleteBtn = () => {
    input.value = input.value.slice(0, -1);
}