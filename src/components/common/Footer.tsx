import { constant } from "../../config/constant";


export default function Footer() {
  return (
    <footer className="w-full border-t py-6">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <p className="text-sm text-muted-foreground">
       {constant.FOOTER.CRED}
      </p>
      <nav className="flex gap-4">
        <a href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">{constant.FOOTER.TERMS}</a>
        <a href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">{constant.FOOTER.PRIVACRY}</a>
        <a href="/contact" className="text-sm text-muted-foreground hover:underline underline-offset-4">{constant.FOOTER.CONTACT}</a>
      </nav>
    </div>
  </footer>
  )
}
