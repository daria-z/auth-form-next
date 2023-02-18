import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";


export default function Success() {
  const router = useRouter();
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen items-center flex justify-center"
    >
      <div className="bg-white md:rounded-lg font-latoRegular text-gray-700 p-16 md:max-w-1/2">
        <h1 className="text-3xl pb-4 font-latoBold">
          Thanks for the registration {router.query.name} ✨
        </h1>
        <p className="text-lg text-gray-500">
          We have sent you an email over at <b>{router.query.email}</b>. We will
          get back to you as soon as we can!
        </p>
      </div>
      <Confetti />
    </m.main>
  );
}
