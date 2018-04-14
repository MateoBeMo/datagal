export class User {
    username: string;
    email: string;
    password?: string;
    role: string;
}
export class UserResponse {
    docs: User[]; // array of Posts
    total: number;  // the total number of Posts
    limit: number;   // the number of Posts returned per page
    page: number;   // the current page of Posts returned
    pages: number;
}
