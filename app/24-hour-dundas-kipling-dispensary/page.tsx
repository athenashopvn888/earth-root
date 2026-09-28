import type { Metadata } from "next"; import AuthorityLanding from "../components/AuthorityLanding"; import {AUTHORITY_PAGES} from "../lib/authorityPages";
export const metadata:Metadata={title:{absolute:"24 Hour Dispensary Dundas & Kipling, Etobicoke | EarthRoot Cannabis"},description:AUTHORITY_PAGES.hours.summary,alternates:{canonical:"/24-hour-dundas-kipling-dispensary"}};
export default function Page(){return <AuthorityLanding page={AUTHORITY_PAGES.hours}/>}
