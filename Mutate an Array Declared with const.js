// 2. Mutate an Array Declared with const  

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);



const s = [5, 7, 2];
function editInPlace() {
  s.reverse()
}
editInPlace();