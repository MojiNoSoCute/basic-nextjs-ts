import ContactPage from './Contact'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us page",
}

export default function Contact() {
    return <ContactPage />
}