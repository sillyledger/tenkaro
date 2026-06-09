import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Tenkaro',
  description: 'Domain monitoring made simple',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
