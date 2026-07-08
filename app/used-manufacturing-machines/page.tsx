import UsedProductPage, { buildUsedMetadata } from "@/components/UsedProductPage";

export const metadata = buildUsedMetadata("used-manufacturing-machines");

export default function Page() {
  return <UsedProductPage slug="used-manufacturing-machines" />;
}
