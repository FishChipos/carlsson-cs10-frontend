import { CookiesProvider } from 'next-client-cookies/server'

import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={`h-full antialiased`}
        >
            <CookiesProvider>
                <body className="min-h-full flex flex-col justify-center items-center">{children}</body>
            </CookiesProvider>
        </html>
    )
}
