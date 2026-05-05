import 'dotenv/config';
import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // We use the Direct URL here so the Build/Migration 
    // process can bypass the Supabase pooler.
    url: process.env.DIRECT_DATABASE_URL,
  },
});
