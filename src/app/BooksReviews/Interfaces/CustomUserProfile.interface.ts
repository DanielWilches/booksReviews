export interface CustomUserProfile {
    id: number;
    identityUserId: number;
    name: string;
    lastName?: string;
    createdDate: Date;
    // Puedes agregar más campos personalizados aquí
}