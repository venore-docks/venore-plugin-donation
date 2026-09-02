import type { PluginContributions } from "@venore/plugin-sdk";
import { donationsBreadcrumbSegments } from "./breadcrumbs";
import { blockDefinitions } from "./blocks/definitions";

// O que o donations contribui pro core. `blockDefinitions` é dado puro (serializável) e entra
// direto; `blockRenderers` puxa a árvore de componentes (que sobe até contexts/settings), então é
// um loader preguiçoso — só block-renderers.tsx do core o chama.
export const donationsContributions: PluginContributions = {
  breadcrumbSegments: donationsBreadcrumbSegments,
  blockDefinitions,
  blockRenderers: async () => (await import("./blocks/renderers")).blockRenderers,
};
