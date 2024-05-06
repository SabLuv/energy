let basketNode = document.querySelector(`.basket-off`);

let count1Node = document.querySelector(`#count-flash`);

let count2Node = document.querySelector(`#count-monster`);

let MinusFlashNode = document.querySelector(`#minus-flash`);
let PlusFlashNode = document.querySelector(`#plus-flash`);

let MinusMonsterhNode = document.querySelector(`#minus-monster`);
let PlusMonsterNode = document.querySelector(`#plus-monster`);

let count = 0;

// flash
MinusFlashNode.addEventListener(`click`, function() {
    count --;
    count1Node.innerHTML = count;

    if (count <= 0) {
        count = 0;
        count1Node.innerHTML = count;
    }
});

PlusFlashNode.addEventListener(`click`, function() {
    count ++;
    count1Node.innerHTML = count;

    if (count >= 11) {
        count1Node.innerHTML = `Больше 10 нельзя!`;
        const timeId = setTimeout(() => {
            count = 10;
            count1Node.innerHTML = count}, 1000);
    }
});

// Monster

MinusMonsterhNode.addEventListener(`click`, function() {
    count --;
    count2Node.innerHTML = count;

    if (count <= 0) {
        count = 0;
        count2Node.innerHTML = count;
    }
});

PlusMonsterNode.addEventListener(`click`, function() {
    count ++;
    count2Node.innerHTML = count;

    if (count >= 11) {
        count2Node.innerHTML = `Больше 10 нельзя!`;
        const timeId = setTimeout(() => {
            count = 10;
            count2Node.innerHTML = count}, 1000);
    }
});
