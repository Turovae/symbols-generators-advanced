import canIterate from './canIterate';

console.log(`canIterate('') = ${canIterate('')}`);
console.log(`canIterate(new Map()) = ${canIterate(new Map())}`);
console.log(`canIterate(new Set()) = ${canIterate(new Set())}`);
console.log(`canIterate(null) = ${canIterate(null)}`);
console.log(`canIterate(10) = ${canIterate(10)}`);
console.log(`canIterate('Netology') = ${canIterate('Netology')}`);
console.log(`canIterate([]) = ${canIterate([])}`);
console.log(`canIterate({}) = ${canIterate({})}`);
console.log(`canIterate() = ${canIterate()}`);
