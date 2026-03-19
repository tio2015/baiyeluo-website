import { languages, Lang } from "@/lib/translations";
import LangHomeClient from "@/components/LangHomeClient";

export function generateStaticParams() {
  return languages
    .filter((l) => l.code !== "zh")
    .map((l) => ({ lang: l.code }));
}

export default async function LangHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <LangHomeClient lang={lang} />;
}
