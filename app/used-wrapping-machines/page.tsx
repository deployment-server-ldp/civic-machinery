import UsedProductPage, { buildUsedMetadata } from "@/components/UsedProductPage";

export const metadata = buildUsedMetadata("used-wrapping-machines");

export default function Page() {
  return <UsedProductPage slug="used-wrapping-machines" />;
}
