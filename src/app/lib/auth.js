
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log(credentials);
                const user = { id: "1", name: "Admin", email: "admin@admin.com" };
                return user;
            },
        }),
    ],
};

module.exports = authOptions;
