#### # 📝 NoteHub

NoteHub is a multi-page application for creating, viewing, and managing notes. Built using **Next.js App Router**, **TypeScript**, **React Query (TanStack)**, **Axios**, and **CSS Modules**.

![NoteHub Screenshot](https://github.com/Ded-Goit/06-notehub-nextjs/blob/main/public/note_hub.png)

## 🚀 Features

- 🔍 Search notes
- 🧠 View details (SSR/CSR)
- ➕ Create and edit notes
- 🗑️ Delete notes
- 🌐 Built with Server-Side Rendering (SSR) support
- 📦 Caching and state via **TanStack Query**

## 🗂 Project structure

06-notehub-nextjs/
├── app/ # App Router (pages, layout)
├── components/ # All UI components
├── lib/ # API queries
├── types/ # TypeScript types
├── public/ # Statics
├── styles/ # CSS
├── next.config.ts # Next.js configuration
├── package.json # Dependencies
└── tsconfig.json # TypeScript configuration

## ⚙️ Technologies

- [Next.js 14+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

📁 Examples
Page URL
Home /
Notes /notes
Note details /notes/[id]

🙌 Author
👤 Andriy Romanov
GitHub @Ded-Goit

📄 License
This project is licensed under the MIT License.


