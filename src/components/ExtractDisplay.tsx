import type React from "react";
import { saveAs } from "file-saver";
import { extractText } from "../assets/documents/script-file";

const ExtractDisplay: React.FC = () => {
  const handleDownload = () => {
    const blob = new Blob([extractText], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "assin-manso-extract.txt");
  };
  return (
    <section className="relative bg-white ">
      {/* <div className="absolute inset-0 bg-[url('./transBg.png')] opacity-5 z-0"></div> */}
      <div className="z-20 flex flex-col md:flex-row h-full p-4 md:p-8">
        <div className="w-full md:w-1/3 pr-0 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Assin Manso: A Historical Overview
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Explore the rich history and cultural heritage of Assin Manso, a
            significant community in Ghana's Central Region. This extract
            provides insights into the origins, development, and social
            organization of the Assin people.
          </p>
          <p className="text-base text-gray-500">
            Scroll through the text on the right to delve into the fascinating
            story of Assin Manso, from its roots in the Asante Empire to its
            role in the transatlantic slave trade and beyond.
          </p>
          <button
            onClick={handleDownload}
            className="mt-4 px-4 py-2 bg-lime-500 text-white rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-opacity-50"
          >
            Download Document(.txt)
          </button>
        </div>
        <div className="w-full md:w-2/3 max-h-[100dvh] bg-white rounded-lg shadow-lg p-6 ">
          <div className="h-full overflow-y-auto pr-0 md:pr-4">
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
              {extractText.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtractDisplay;