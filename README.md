# مزرعتي الذكية — Ghaly
Next.js + Supabase + Vercel، واجهة عربية RTL.

## إعداد Supabase
1. افتح SQL Editor في مشروع Supabase.
2. نفّذ الملف `supabase/schema.sql`.
3. أنشئ مستخدمين من Authentication > Users.
4. أضف سجلاً في `profiles` لكل مستخدم، مع role=`manager` للمدير و`supervisor` للمشرف.

## تشغيل محلي
انسخ `.env.example` إلى `.env.local` وضع بيانات Supabase، ثم:
`npm install`
`npm run dev`

## Vercel
استورد مستودع GitHub وأضف متغيري البيئة:
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
