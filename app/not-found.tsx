import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-neutral-950 hero-bg">
      <div className="text-center">
        <div className="font-display font-extrabold text-9xl text-brand-100 dark:text-brand-950 mb-4 select-none leading-none">404</div>
        <h1 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-3">Page Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs mx-auto text-sm">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-5 py-3 btn-primary text-sm font-semibold">
          Back to Homepage →
        </Link>
      </div>
    </div>
  );
}
