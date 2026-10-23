import { NextResponse } from "next/server";
import { getCigaretteSnapshot } from "../../lib/cigaretteFeed";
import { getFleetContent } from "../../lib/fleetContent";
import { contentStatusPayload } from "../../lib/fleet/status";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Diagnostic only. cig.web follows the feed webOn flag (env hard-off still wins).
 * Website pages keep the static SHOW_CIGARETTES gate.
 */
export async function GET() {
  const [fleet, cig] = await Promise.all([getFleetContent(), getCigaretteSnapshot()]);
  return NextResponse.json(contentStatusPayload(fleet, {
    web: cig.web.show,
    tv: cig.tv.show,
    guides: cig.guides.show,
  }), { headers: { "Cache-Control": "no-store" } });
}
