interface Book {
    name: string;
    author: string;
    price: number;
    isAvailable: boolean;
    version: number;
}
declare function showBookDetails(book: Book): void;
