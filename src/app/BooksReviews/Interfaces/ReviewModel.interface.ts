import { UserModel } from "./UserModel.interfaces";

export interface ReviewModel {
    id: number;
    userId: number;
    bookId: number;
    rating: number; // 1 a 5
    reviewText?: string;
    createdDate: Date;
    modifiedDate?: Date;
    // Relaciones opcionales (puedes definir interfaces UserModel y BookModel si las necesitas)
    user?: UserModel;
    book?: any;
}
