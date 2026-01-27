import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // later → call API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg border">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Şifre Sıfırlama
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-posta
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresinizi girin"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Şifre Sıfırlama Bağlantısı Gönder
          </button>
        </form>

        {submitted && (
          <p className="text-center text-green-600 mt-4">
            Eğer e-posta sistemde kayıtlıysa, şifre sıfırlama bağlantısı gönderildi.
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

