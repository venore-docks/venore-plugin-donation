import type { BlockDefinition } from "@venore/plugin-sdk/cms";
import { donationsPixWidgetBlockDefinition } from "./donations-pix-widget";
import { donationsPixTeaserBlockDefinition } from "./donations-pix-teaser";

export const blockDefinitions: BlockDefinition[] = [donationsPixWidgetBlockDefinition, donationsPixTeaserBlockDefinition];
