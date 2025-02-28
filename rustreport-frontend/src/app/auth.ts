import type { AuthOptions } from 'next-auth'
import Steam, { STEAM_PROVIDER_ID } from 'next-auth-steam'
import type { NextRequest } from 'next/server'

export function getAuthOptions(req?: NextRequest): AuthOptions {
    return {
        providers: req
            ? [
                Steam(req, {
                    clientSecret: process.env.STEAM_SECRET!
                })
            ]
            : [],
        callbacks: {
            jwt({ token, account, profile }) {
                if (account?.provider === STEAM_PROVIDER_ID) {
                    token.steam = profile
                }

                return token
            },
            session({ session, token }) {
                if ('steam' in token) {
                    // @ts-expect-error
                    session.user.steam = token.steam
                }

                return session
            }
        },
        pages: {
            signIn: '/auth/signin'
        }
    }
}