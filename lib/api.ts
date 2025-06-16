//old file
import axios from "axios";
import { Note } from "@/types/note";

// Перевірка токена
const API_KEY = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
if (!API_KEY) throw new Error("API token is not defined");

// Налаштування axios
axios.defaults.baseURL = `https://notehub-public.goit.study/api`;
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

// Тип тегів — витягуємо з Note, щоб не дублювати
export type NoteTag = Note["tag"];

// Тип для створення нотатки — беремо з Note
export type CreateNoteValues = Omit<Note, "id" | "createdAt">;

// Відповідь з пагінацією
interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

// Отримати нотатки з пошуком і пагінацією
export async function fetchNotesWithSearch(
  search: string,
  page: number
): Promise<NotesResponse> {
  const params = {
    page,
    perPage: 12,
    ...(search ? { search } : {}),
  };

  const res = await axios.get<NotesResponse>("/notes", { params });
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

// Отримати одну нотатку
export async function getSingleNote(id: string): Promise<Note> {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
}

// Отримати всі нотатки без фільтрів (опційно)
export async function fetchAllNotes(): Promise<{
  notes: Note[];
  total: number;
}> {
  const res = await axios.get("/notes");
  return res.data;
}
// отримання деталей однієї нотатки за її ідентифікатором
export async function fetchNoteById(id: number): Promise<Note> {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
}