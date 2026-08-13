import { redirect } from "next/navigation"
import { SITE_SLUGS } from "@/config/siteConfig"

// Legacy slug — redirect to new slug
export default function IronAndOakPage() {
  redirect(SITE_SLUGS.projectLinks.mike)
}
