"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { logout } from "@/actions/logout";

export default function Home() {
    return (
<main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-12">
  <div className="bg-white shadow-md rounded-lg p-8 text-center">
    <h1 className="text-5xl font-bold">Welcome to the app!</h1>
    <p className="mt-6 text-lg text-gray-700">You are logged in as:</p>
    <div className="mt-4 text-xl font-semibold text-gray-900">
      {useCurrentUser()?.email || "Guest"}
    </div>

    <button
      className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      onClick={async () => {
        await logout();
        window.location.href = "/auth/login";
      }}
    >Logout</button>
  </div>
</main>
    );
}