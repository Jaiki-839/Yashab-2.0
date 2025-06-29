import "./globals.css"

export const metadata = {
  title: "to Yashab Bhai",
  description: "to special Person",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
