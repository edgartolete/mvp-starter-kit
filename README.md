# Introduction

## What is MVP

The goal of this template is to create Minimum Viable Product(MVP) quickly with zero money cost.

An MVP (Minimum Viable Product) is the smallest, simplest version of your product that:
✔ Solves ONE core problem
✔ Delivers real value
✔ Can be used by real users
✔ Can be built quickly (days/weeks, not months)

It is NOT:

- A full product
- A perfect UI
- Complete features
- Production-grade system

It’s just enough to test:
“Will people actually use or pay for this?”

❌ What NOT to Include in an MVP

- Complex UI
- Notifications
- Admin panel
- Payments
- Multiple user roles (except if it necessary)
- Settings pages
- Multiple product modules
- Polished branding
- Fancy animations
- Mobile app
- Perfect performance

## The problem:

Creating an MVP can be time consuming and you may unnecessary spend money. When creating MVP, your mental focus should be on "Solving the ONE core problem", and not about the tech stack, authentication, infrastructure, etc.

## The solution:

Below tech stack can be deployed to a serverless providers that has a free tier. Remember that the goal of an MVP is to show to potential users if this project is worth paying for.

Development duration can be reduced to only 1-2 weeks.

If you attract enough users for you to decide to grow the project, You can move it to separate Frontend, Backend, Infra, or even totally different stack.

If the idea is not viable, you only lost 1-2 weeks of your time. You can then move-on to other problems

## Included Pages

- Signup, Login, Forgot Password, Reset Password, Dashboard

# Tech Stack

## Front-End:

- NextJS
- TailwindCSS
- Material UI
- Jotai
- React Query

## Backend:

- DrizzleORM
- BetterAuth
- Neon Postgres
- Cloudflare R2
- Resend

## Infra

- Clouflare / Vercel

# Environment Variables

```
DATABASE_URL=
BETTER_AUTH_URL=
BETTER_AUTH_SECRET=
```

# Development

First, run the development server:

```bash
pnpm dev
```

# Deploy

You can integrate your account with either Vercel, or Cloudflare workers.
