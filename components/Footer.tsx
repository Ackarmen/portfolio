import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className='mb-4 px-4 text-center text-gray-500'>
        <small className='mb-2 text-xs'>
            {`Copyright © ${currentYear} | Portfolio - designed & code with ❤️ by Sofiane Lyafori`}
        </small>
        <p className='text-xs'><span className='font-semibold'>Build with:</span> React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend.</p>
    </footer>
  )
}
