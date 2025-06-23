//old file
import axios from "axios";
import { Note } from "@/types/note";

// Перевірка токена
const API_KEY = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
if (!API_KEY) throw new Error("API token is not defined");

// Налаштування axios
axios.defaults.baseURL = `https://notehub-public.goit.study/api`;
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

// Відповідь з пагінацією
interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNoteValues {
  title: string;
  content?: string;
  tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
}

interface SearchParams {
  page: number;
  perPage: number;
  search?: string;
}

// Отримати нотатки
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

// Створити нотатку
export async function createNote({
  title,
  content,
  tag,
}: CreateNoteValues): Promise<Note> {
  const res = await axios.post<Note>("/notes", {
    title,
    content,
    tag,
  });

  return res.data;
}

// Видалити нотатку
export async function deleteNote(id: number): Promise<Note> {
  const res = await axios.delete<Note>(`/notes/${id}`);
  return res.data;
}

// отримання деталей однієї нотатки за її ідентифікатором
export async function fetchNoteById(id: number): Promise<Note> {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
}
