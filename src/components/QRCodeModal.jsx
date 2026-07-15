import { Copy, Download, ExternalLink } from "lucide-react";
import toast from "react-hot-toast";
import Modal from "./Modal";

const QRCodeModal = ({ isOpen, onClose, qrImage, shortUrl, onDownload }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Failed to copy");
    }
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="QR Code">
      <div className="flex flex-col items-center">
        {/* QR Code */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <img
            src={qrImage}
            alt="QR Code"
            className="w-56 h-56 sm:w-64 sm:h-64 object-contain"
          />
        </div>

        {/* Short URL */}
        <div className="mt-6 w-full rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs text-slate-500 mb-1">Short URL</p>

          <p className="break-all text-sm font-medium text-slate-700">
            {shortUrl}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          <button
            onClick={copyToClipboard}
            className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
          >
            <Copy size={18} />
            Copy
          </button>

          <button
            onClick={() => window.open(shortUrl, "_blank")}
            className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
          >
            <ExternalLink size={18} />
            Open
          </button>

          <button
            onClick={onDownload}
            className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            <Download size={18} />
            Download
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default QRCodeModal;
