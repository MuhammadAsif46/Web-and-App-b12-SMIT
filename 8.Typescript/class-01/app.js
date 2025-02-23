const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.getElementById("btn");

const add = (val1, val2) => {
    return val1 + val2;
};

button.addEventListener("click", function () {
    const firstVal = input1.value;
    const secondVal = input2.value;

    
    console.log(add(firstVal, secondVal));
});
