/* array.forEach */
const a = [0, 1, 2, 3, 4, 5];
a.forEach(function(item) {
    console.log(item);  // 0, 1, 2, 3, 4, 5
});


/* array.map */
const b = ['0', '1', '2', '3', '4', '5'];
const newB = b.map(function(item) {
    item = parseInt(item);
    /*
    parseInt()
    Number()
    *= 1         */
    return item;
});
console.log(typeof(newB[1]));   // number


/* filter */
const c = [0, 1, 2, 3, 4, 5];
const newC = c.filter(function(item) {
    return item > 3;
});
console.log(newC);  // [4, 5]


/* Spread Syntax */
function getSum(...n) {
    let sum = 0;
    n.forEach((item) => {
        sum += item;
    });
    return sum;
}
/* 
1, 2, 5, 7, 9 로 입력받은 데이터는 배열의 형태인데,
... 을 통해 각각의 element 로 분리된다.         */
console.log(getSum(1, 2, 5, 7, 9)); // 24

const numbers = [1, 2, 3];
const newNumbers = [0, ...numbers, 4, 5, 6];
console.log(newNumbers);    // [0, 1, 2, 3, 4, 5, 6]


/* Optional Chaining */
const x = a?.b?.c;
const y = a?.b?.[3];
console.log(x, y);  // undefined undefined