import { useState } from "react";
import Button from "./Button";

function Modal({ children }) {
  const [closeBtn, setCloseBtn] = useState(false);

  const handleClose = function () {
    setCloseBtn(true);
  };
  return (
    <div
      onClick={handleClose}
      className={`relative ${
        closeBtn ? "hidden" : ""
      }  h-full w-full bg-black/20 `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2   gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-50 dark:text-gray-800"
      >
        <Button onClick={handleClose} type="modalCloseBtn">
          X
        </Button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
