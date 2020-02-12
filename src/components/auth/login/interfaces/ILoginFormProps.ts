export interface ILoginFormProps {
    classes: {
        field: string,
        errorBox: string,
    };
    fetchUserAuth(login: string, password: string): void;
    isLoading: boolean,
    isAuth: boolean,
}