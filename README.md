# Next.js 15 - Template for Your Projects

This repository serves as a **template** for building modern web applications with [Next.js](https://nextjs.org/). It comes pre-configured with essential tools and systems, allowing you to focus on building your application without unnecessary dependencies.

## 🚀 Features

- **Authentication with Auth.js**: Fully functional user authentication system.
- **Email Management with Resend**: Easily send and manage emails in your application.
- **Validation with Zod**: Robust runtime validation and type inference for your data.
- **Database with Prisma and PostgreSQL**: ORM setup for efficient database management.
- **TypeScript**: Strongly typed development for better code quality and maintainability.
- **Shadcn/ui**: Pre-configured UI components styled with Tailwind CSS.

## 📂 Project Structure

This template follows a clear and modular structure to make it easy to navigate and extend.

```markdown
.
├── auth.config.ts        # Authentication configuration (providers..)
├── auth.ts
├── middleware.ts         # middleware for auth routes
├── routes.ts             # Setting up routes for auth
├── actions/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts
│   ├── auth/
│   │   ├── error/
│   │   ├── login/
│   │   ├── new-password/
│   │   ├── new-verification/
│   │   ├── register/
│   │   └── reset/
│   └── app/
├── components/
│   ├── auth/             # auth components
│   └── ui/               # shadcn/ui components
├── data/
├── hooks/
├── lib/
├── prisma/
├── public/
└── schemas/
```

## 🛠️ Installation and Setup

To start using this template, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ArtyomCZ/nextjs15.git
   cd nextjs15
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   DATABASE_URL=postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>
   RESEND_API_KEY=<YOUR_RESEND_API_KEY>
   NEXTAUTH_SECRET=<YOUR_NEXTAUTH_SECRET>
   ```

4. **Run database migrations**:
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## 📖 Learn More

Here are some resources to help you understand the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Auth.js Documentation](https://authjs.dev/)
- [Resend Documentation](https://resend.com/docs)
- [Zod Documentation](https://zod.dev/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🤝 Contributing

If you'd like to contribute to this project, fork the repository, make your changes, and submit a pull request. Contributions are welcome!