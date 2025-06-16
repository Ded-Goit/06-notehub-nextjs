import NoteDetailsClient from "@/components/NoteDetails/NoteDetails.client";
import { fetchNoteById } from "@/lib/api";
import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";

export default async function NoteDetailsPage({ params }: { params: { id: string } }) {
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