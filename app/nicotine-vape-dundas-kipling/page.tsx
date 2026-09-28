import type { Metadata } from "next"; import AuthorityLanding from "../components/AuthorityLanding"; import {AUTHORITY_PAGES} from "../lib/authorityPages";
export const metadata:Metadata={title:{absolute:"Nicotine Vapes & Pods Dundas & Kipling, Etobicoke | EarthRoot Cannabis"},description:AUTHORITY_PAGES.vape.summary,alternates:{canonical:"/nicotine-vape-dundas-kipling"}};
export default function Page(){return <AuthorityLanding page={AUTHORITY_PAGES.vape}/>}
