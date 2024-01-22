/* eslint-disable react/prop-types */
import { HiCheck } from "react-icons/hi";
import { Toast } from "flowbite-react";

export default function ToastMod({ message }) {
  return (
    <Toast className="absolute z-10 top-5 right-5 border border-yellow-300 bg-white">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-300 text-white dark:bg-cyan-800 dark:text-cyan-200">
        <HiCheck className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <Toast.Toggle />
    </Toast>
  );
}
