export interface ILoginFormProps {
    classes: {
        field: string;
    };
    fetchUserAuth(login: string, password: string): void;
}