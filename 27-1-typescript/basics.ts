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

// let person; // default = any
let person: { name: string, age: number }; // object type definition - kein =

person = {
    name: 'Chris',
    age: 41
};

// NOT storable - wrong type
// person = {
//     isEmployee: true
// };

let people: { name: string, age: number }[]; // Array of such objects
people.push(person);

// Type inference
let course = 'React - the complete guide';
// let course:string = 'React - the complete guide'; // Typ zusaetzlich redundant
// course=124; // nicht moeglich - course ist als string gesetzt


// union type - more than one type possible
let courseNameOrId: string | number = 'react - the complete...'
courseNameOrId = 124;
