import { notFound } from "next/navigation";
import {
  getAuditIdBySlug,
  AUDIT_PRIVATE_LINKS,
  type AuditId,
} from "@/app/config/audit-tokens";
import { BenAuditContent } from "../ben/page";
import { ZachAuditContent } from "../zach/page";
import { ExampleAuditContent } from "../example/page";

type ExclusiveFor = { businessName: string };
type AuditContentProps = { exclusiveFor?: ExclusiveFor };

const AUDIT_CONTENT: Record<AuditId, React.ComponentType<AuditContentProps>> = {
  ben: BenAuditContent,
  zach: ZachAuditContent,
  example: ExampleAuditContent,
};

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const id = getAuditIdBySlug(slug);
  if (!id) return { title: "Audit Not Found" };
  const { businessName } = AUDIT_PRIVATE_LINKS[id];
  return {
    title: `${businessName} — Local Lead Leak Audit`,
    robots: "noindex, nofollow",
  };
}

export default async function AuditBySlugPage({ params }: PageProps) {
  const { slug } = await params;
  const id = getAuditIdBySlug(slug);
  if (!id) notFound();

  const { businessName } = AUDIT_PRIVATE_LINKS[id];
  const Content = AUDIT_CONTENT[id];

  return <Content exclusiveFor={{ businessName }} />;
}
