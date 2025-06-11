export interface UserModel {
    name: string;
    lastName: string;
    createdDate: Date;
    modifiedDate?: Date;
    refreshToken?: string;
    refreshTokenExpiryTime?: Date;
}
