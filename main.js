// // 38-masala 

// const item = (text) => {
//     const words = text.split(" ")
//     let count = 0
//     words.forEach(word => {
//         if (word.includes(`a`) || word.includes(`A`)) {
//             count++
//         }
//     });
//     return count;
// };
// const text = "salom dunyo"
// const result = item(text)
// console.log(result);



// // 40-masala 

// function middleNumber(params) {
//     let arr = [...params]
//     let Number = 0
//     let number1 = 0
//     let number2 = 0
//     if (arr.length % 2 == 0) {
//         number1 = (arr.length / 2)
//         number2 = (arr.length / 2) - 1
//         Number = (arr[number1] + arr[number2]) / 2
//         return Number
//     } else {
//         Number = (arr.length / 2) - 0.5
//         return (arr[Number])
//     }
// }
// console.log(middleNumber([1, 2, 3, 4, 5]))





// 42-masala 

// function world(arr) {
//     const obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = arr[i].length;
//     }
//     return obj;
// }
// const item = ["text", "world", "laptop"]
// const box = world(item)
// console.log(box);




// // 43-masala  


// function item(obj, n) {
//     const item_box = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             item_box[key] = obj[key] * n;
//         }
//     }
//     return item_box;
// }

// const n = 3;
// const obj = {a: 2, b: 3, c: 4};
// const item_box = item(obj, n);
// console.log(item_box);




// 44-masala 


// function item(n) {
//     const result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(Math.pow(2, i));
//     }
//     return result;
// }
// console.log(item(4)); 
// console.log(item(5)); 


// 48-masala 

// function item(str) {
//     const initials = str.split(' ').map(word => word.charAt(0)).join('');
//     return initials;
// }

// const input = 'George Raymond Richard Martin';
// const output = item(input);
// console.log(output); 




// 49-masala 

// function item(arr) {
//     arr.sort((a, b) => a.age - b.age);
//     const youngest = arr[0].age;
//     const oldest = arr[arr.length - 1].age;
//     const difference = oldest - youngest;
//     return difference;
// }
// const input = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];
// const output = item(input);
// console.log(output); 



// 64-masala  


// function item(p, q) {
//     if (p.length !== q.length) {
//         return false;
//     }
//     for (let i = 0; i < p.length; i++) {
//         if (p[i] !== q[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// const testCases = [
//     [[1,2,3], [1,2,3]],
//     [[1,2], [1,null,2]],
//     [[1,2,1], [1,1,2]]
// ];
// testCases.forEach(([p, q]) => {
//     console.log("Input: p =", p, "q =", q);
//     console.log("Output:", item(p, q));
//     console.log();
// });


// // 65-masala 

// function item (obj){
//     let arr = Object.entries(obj);
//     let main = arr.map(([key, value]) => `${key}${value}`);
//     return main
// }
// console.log(item({a: 2, b: 5, c: 7}));



// 68-masala  


// function box_item(arr) {
//     const truthy = arr.filter(item => item);
//     const falsy = arr.filter(item => !item);
//     return { truthy, falsy };
// }
// const inputArr = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// const output = box_item(inputArr);
// console.log(output);





