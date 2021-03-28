// boolean
let isBoolean: boolean;
isBoolean = true;
isBoolean = false;

// string
let word: string;
word = "word"; word = 'word'; word = `status is ${isBoolean}`;

// number
let number: number
number = 1; number = 1.1; number = 0o11;  number = 0xFFFFFFFF;

// Array
let items: string[];
items = ['flu', `Botafogo`, "fla"];

let numberItems: number[];
numberItems = [11, 2, 10];

let genericStringItems: Array<string>;
genericStringItems = ['flu', `Botafogo`, "fla"];

// tuple
let tupleItems: [string, number, boolean];
tupleItems = ["oi", 1, true];

// enum
enum values {
    "right" = "direita",
    "left" = "esquerda"
};
values.right;

// any - avoid to use
let anything: any;
anything = "oi"; anything = 1; anything = true;

// void - without return

let newFunction = (): void => console.log("flu");

// null | undefined - Used when create own types

let myType: string | undefined;
myType; myType = "oi";

// never - Never return values. Used in functions when there is throw with response

let errorFunction = (): never => { throw new Error(); };

// object - When is not a primitive type, is object

let objectValue: object
objectValue = {}; objectValue = []; objectValue = () => 1;

// typeinference

let newMessage = "olá";
// newMessage = 1; NÃO PERMITIDO POIS, POR INFERÊNCIA, O TIPO É STRING

import * as http from "http";

//passando o cursos sobre req e res, por exemplo, sabemos por inferência que se tratam de http.incomingMessage e http.serverResponse, respectivamente
http.createServer((req, res) => res.end("works")).listen(3000);

//union
const log = (value: string | undefined) => console.log(value);

// log(1); error
log(undefined);
log("flu");

//typealias
type logValue = string | undefined;

const newLog = (value: logValue) => console.log(value);

// log(1); error
log(undefined);
log("flu");

type videogame = "ps5"| "xbox" | "switch";

const getVideoGame = (videogame: videogame) => videogame;

// getVideoGame("gol"); erro
getVideoGame("ps5");
getVideoGame("xbox");
getVideoGame("switch");

