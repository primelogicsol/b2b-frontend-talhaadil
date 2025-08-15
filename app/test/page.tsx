'use client'
import React, { useState } from "react";
import { getDocumentStatus, getVerificationStatus } from "@/services/regitsration";// adjust the path if needed

const TestDocumentStatus: React.FC = () => {
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getVerificationStatus();
      console.log(response.data)
      setStatus(response.data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

 return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold mb-10 text-blue-900">Document Status Checker</h1>

      <button
        onClick={handleClick}
        className="text-2xl font-semibold px-10 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Get Document Status
      </button>

      {loading && (
        <p className="mt-8 text-xl font-medium text-gray-700 animate-pulse">Loading...</p>
      )}

      {error && (
        <p className="mt-8 text-xl font-medium text-red-600">{error}</p>
      )}

      {status && (
        <div className="mt-10 w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8 overflow-x-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">API Response:</h2>
          <pre className="text-lg text-gray-800">{JSON.stringify(status, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TestDocumentStatus;
