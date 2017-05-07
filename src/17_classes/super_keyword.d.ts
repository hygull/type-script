/**
    {
        "created_at" : "6 May 2017",
        "aim_of_script" : "Using super keyword (to call parent's method) in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
interface Food {
    food_type: string;
    food_weight: string;
    food_name: string;
}
declare class Father {
    supply(food: Food): void;
}
declare class Child extends Father {
    supply(food: Food): void;
}
declare function main(): void;
