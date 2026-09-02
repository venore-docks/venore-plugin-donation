import type { OperationResult } from "@venore/plugin-sdk";
import type { DonationPixCode } from "../../contracts/types";

export type BuildDonationPixCodeInput = { amount?: number | null };
export type BuildDonationPixCodeResult = OperationResult<DonationPixCode>;
