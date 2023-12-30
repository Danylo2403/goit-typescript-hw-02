/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
// створення типу "Gender" з union type
type Gender = "male" | "female";
// створення myGender з типом Gender
const myGender: Gender = "male";

export {};
