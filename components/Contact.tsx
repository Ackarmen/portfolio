'use client';

import { sendEmail } from '@/action/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import SectionHeading from './SectionHeading';
import SubmitBtn from './SubmitBtn';

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.4);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 dark:text-white/80">
        Please contact me directly at{' '}
        <a
          href="mailto:lyaforis@gmail.com"
          className="underline underline-offset-2 decoration-[#d6d0ff]"
        >
          lyaforis@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email send successfully !');
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100 transition-all"
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="min-h-52 max-h-96 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
