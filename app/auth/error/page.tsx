import Link from 'next/link'

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6">
      <div className="w-full max-w-sm text-center">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6">
          <h1 className="text-2xl font-bold text-[var(--destructive)]">
            Authentication Error
          </h1>
          <p className="text-[var(--muted-foreground)] mt-2">
            There was a problem signing you in. Please try again.
          </p>
          <Link
            href="/auth/login"
            className="inline-block mt-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md px-4 py-2 font-medium hover:opacity-90 transition-opacity"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
