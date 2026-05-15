## I deployed a fully working version using vercel here

Link: https://coding-assessment-6v0z7fkdr-clydexmarty09s-projects.vercel.app/

# Project setup

## Install dependencies

```bash
npm install
```

## Database setup

This app expects a PostgreSQL database.

Create a table named `results` with an `ANSWERS` JSON/JSONB column:

```sql
CREATE TABLE results (
  id SERIAL PRIMARY KEY,
  ANSWERS JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

Create a `.env.local` file in the project root:

```env
DB_URL=your_postgres_connection_string
```

The real `.env.local` file is not included for security reasons.

## Run the development server

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
