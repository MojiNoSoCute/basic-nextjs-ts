//admin layout

import Header from '@/components/admin/Header'
import Footer from '@/components/admin/Footer'
import Sidebar from '@/components/admin/Sidebar'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="container mx-auto p-4 flex-grow">
            {children}
          </div>
        </div>
        <Footer />
    </>
  )
}
