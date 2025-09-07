# Full Stack NextGen Car Market - TestRyde.ai with Next JS, Supabase, Tailwind, Prisma, ArcJet, Shadcn UI 

TestRyde.ai is an AI-powered web platform designed to transform how people search for and experience cars. It offers features such as:

• AI-driven car listings and search, helping customers find the right vehicle with precision.

• Smart price prediction models, providing accurate and fair price insights.

• One-click test drive booking on any device, making the process simple and seamless.

The platform ensures that customers can explore, compare, and experience a wide variety of vehicles before making their purchase decision—essentially allowing them to "taste" their dream car first.

On the other side, it also supports sponsorship sellers and dealerships, giving them a dedicated space to showcase their vehicles. This creates an interactive and convenient bridge between sellers and buyers, with test drive bookings happening instantly through the platform.

In short, TestRyde.ai aims to provide an uninterrupted, AI-driven car marketplace where technology meets customer experience, ensuring people find and enjoy the perfect vehicle for their needs.

## ⚙️ Tech Stack Used:
For this project, I have worked with a modern and powerful tech stack, including:

• ⚡ Next.js – Frontend & Full-Stack Framework
• 🔑 Clerk – Real-Time Authentication
• 🗄️ Supabase – Database & Backend Services
• 🔗 Prisma – ORM for Efficient Data Handling
• 🛡️ ArcJet – Security & Protection
• 🎨 TailwindCSS – Styling & Responsive Design
• 🖌️ Shadcn UI – Custom Components & UI Enhancements
• 🤖 Google DeepMind – AI-Powered Intelligence


## Getting Started

1. Clone the repository
2. Install dependencies:

```shell
npm install 
```

3. Set up your .env file:
```js
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="give your own api key"

CLERK_SECRET_KEY="give your own api key"


# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Gemini AI 
GEMINI_API_KEY="give your own api key"

# Supabase Database
# Connect to Supabase via connection pooling
DATABASE_URL= "give your own url"

# Direct connection to the database. Used for migrations
DIRECT_URL= "give your own url"

NEXT_PUBLIC_SUPABASE_URL= https://your_own_url.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY= "give your own url"

# Arcjet Security
ARCJET_KEY = "give your own api key"
```



4. Run the development server:

```shell
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This application can be easily deployed to Vercel:

```shell
npm run build
npm run start
```


## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Gemini AI Documentation](https://ai.google.dev/gemini-api)
