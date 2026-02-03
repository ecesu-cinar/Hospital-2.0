import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginAuth } from '../../api/LoginApi'
import logo from '../../assets/logos/logo.png';
import { jwtDecode } from 'jwt-decode';


const AdminLogin = () => {
    const[credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials({
            ...credentials,              
            [e.target.name]: e.target.value  
        });
    };

    const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

        try{
            const response = await loginAuth(credentials);

            // Store tokens
            localStorage.setItem('access_token', response.access);
            localStorage.setItem('refresh_token', response.refresh);
            
            // Store user info (this comes from our custom serializer)
            localStorage.setItem('user', JSON.stringify(response.user));
            navigate('/admin/panel');
        }catch(error){
            setError(error.response?.data?.detail || 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
        } finally {
            setLoading(false);
        }

    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-xl rounded-2xl border-4 border-primary p-12 bg-white shadow-lg">
                <div className='flex items-center justify-center gap-4 mb-10'>
                    <img 
                        src={logo}
                        alt="Hastane Logosu" 
                        className="h-32 w-auto object-contain"
                    />

                    <div className="text-left">
                        <h2 className="text-3xl font-bold leading-tight text-gray-800">
                            Özel Akademi
                        </h2>
                        <h3 className="text-3xl font-bold leading-tight text-gray-700">
                            Cerrahi Tıp Merkezi
                        </h3>
                    </div>
                </div>

                <hr className="border-2 border-primary mb-10" />

                <h1 className="text-center text-2xl font-semibold mb-8 text-gray-800">
                    Yönetici Girişi
                </h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Kullanıcı Adı
                        </label>
                        <input
                            type='text'
                            name='username'
                            placeholder='Kullanıcı adınızı girin'
                            value={credentials.username}
                            onChange = {handleChange}
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Şifre
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder='Şifrenizi girin'
                                value={credentials.password}
                                onChange = {handleChange}
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors pr-12"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {showPassword ? (
                                    // Show this when password IS visible (so clicking will HIDE it)
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                ) : (
                                    // Show this when password is HIDDEN (so clicking will SHOW it)
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div className="mt-2 text-right">
                            <Link
                                to="/forgot-password"
                                className="text-primary text-sm font-medium hover:underline hover:text-red-600 transition"
                            >
                                Şifremi unuttum
                            </Link>

                        </div>
                    </div>
                    

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading? 'Giriş yapılıyor...' : 'Giriş Yap'}
                    </button>

                    {error && <p className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg">{error}</p>}
                </form>
            </div>
        </div>
    );

};

export default AdminLogin;