import './globals.css'
import DefaultLayout from 'layouts/default'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <DefaultLayout>
      {children}
        </DefaultLayout>
        
      </body>
    </html>
  )
}
