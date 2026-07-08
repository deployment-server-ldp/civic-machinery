import UsedProductPage, { buildUsedMetadata } from "@/components/UsedProductPage";

export const metadata = buildUsedMetadata("used-cigarette-filter-machinery");

export default function Page() {
  return <UsedProductPage slug="used-cigarette-filter-machinery" />;
}
