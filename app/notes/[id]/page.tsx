import NoteDetailsClient from "@/components/NoteDetails/NoteDetails.client";
import { fetchNoteById } from "@/lib/api";
import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";

// ЦЕ ГОЛОВНЕ — правильна типізація
type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Note ${params.id}`,
  };
}

export default async function NoteDetailsPage({ params }: PageProps) {
  const id = Number(params.id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}