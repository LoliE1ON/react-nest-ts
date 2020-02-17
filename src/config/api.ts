export const API = {
    host: "http://localhost:3001/",
    routes: {
        auth: {
            login: "auth/login",
            register: "auth/register",
            verifyToken: "auth/verifyToken"
        },
        blog: {
            create: "blog/create",
        },
        user: {
            get: "user/get",
        }
    }
}