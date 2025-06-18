"use client";

import { useEffect } from "react";

type NotesErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function NotesError({ error, reset }: NotesErrorProps) {
  useEffect(() => {
    console.error("Error in /notes route:", error);
  }, [error]);

  return (
    <div>
      <p>Could not fetch the list of notes. {error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

//lesson
/**"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div>
      <h2>Помилка при завантаженні</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Спробувати знову</button>
    </div>
  );
};

export default Error;*/
