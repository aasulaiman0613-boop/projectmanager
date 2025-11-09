"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white dark:bg-slate-800 border rounded-md p-6 text-center shadow">
        <h1 className="text-2xl font-semibold mb-2">404 — Page Not Found</h1>
        <p className="text-sm text-muted mb-4">
          The page you requested wasn't found on the server.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/login">
            <a className="px-4 py-2 rounded-md bg-slate-900 text-white">Go to Login</a>
          </Link>
          <Link href="/dashboard">
            <a className="px-4 py-2 rounded-md border">Open Dashboard</a>
          </Link>
        </div>
        <p className="mt-4 text-xs text-muted">
          If you deployed this to Vercel, check your Deployment logs for build errors and ensure the project has a valid package.json with a build script.
        </p>
      </div>
    </div>
  );
}