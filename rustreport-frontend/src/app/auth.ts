import type { AuthOptions } from "next-auth";
import Steam, { STEAM_PROVIDER_ID } from "next-auth-steam";
import type { NextRequest } from "next/server";
import { SteamProfile } from "next-auth-steam/lib/steam";
import jwt from "jsonwebtoken";

export function getAuthOptions(req?: NextRequest): AuthOptions {
    return {
        providers: req
            ? [
                Steam(req, {
                    clientSecret: process.env.STEAM_SECRET!,
                }),
            ]
            : [],
        secret: process.env.NEXTAUTH_SECRET,
        session: {
            strategy: "jwt",
        },
        callbacks: {
            async jwt({ token, account, profile }) {
                if (account?.provider === STEAM_PROVIDER_ID && profile) {
                    const steamProfile = profile as SteamProfile;
                    token.steam = steamProfile;
                    /* next-auth tokens are different to standard JWT tokens therefore we need to generate
                       one ourselves to use for our backend, steamId is sufficient to be able to fetch everything else
                       directly from database in spring.
                     */
                    token.accessToken = jwt.sign(
                        {
                            steamId: steamProfile.steamid,
                            sub: steamProfile.steamid,
                            iss: "rust-report",
                        },
                        process.env.NEXTAUTH_SECRET!,
                        { expiresIn: "24h" }
                    );
                    //TODO: temporary for development. REMOVE ME!!
                    console.log("Generated Access Token:", token.accessToken);
                }
                return token;
            },
            async session({ session, token }) {
                if ("steam" in token) {
                    session.user = {
                        ...session.user,
                        steam: token.steam as SteamProfile,
                    };
                    // @ts-ignore
                    session.accessToken = token.accessToken;
                }
                return session;
            },
        },
        pages: {
            signIn: "/auth/signin",
        },
    };
}