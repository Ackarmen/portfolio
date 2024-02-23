import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className=" group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-yellow-400 text-black rounded-xl outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-yellow-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 borderBlack"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-xl border-b-2 border-white"></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
