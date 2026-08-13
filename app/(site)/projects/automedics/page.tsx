import { redirect } from "next/navigation"
import { SITE_SLUGS } from "@/config/siteConfig"

// Legacy slug — redirect to new slug
export default function AutomedicsPage() {
  redirect(SITE_SLUGS.projectLinks.writedin)
}
