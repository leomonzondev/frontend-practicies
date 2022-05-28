import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    // ...add more providers here
  ],
  jwt: {
    encryption: true
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt(token, account) {
      if (account?.accesToken) {
        token.accesToken = account.accessToken
      }
      return token
    },
    redirect: async (url, _baseUrl) => {
      if (url === '/perfil') {
        return Promise.resolve('/')
      }
      return Promise.resolve('/')
    }
  }
})


