import UsedProductPage, { buildUsedMetadata } from "@/components/UsedProductPage";

export const metadata = buildUsedMetadata("used-tobacco-machinery");

export default function Page() {
  return <UsedProductPage slug="used-tobacco-machinery" />;
}
