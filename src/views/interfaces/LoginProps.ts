export interface ILoginProps {
    isLoading: boolean,
    isAuth: boolean,
    fetchUserAuth(login: string, password: string): void,
}