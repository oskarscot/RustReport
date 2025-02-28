"use client";

import { Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";
import { LiaUserCircleSolid } from "react-icons/lia";
import Image from "next/image";
import {SteamProfile} from "next-auth-steam/lib/steam";

export default function ProfileDropdown({ user }: { user: SteamProfile }) {
    return (
        <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-700 transition-all duration-200">
                {user.avatarfull ? (
                    <Image
                        src={user.avatarfull}
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                ) : (
                    <LiaUserCircleSolid className="w-8 h-8 text-gray-400" />
                )}
            </Menu.Button>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10">
                    <div className="px-4 py-2 text-gray-400 border-b border-gray-700">
                        {user.personaname || "User"}
                    </div>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                                className={`w-full text-left px-4 py-2 text-gray-300 ${
                                    active ? "bg-gray-700 text-white" : ""
                                }`}
                            >
                                Log Out
                            </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}