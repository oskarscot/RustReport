"use client";

import {LiaFileAltSolid, LiaListAltSolid, LiaListSolid} from "react-icons/lia";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-900 p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white p-2 mb-4">Rust Report</h2>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md transition-all duration-200"
                        >
                            <LiaListAltSolid className="w-6 h-6"/>
                            My Reports
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md transition-all duration-200"
                        >
                            <LiaFileAltSolid className="w-6 h-6"/>
                            Create A Report
                        </a>
                    </li>
                    {/* Render this only for moderator */}
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md transition-all duration-200"
                        >
                            <LiaListSolid className="w-6 h-6"/>
                            Active Reports
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}