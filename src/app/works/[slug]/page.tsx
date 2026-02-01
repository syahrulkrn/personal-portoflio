import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import WorkDetailClient from "./WorkDetailClient";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {
      title: "Project Not Found | Syahrul Kurniawan",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription || `Learn more about the ${project.title} project by Syahrul Kurniawan.`,
    openGraph: {
      title: `${project.title} | Syahrul Kurniawan`,
      description: project.shortDescription || `Learn more about the ${project.title} project by Syahrul Kurniawan.`,
      type: "article",
      images: project.heroImage ? [project.heroImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Syahrul Kurniawan`,
      description: project.shortDescription || `Learn more about the ${project.title} project by Syahrul Kurniawan.`,
      images: project.heroImage ? [project.heroImage] : [],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return notFound();
  }

  return <WorkDetailClient project={project} />;
}
