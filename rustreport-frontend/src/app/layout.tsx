import './globals.css'

import SessionProvider from '@/components/session-provider'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'

export const metadata: Metadata = {
    title: 'RustReport',
    description: 'Rust Report Portal'
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerSession()
    return (
        <html lang="en">
            <body>
                <SessionProvider session={session}>{children}</SessionProvider>
            </body>
        </html>
    )
}