import { NextResponse } from "next/server";
import { SHOW_CIGARETTES } from "../../lib/siteConfig";
import { getFleetContent } from "../../lib/fleetContent";
import { contentStatusPayload } from "../../lib/fleet/status";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Diagnostic only. Cigarette flags follow the existing env switch.
 * /items/cigarettes and /cigarettes stay on the next.config redirects.
 */
export async function GET() {
  const fleet = await getFleetContent();
  const show = SHOW_CIGARETTES;
  return NextResponse.json(contentStatusPayload(fleet, {
    web: show,
    tv: show,
    guides: show,
  }), { headers: { "Cache-Control": "no-store" } });
}
