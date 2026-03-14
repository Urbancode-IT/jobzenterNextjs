
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on Render (database connection)

If the contact form shows "Database connection failed" after deploy:

1. **Use Render PostgreSQL**  
   In Render Dashboard: create a **PostgreSQL** database (or use an existing one).

2. **Set one variable on the Web Service**  
   In your **Web Service** → **Environment**:
   - Add **`DATABASE_URL`** and paste the **Internal Database URL** from your Postgres service (Info tab).  
   Do not use the External URL from the same datacenter; use **Internal**.

3. **Redeploy**  
   After saving Environment, click **Manual Deploy** (or push a commit) so the new variable is applied.

4. **Run migrations**  
   In Render: Postgres service → **Shell** (or connect with psql), then run the SQL from `database/migrations/001_initial.sql` and `002_contact_messages.sql` so the `enquiries` and `contact_messages` tables exist.

5. **Test**  
   Open `https://yourservice.onrender.com/api/health`. You should see `"db": "connected"`. Then try the Reach Us form.

If you use your own database (not Render Postgres), set `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` in Environment and ensure the database is reachable from the internet and allows SSL (the app enables SSL for non-localhost).
