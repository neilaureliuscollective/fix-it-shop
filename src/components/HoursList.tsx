"use client";

import { useSyncExternalStore } from "react";
import { hours } from "@/content/site";

function fmt(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hr = h % 12 || 12;
  return m ? `${hr}:${String(m).padStart(2, "0")}${suffix}` : `${hr}${suffix}`;
}

const noopSubscribe = () => () => {};
const todayInShopTime = () =>
  new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "America/Chicago" }).format(new Date());

export function HoursList() {
  // Highlight today in shop time (Central). Server snapshot is null, so nothing is highlighted until hydration.
  const today = useSyncExternalStore(noopSubscribe, todayInShopTime, () => null);

  return (
    <ul className="mt-4 divide-y divide-white/[0.06] border-y border-white/[0.06]">
      {hours.map((h) => {
        const isToday = h.day === today;
        return (
          <li key={h.day} className={`flex items-center justify-between py-4 ${isToday ? "text-stone" : "text-mist"}`}>
            <span className="flex items-center gap-3">
              <span className={`h-1.5 w-1.5 rounded-full ${isToday ? "bg-gold" : "bg-transparent"}`} />
              <span className="font-medium">{h.day}</span>
              {isToday && <span className="eyebrow !text-[0.55rem] text-gold">Today</span>}
            </span>
            <span className="tabular-nums">{h.open && h.close ? `${fmt(h.open)} – ${fmt(h.close)}` : h.note}</span>
          </li>
        );
      })}
    </ul>
  );
}
