export interface BookModel {
    id: number;
    title: string;
    author: string;
    category: string;
    summary?: string;
    createdDate: Date;
    modifiedDate?: Date;
}
