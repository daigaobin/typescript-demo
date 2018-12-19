/**
 * Created by daigb on 2018/10/15.
 */
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user: string = 'Tom';

let decLiteral: number = 6;

let isDone: boolean = false;

let list: Array<number> = [1, 2, 3];

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean


console.log(sayHello(user));