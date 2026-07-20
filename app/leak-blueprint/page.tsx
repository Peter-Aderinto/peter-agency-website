import { permanentRedirect } from "next/navigation";

export default function LegacyLeakBlueprintPage() {
  permanentRedirect("/growth-plan");
}
