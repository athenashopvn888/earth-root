import type { Metadata } from "next"; import AuthorityLanding from "../components/AuthorityLanding"; import {AUTHORITY_PAGES} from "../lib/authorityPages";
export const metadata:Metadata={title:{absolute:"Weed Dispensary Dundas & Kipling, Etobicoke | EarthRoot Cannabis"},description:AUTHORITY_PAGES.geo.summary,alternates:{canonical:"/weed-dispensary-dundas-kipling"}};
export default function Page(){return <AuthorityLanding page={AUTHORITY_PAGES.geo}/>}
