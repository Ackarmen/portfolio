export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-4 px-4 text-center dark:text-neutral-200">
      <small className="mb-2 text-sm">
        {`Copyright © ${currentYear} | Portfolio - build with 💛 by Sofiane Lyafori`}
      </small>
      <p className="text-sm">
        <span className="font-semibold">Build with:</span> React & Next.js,
        TypeScript, Tailwind CSS, Framer Motion, React Email & Resend. Deploy on
        Vercel.
      </p>
    </footer>
  );
}
