/**
    {
        "created_at" : "7 May 2017",
        "aim_of_script" : "Using inheritance in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
declare class Father {
    name: string;
    age: number;
    constructor(fname: string, fage: number);
    getDetails(): void;
}
declare class Child extends Father {
    isMarried: boolean;
    constructor(name: string, age: number, isMarried: boolean);
    getMaritalStatus(): void;
}
declare function main(): void;
