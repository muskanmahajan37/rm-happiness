import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  jwt: {
    signingKey: process.env.SINGIN_KEY
  },
  callbacks: {
    async signIn(user, account, profile) {
      console.log({ user, account, profile })
      if (
        account.provider === 'google' &&
        profile.verified_email === true &&
        (profile.email?.endsWith('@sanar.com') ||
          profile.email?.endsWith('@codengage.com'))
      ) {
        return true
      } else {
        return false
      }
    }
  }
})
