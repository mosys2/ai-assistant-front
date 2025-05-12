import api from '@/services/api';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        mobile: { label: "Mobile", type: "text" },
        code: { label: "OTP Code", type: "text" },
      },
      authorize: async (credentials, req) => {
        if (!credentials) return null;
        const { mobile, code } = credentials;
        try {
          const data = await api.checkOtp({ mobile, code }) as any;
            console.log("DARAAAA",data)
          if (data?.isSuccess) {
            return {
              id: data.data.id,
              accessToken: data.data.accessToken,
              refreshToken: data.data.refreshToken,
              mobile,
            };
          }
        } catch (error) {
          console.error("Auth error:", error);
        }
      
        return null;
      }
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, account }: { token: any; user?: any; account?: any }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.mobile = user.mobile;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user = {
        accessToken: token.accessToken as string,
        refreshToken: token.refreshToken as string,
        mobile: token.mobile as string,
      };
      return session;
    }
  },
  pages: {
    signIn: '/auth', // مسیر ورود شما
  }
});

export { handler as GET, handler as POST };
