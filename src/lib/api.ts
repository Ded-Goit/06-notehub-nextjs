//old file
import axios from "axios";
import { Note } from "@/types/note";

const API_KEY = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface createNoteValues {
  title: string;
  content?: string;
  tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
}

interface SearchParams {
  page: number;
  perPage: number;
  search?: string;
}

axios.defaults.baseURL = `https://notehub-public.goit.study/api`;
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

export async function fetchNotes(
  search: string,
  page: number
): Promise<NotesResponse> {
  const perPage = 12;
  const params: SearchParams = { page, perPage };

  if (search) params.search = search;

  const res = await axios.get<NotesResponse>("/notes", {
    params,
  });

  return res.data;
}

export async function createNote({
  title,
  content,
  tag,
}: createNoteValues): Promise<Note> {
  const res = await axios.post<Note>("/notes", {
    title,
    content,
    tag,
  });

  return res.data;
}

export async function deleteNote(id: number): Promise<Note> {
  const res = await axios.delete<Note>(`/notes/${id}`);
  return res.data;
}

export async function getSingleNote(id: number): Promise<Note> {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
}
export type NoteListResponse = {
  notes: Note[];
  total: number;
};
export const getNotes = async () => {
  const res = await axios.get<NoteListResponse>("/notes");
  return res.data;
};

/**lesson */
/**import axios from "axios";

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

axios.defaults.baseURL = "https://next-docs-api.onrender.com";

export const getNotes = async () => {
  const res = await axios.get<NoteListResponse>("/notes");
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};*/
