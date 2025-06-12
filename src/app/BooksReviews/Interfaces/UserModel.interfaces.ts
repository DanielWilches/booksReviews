export interface UserModel {
    id: number;
    name: string;
    lastName: string;
    createdDate: Date;
    modifiedDate?: Date;
    refreshToken?: string;
    refreshTokenExpiryTime?: Date;
}
