export interface ILoginFormProps {
    classes: {
        field: string,
        errorBox: string,
    };
    fetchUserAuth(login: string, password: string): void;
    setShowError(show: boolean): void;
    isLoading: boolean,
    isAuth: boolean,
    showError: boolean,
}