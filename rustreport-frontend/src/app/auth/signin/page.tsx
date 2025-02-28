"use client";

import { signIn } from "next-auth/react";
import {LiaSteam} from "react-icons/lia";

export default function SignIn() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-bold text-white mb-4 text-center">
                    RustReport
                </h1>
                <button
                    onClick={() => signIn("steam", { callbackUrl: "/" })}
                    className="w-full bg-gray-700 text-white py-3 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
                >
                    <LiaSteam className="w-10 h-10"/>
                    Sign in with Steam
                </button>
            </div>
        </div>
    );
}