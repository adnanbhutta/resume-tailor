import { createClient } from '@supabase/supabase-js';
import { MongoClient } from 'mongodb';

export const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export const mongo = new MongoClient(process.env.MONGO_URI!);
await mongo.connect();
export const db = mongo.db('resume_tailor');
export const resumes = db.collection('resumes');
