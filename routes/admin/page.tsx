import { AdminAccessDenied } from "@venore/plugin-sdk/ui";
import { AdminPageHeader } from "@venore/plugin-sdk/ui";
import { getDonationSettings } from "../../index";
import { getPluginAdminPageData } from "@venore/plugin-sdk/admin";
import { DonationSettingsForm } from "./donation-settings-form";

export default async function DonationsAdminPage() {
  const gate = await getPluginAdminPageData("donations");

  if (!gate.granted) {
    return <AdminAccessDenied message="Você não tem permissão para configurar as doações." />;
  }

  const settingsResult = await getDonationSettings();
  if (!settingsResult.success) {
    return <p className="text-sm text-destructive">Erro ao carregar configuração: {settingsResult.error.message}</p>;
  }

  return (
    <div className="space-y-8">
      <AdminPageHeader
        title="Doações"
        description="Chave PIX estática usada para gerar o código de doação. Sem gateway de pagamento e sem confirmação automática — a conciliação é manual, pelo extrato bancário."
      />

      <DonationSettingsForm settings={settingsResult.data} />
    </div>
  );
}
