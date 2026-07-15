import { useState } from "react";
import toast from "react-hot-toast";
import { FaLink } from "react-icons/fa";
import { HiOutlineQrCode } from "react-icons/hi2";
import { API_BASE_URL, URLS } from "../utils/apiEndpoints";
import privateApi from "../utils/privateApi";
import Input from "./Input";
import QRCodeModal from "./QRCodeModal";

const CreateShortUrl = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortCode, setShortCode] = useState("");

  const [loading, setLoading] = useState(false);
  const [qrLoading, setQrLoading] = useState(false);

  const [qrImage, setQrImage] = useState(null);
  const [showQRModal, setShowQRModal] = useState(false);

  const handleCreateUrl = async () => {
    if (!url.trim()) {
      toast.error("Please enter a URL");
      return;
    }

    setLoading(true);

    try {
      const response = await privateApi.post(URLS.CREATE, {
        originalUrl: url,
      });

      if (response.status === 200) {
        const code = response.data.shortUrl;

        setShortCode(code);

        const finalUrl = `${API_BASE_URL}/${code}`;
        setShortUrl(finalUrl);

        // Reset old QR
        setQrImage(null);
        setShowQRModal(false);

        toast.success("Short URL created successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create short URL");
    } finally {
      setLoading(false);
    }
  };

  const handleQRGenerate = async () => {
    if (!shortCode) {
      toast.error("Generate a short URL first");
      return;
    }

    setQrLoading(true);

    try {
      const response = await privateApi.get(`/qr/${shortCode}`, {
        responseType: "blob",
        headers: {
          Accept: "image/png",
        },
      });

      if (response.status === 200) {
        const imageUrl = URL.createObjectURL(response.data);

        setQrImage(imageUrl);
        setShowQRModal(true);

        toast.success("QR Code generated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate QR Code");
    } finally {
      setQrLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Copy failed");
    }
  };

  const downloadQRCode = () => {
    if (!qrImage) return;

    const link = document.createElement("a");
    link.href = qrImage;
    link.download = `${shortCode}-qr-code.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="card  rounded-xl  bg-white p-4 shadow-sm sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-xl font-semibold text-slate-800">
            Create Short URL
          </h4>

          <button
            onClick={handleCreateUrl}
            disabled={loading}
            className="card-btn bg-slate-50 text-indigo-700 w-full sm:w-auto"
          >
            {loading ? (
              "Creating..."
            ) : (
              <>
                Generate <FaLink />
              </>
            )}
          </button>
        </div>

        {/* Input */}
        <div className="mt-6">
          <Input
            label="Long URL"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your original long URL"
          />
        </div>

        {/* Generated URL */}
        {shortUrl && (
          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-3 text-sm font-semibold text-blue-600">
              Short URL Generated Successfully
            </p>

            <div className="flex flex-col gap-4">
              <input
                readOnly
                value={shortUrl}
                className="w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none"
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={copyToClipboard}
                  className="card-btn flex-1 bg-blue-600 text-white"
                >
                  Copy
                </button>

                <button
                  onClick={handleQRGenerate}
                  disabled={qrLoading}
                  className="card-btn flex-1 bg-emerald-100 text-emerald-700"
                >
                  {qrLoading ? (
                    "Generating..."
                  ) : (
                    <>
                      QR Code <HiOutlineQrCode />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {setShowQRModal && (
          <QRCodeModal
            isOpen={showQRModal}
            onClose={() => setShowQRModal(false)}
            qrImage={qrImage}
            shortUrl={shortUrl}
            onDownload={downloadQRCode}
          />
        )}
      </div>
    </>
  );
};

export default CreateShortUrl;

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { FaLink } from "react-icons/fa";
// import { HiOutlineDownload } from "react-icons/hi";
// import { HiOutlineQrCode } from "react-icons/hi2";
// import { API_BASE_URL, URLS } from "../utils/apiEndpoints";
// import privateApi from "../utils/privateApi";
// import Input from "./Input";

// const CreateShortUrl = () => {
//   const [url, setUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [shortCode, setShortCode] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [qrLoading, setQrLoading] = useState(false);

//   const [qrImage, setQrImage] = useState(null);
//   const [showQR, setShowQR] = useState(false);

//   useEffect(() => {
//     if (qrImage) {
//       console.log("QR Image:", qrImage);
//     }
//   }, [qrImage]);

//   const handleCreateUrl = async () => {
//     if (!url.trim()) {
//       toast.error("Please enter a URL");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await privateApi.post(URLS.CREATE, {
//         originalUrl: url,
//       });

//       if (response.status === 200) {
//         const code = response.data.shortUrl;

//         setShortCode(code);

//         const finalUrl = `${API_BASE_URL}/${code}`;

//         setShortUrl(finalUrl);

//         // Reset previous QR
//         setShowQR(false);
//         setQrImage(null);

//         toast.success("Short URL created successfully");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to create short URL");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleQRGenerate = async () => {
//     if (!shortCode) {
//       toast.error("Generate a short URL first");
//       return;
//     }

//     setQrLoading(true);

//     try {
//       const response = await privateApi.get(`/qr/${shortCode}`, {
//         responseType: "blob",
//         headers: {
//           Accept: "image/png",
//         },
//       });

//       console.log(response);
//       console.log(response.data);
//       console.log(response.headers["content-type"]);

//       if (response.status === 200) {
//         const imageUrl = URL.createObjectURL(response.data);

//         setQrImage(imageUrl);
//         setShowQR(true);

//         toast.success("QR Code generated successfully");
//       }
//     } catch (error) {
//       700;
//       console.error(error);
//       toast.error("Failed to generate QR Code");
//     } finally {
//       setQrLoading(false);
//     }
//   };

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(shortUrl);
//       toast.success("Copied to clipboard");
//     } catch (error) {
//       toast.error("Copy failed");
//     }
//   };

//   const downloadQRCode = () => {
//     if (!qrImage) {
//       return;
//     }
//     const link = document.createElement("a");
//     link.href = qrImage;
//     link.download = `${shortCode + "qr-code"}.png`;

//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6 lg:p-8">
//       {/* Header */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <h4 className="text-xl font-semibold text-slate-800">
//           Create Short URL
//         </h4>

//         <button
//           onClick={handleCreateUrl}
//           className="card-btn w-32  text-center text-emerald-700 bg-emerald-200 sm:w-auto"
//         >
//           {loading ? (
//             "Creating..."
//           ) : (
//             <>
//               Generate <FaLink />
//             </>
//           )}
//         </button>
//       </div>

//       {/* Input */}
//       <div className="mt-6">
//         <Input
//           label="Long URL"
//           type="text"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Enter your original long URL"
//         />
//       </div>

//       {/* Generated URL */}
//       {shortUrl && (
//         <div className="mt-6 rounded-xl border border-blue-300 bg-blue-50/30 p-4">
//           <p className="mb-3 text-sm font-semibold text-blue-600">
//             Short URL Generated
//           </p>

//           <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
//             <input
//               readOnly
//               value={shortUrl}
//               className="w-full flex-1 rounded-lg border bg-white px-3 py-2 outline-none"
//             />

//             <div className="flex flex-col gap-2 sm:flex-row">
//               <button
//                 onClick={copyToClipboard}
//                 className="card-btn w-32 text-center bg-blue-500 text-white sm:w-auto"
//               >
//                 Copy
//               </button>

//               <button
//                 onClick={handleQRGenerate}
//                 className="card-btn w-32 text-center bg-emerald-50 sm:w-auto"
//               >
//                 {qrLoading ? (
//                   "Generating..."
//                 ) : (
//                   <>
//                     QR <HiOutlineQrCode />
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* QR */}
//       {showQR && (
//         <div className="mt-8 flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-6">
//           <img
//             src={qrImage}
//             alt="QR Code"
//             className="w-full max-w-[280px] rounded-xl border bg-white p-3 shadow-sm sm:max-w-[320px]"
//           />

//           <div className="mt-5 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
//             <h4 className="text-center text-sm font-semibold text-slate-700 sm:text-base">
//               Scan your QR Code
//             </h4>

//             <button
//               onClick={downloadQRCode}
//               className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md sm:w-auto"
//             >
//               <HiOutlineDownload size={18} />
//               Download
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateShortUrl;
