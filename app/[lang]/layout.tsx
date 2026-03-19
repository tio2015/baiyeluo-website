import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default async function LangLayout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: string }> }) {
  await params; // Next.js 15 requires awaiting params
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
