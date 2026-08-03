import { UploadCloud, FileText, Image, X } from "lucide-react";
import { useState } from "react";

const UploadFiles = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setFiles([...e.target.files]);
  };

  return (
    <div>

      <h1 className="text-4xl font-bold text-white">
        Upload Project Files
      </h1>

      <p className="mt-2 text-gray-400">
        Upload your brand assets, references and project requirements.
      </p>

      {/* Upload Box */}

      <div className="mt-10 rounded-3xl border-2 border-dashed border-violet-500/40 bg-white/5 p-12 text-center">

        <UploadCloud
          size={70}
          className="mx-auto text-violet-400"
        />

        <h2 className="mt-5 text-2xl font-semibold">
          Drag & Drop Files Here
        </h2>

        <p className="mt-3 text-gray-400">
          PNG, JPG, PDF, PSD, AI, SVG, ZIP
        </p>

        <label className="mt-8 inline-block cursor-pointer rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-700">

          Browse Files

          <input
            type="file"
            multiple
            hidden
            onChange={handleChange}
          />

        </label>

      </div>

      {/* Uploaded Files */}

      {files.length > 0 && (

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Uploaded Files
          </h2>

          <div className="space-y-4">

            {files.map((file, index) => (

              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-black/30 p-4"
              >

                <div className="flex items-center gap-4">

                  {file.type.includes("image") ? (
                    <Image className="text-violet-400" />
                  ) : (
                    <FileText className="text-blue-400" />
                  )}

                  <div>

                    <h3 className="font-semibold">
                      {file.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>

                  </div>

                </div>

                <button>

                  <X className="text-red-400 hover:text-red-500" />

                </button>

              </div>

            ))}

          </div>

          <button
            className="mt-8 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3 font-semibold hover:opacity-90"
          >
            Upload to Project
          </button>

        </div>

      )}

    </div>
  );
};

export default UploadFiles;