# 🥚 Egg Breaker Clicker Game

This is a **Clicker game** where you need to break an egg, and as you do, you get to read random **Donald Trump quotes**! Built using [Next.js](https://nextjs.org).

---

## 🚀 Getting Started

To get started with the project, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

---

## 📝 Requirements

The application meets the following requirements:

### 🎨 Styling
- Has enough styling to make it feel like an **Alpha app**.

### 📄 Pages

- **Home page** (`/`)  
- **Static page** (`/about`)  
- **Dynamic page** (`/game`)  

### 🧩 Metadata

Each route has its own metadata with:
- Minimum of `title` and `description` tags.

Custom metadata is stored in `TemplateMetadata` and is applied to all pages. You can find it in `src/utils/metadata.ts`.

### 🖥️ Layouts

- **All layouts are server components**.
- **Root layout** contains the navigation, but for design purposes, the navigation is in the **Home page**. This can be changed if needed.

### 🔀 Nested Layouts

- The **/game** page is nested inside the **root layout**, and further nested inside the **game layout**.

### 👩‍💻 Client Component

- The **/game** page is a client component.

### 🔄 Server Component in Client Component

- The **/game** page renders a **server component** called `Egg`. You can find it in `src/components/app/game/egg/Egg.tsx`.

### 🔌 API Route

- Provides an API route: `/api/quotes`, which returns an array of **Donald Trump quotes**.

### 🌐 Fetches Server-side Data

- The **/game** page fetches server-side data from the **API route**.

---

## 📂 Project Structure

Here’s an overview of the main structure:

```bash
src/
├── app/
│   ├── about.tsx    # Static page
│   ├── game.tsx     # Dynamic page
│   └── index.tsx    # Home page
├── components/
│   ├── app/
│   │   ├── game/
│   │   │   ├── egg/    # Server component for the egg game
│   │   └── welcome/    
└── utils/
    └── metadata.ts  # TemplateMetadata for custom metadata

# Additional files and directories outside of src/
├── .next/           # Next.js build output directory
├── node_modules/    # Node.js modules directory
├── public/          # Public assets directory
│   └── egg-cracking.mp4  # Video asset
├── .gitignore       # Git ignore file
├── eslint.config.mjs # ESLint configuration file
├── next-env.d.ts    # TypeScript definitions for Next.js environment
├── next.config.js   # Next.js configuration file
├── package-lock.json # npm lock file
├── package.json     # npm package file
├── README.md        # Project documentation
└── tsconfig.json    # TypeScript configuration file
```

---

## 📈 Features

- **Interactive Gameplay:** Click to break the egg while reading random Donald Trump quotes.
- **Dynamic Quotes:** Quotes fetched dynamically from the API route.
- **Responsive Design:** The game and pages are styled to feel like a fully functional app.
- **Server-side Rendering:** Metadata and components are rendered server-side for improved performance and SEO.

---

## 🎮 Gameplay

- Break the egg with each click.
- Every 20 clicks, a random **Donald Trump quote** will appear.
- The game progresses with each click, unlocking more and more quotes.

---

## 📦 Quotes Library
The quotes are sourced from my [donald-quotes-trump](https://www.npmjs.com/package/donald-quotes-trump) npm package. 

## 🌍 Conclusion

This project combines fun gameplay with a touch of humor! By leveraging **Next.js** for server-side rendering and API routes, the game feels smooth and fast. Whether you’re looking to break eggs or enjoy a laugh, this game has it all!

---

Feel free to clone and contribute to the project! 😄
