export interface Note {
  id: number;
  title: string;
  content: string;
  tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
  createdAt?: string; // ISO-рядок зробимо необов’язковим, якщо може бути відсутній
  updatedAt?: string; // зробимо необов’язковим, якщо може бути відсутній
}
