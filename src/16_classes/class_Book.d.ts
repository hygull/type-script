declare class Book {
    name: string;
    price: number;
    pages: number;
    constructor(bookName: string, bookPrice: number, bookPages: number);
    getBookDetails(): void;
}
declare function main(): void;
