// Primitives: number, stirng, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number; // Number would be the Number object type - not the primitive
age = 12; // ok
// age = 'ab' // nok

let userName: string;
userName = 'chris';

let isInstructor: boolean;
isInstructor = false;

// More complex
let hobbies: string[];
hobbies = ['Sport', 'Eating'];

// type keyword of typescript
type Person = { name: string, age: number }; //Typedefinition

// let person; // default = any
let person: Person; // object type definition - kein =

person = {
    name: 'Chris',
    age: 41
};

// NOT storable - wrong type
// person = {
//     isEmployee: true
// };

let people: Person[]; // Array of such objects
people.push(person);

// Type inference
let course = 'React - the complete guide';
// let course:string = 'React - the complete guide'; // Typ zusaetzlich redundant
// course=124; // nicht moeglich - course ist als string gesetzt


// union type - more than one type possible
let courseNameOrId: string | number = 'react - the complete...'
courseNameOrId = 124;

// functions & types

function add(a: number, b: number) {
    return a + b; // return type inferred!
}

function printValue(value: any) {
    console.log(value); // no return type -> void inferred
}

// Generics

// types not enough - after that helper method typescript would no longer know
// function insertAtBeginning(array: any, value: any) {
//     return [value, ...array];
// }
//
// const demoArray = [1, 2, 3];
// const updatedArray = insertAtBeginning(demoArray, -1); // -1,1,2,3
// updatedArray[0].split(''); // runtime error

function insertAtBeginning<T>(array: T[], value: T) {
    return [value, ...array];
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // -1,1,2,3
// updatedArray[0].split(''); // compile error - result array is by generics as well type number

const stringArray = insertAtBeginning(['a'], 'b');
