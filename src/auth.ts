import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { basePrisma } from "@/lib/prisma"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: PrismaAdapter(basePrisma),
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async signIn({ user }) {
      return user.email === process.env.AUTHORIZE_MAIL
    },
  },
})