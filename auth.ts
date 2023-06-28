import NextAuth, { type DefaultSession } from 'next-auth';
import GitHub from 'next-auth/providers/github';

declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's id. */
      id: string;
    } & DefaultSession['user'];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental,
} = NextAuth({
  providers: [GitHub],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token, profile }) => {
      // console.log('jwt', { token, profile });
      if (profile) {
        token.id = profile.id;
        token.image = profile.picture;
      }
      return token;
    },
    // Session or sign in should allow us to add properties to the session object.
    // when updating to a stable version of auth, try this again.
    // async session({ session, token }) {
    //   console.log('session', { session, token });
    //   // Send properties to the client, like an access_token and user id from a provider.
    //   session.user.image = token.picture;
    //   return session;
    // },
    // // @TODO
    // // authorized({ request, auth }) {
    // //   return !!auth?.user
    // // }
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log('signIn', { user, account, profile, email, credentials });
    //   return true;
    // },
  },
  pages: {
    signIn: '/sign-in',
  },
});
