export interface ModelResult<T> {
    code: number;
    message: string;
    isSuccess: boolean;
    data?: T[];
    token?: string;
}
