import type { BreadcrumbSegmentDefinition } from "@venore/plugin-sdk";
import { staticBreadcrumbSegment } from "@venore/plugin-sdk";

export const donationsBreadcrumbSegments: BreadcrumbSegmentDefinition[] = [
  staticBreadcrumbSegment({ key: "donations.public", segments: ["donations"], label: "Doações" }),
  staticBreadcrumbSegment({ key: "donations.admin", segments: ["admin", "donations"], label: "Doações" }),
];
