"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { HOME_DELIVERY_HREF, HOME_MENU_HREF } from "../lib/homeDelivery";
import { FULL_NAME_NAP } from "../lib/fullNameNap";
import { storeHoursStatus } from "../lib/storeHoursStatus";
import styles from "./MobileBottomBar.module.css";

const HIDDEN_PATHS = new Set(["/tv", "/tv2"]);

/**
 * Mobile-only sticky actions. Directions uses this store's GBP pin.
 * Hours copy is computed in America/Toronto from the published opening hours.
 * Hidden on the in-store TV routes.
 */
export default function MobileBottomBar() {
  const pathname = usePathname();
  const hidden = HIDDEN_PATHS.has(pathname ?? "");
  const [status, setStatus] = useState(() => storeHoursStatus(new Date()));

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (hidden) root.setAttribute("data-hide-mobile-action-bar", "");
    else root.removeAttribute("data-hide-mobile-action-bar");
    return () => root.removeAttribute("data-hide-mobile-action-bar");
  }, [hidden]);

  useEffect(() => {
    if (hidden) return;
    const update = () => setStatus(storeHoursStatus(new Date()));
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, [hidden]);

  if (hidden) return null;

  return (
    <nav
      className={styles.bar}
      aria-label="Store actions"
      data-mobile-bottom-bar=""
      data-hours-kind={status.kind}
      suppressHydrationWarning
    >
      <a
        className={`${styles.action} ${styles.directions}`}
        href={FULL_NAME_NAP.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Directions
      </a>
      <Link className={`${styles.action} ${styles.hours}`} href="/hours">
        <span className={styles.srOnly}>Hours. </span>
        <span className={styles.hoursLabel} suppressHydrationWarning>
          {status.label}
        </span>
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href={HOME_MENU_HREF}>
        Menu
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href={HOME_DELIVERY_HREF}>
        Delivery
      </Link>
    </nav>
  );
}
