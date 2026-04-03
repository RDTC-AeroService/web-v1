# Frontend - Aero Services 🎨

Next.js frontend for the Aero Services platform (aviation staff, payroll, and training management).

## 📌 Overview

This app is built with Next.js App Router and TypeScript. It currently starts from the default starter UI and is ready to be extended with your product pages, API integrations, and role-based dashboards.

## 🛠️ Tech Stack

- Next.js `16`
- React `19`
- TypeScript
- Tailwind CSS `4` (via PostCSS)
- ESLint `9`

## ✅ Prerequisites

- Node.js `18+` (Node.js `20+` recommended)
- One package manager: `pnpm`

## ⚡ Getting Started

1. Go to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open `http://localhost:3001`.

### 🔁 Alternative Commands

```bash
# npm
npm install
npm run dev

# yarn
yarn
yarn dev
```

## 📜 Available Scripts

- `pnpm dev` - Run the app in development mode.
- `pnpm build` - Build the app for production.
- `pnpm start` - Start the production server (after `build`).
- `pnpm lint` - Run ESLint.

## 🔐 Environment Variables

Create `frontend/.env.local` for local environment configuration.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Notes:

- Use the `NEXT_PUBLIC_` prefix for variables that must be exposed to the browser.
- Keep secrets out of client-side variables.

## 🗂️ Project Structure

```text
frontend/
|- app/
|  |- globals.css
|  |- layout.tsx
|  `- page.tsx
|- public/
|- lib/
|- style/
|- eslint.config.mjs
|- next.config.ts
|- postcss.config.mjs
`- tsconfig.json
```

## 🧭 Next Steps

- Replace starter homepage content in `app/page.tsx`.
- Update metadata in `app/layout.tsx`.
- Add feature modules (auth, staff profiles, payroll, training).
- Connect frontend to backend APIs.

## 🚀 Deployment

Recommended platform: Vercel.

General flow:

1. Push repository to GitHub.
2. Import the project in Vercel.
3. Set required environment variables.
4. Deploy.

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add your feature"`
3. Push branch: `git push origin feature/your-feature`
4. Open a pull request.
