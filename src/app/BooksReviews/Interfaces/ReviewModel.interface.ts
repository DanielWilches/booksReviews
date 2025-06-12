import { UserModel } from "./UserModel.interfaces";
import { BookModel } from "./BookModel.interface";

export interface ReviewModel {
    id?: number;
    userId: number;
    bookId: number;
    rating: number; // 1 a 5
    reviewText?: string;
    createdDate: Date;
    modifiedDate?: Date;
    user?: UserModel;
    book?: BookModel;
}
