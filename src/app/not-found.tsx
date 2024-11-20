import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link className="text-sky-400 underline text-4xl" href="/">Return Home</Link>
    </div>
  );
}
