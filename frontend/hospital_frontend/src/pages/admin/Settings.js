import React from 'react';

const Settings = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Ayarlar</h1>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Profil Bilgileri</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Kullanıcı Adı
                            </label>
                            <input 
                                type="text" 
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                                placeholder="admin"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                E-posta
                            </label>
                            <input 
                                type="email" 
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                                placeholder="admin@example.com"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Şifre Değiştir</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Mevcut Şifre
                            </label>
                            <input 
                                type="password" 
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Yeni Şifre
                            </label>
                            <input 
                                type="password" 
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Yeni Şifre (Tekrar)
                            </label>
                            <input 
                                type="password" 
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                        Değişiklikleri Kaydet
                    </button>
                    <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                        İptal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;