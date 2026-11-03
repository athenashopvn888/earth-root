import type { Metadata } from "next"; import AuthorityLanding from "../components/AuthorityLanding"; import {AUTHORITY_PAGES} from "../lib/authorityPages";
export const metadata:Metadata={title:{absolute:"Dispensary Near Islington, Etobicoke | EarthRoot Cannabis"},description:AUTHORITY_PAGES.islington.summary,alternates:{canonical:"/dispensary-islington"}};
export default function Page(){return <AuthorityLanding page={AUTHORITY_PAGES.islington}/>}
