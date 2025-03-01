import { SteamProfile } from "next-auth-steam/lib/steam";

declare module "next-auth" {
    interface Session {
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            steam: SteamProfile;
        };
        accessToken?: string;
    }

    interface JWT {
        steam?: SteamProfile;
        accessToken?: string;
    }
}