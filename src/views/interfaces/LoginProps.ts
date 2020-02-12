export interface ILoginProps {
    isLoading: boolean,
    isAuth: boolean,
    showError: boolean,
    fetchUserAuth(login: string, password: string): void,
    setShowError(show: boolean): void,
}