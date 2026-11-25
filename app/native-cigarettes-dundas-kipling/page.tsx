import { getCigaretteSnapshot, toPublicCigaretteState } from "../lib/cigaretteFeed";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES, publicAuthorityPage } from "../lib/authorityPages";
export const metadata:Metadata={title:{absolute:"Native Cigarettes Dundas & Kipling, Etobicoke | EarthRoot Cannabis"},description:AUTHORITY_PAGES.cigarettes.summary,alternates:{canonical:"/native-cigarettes-dundas-kipling"}};

export const dynamic = "force-dynamic";

export default async function Page() {
  if (!toPublicCigaretteState(await getCigaretteSnapshot()).web) redirect("/items/vapes");
  const page = publicAuthorityPage("cigarettes");
  if (!page) redirect("/items/vapes");
  return <AuthorityLanding page={page} />;
}
