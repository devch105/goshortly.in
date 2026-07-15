import { OctagonX } from "lucide-react";
const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-hidden bg-black/40 backdrop-blur-sm ">
      <div className="relative p-4 w-full max-w-2xl max-h-[90vh]">
        {/* Modal header */}
        <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100">
          {/* modal content */}
          <div className="flex items-center justify-between p-5 md:p-6 border border-gray-100 rounded-t-xl">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

            <button
              type="button"
              onClick={onClose}
              className="text-red-500 bg-red-100 hover:bg-red-200  rounded-full text-sm w-9 h-9 flex items-center transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <OctagonX className="w-10 h-10" size={10} />
            </button>
          </div>

          {/* modal body */}
          <div className="p-5 md:p-6 text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
