// 4. Use Arrow Functions to Write Concise Anonymous Functions

const myFunc = function() {
    const myVar = "value";
    return myVar;
}

const myFunc = () => {
    const myVar = "value";
    return myVar;
}

const myFunc = () => "value"; 


const magic = () => {
    return new Date();
};