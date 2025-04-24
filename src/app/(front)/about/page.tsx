import AboutPage from "./About"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "About us page",
}

export default function About() {
  return <AboutPage />
}