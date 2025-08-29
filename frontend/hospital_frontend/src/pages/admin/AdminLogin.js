import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAuth } from '../../api/LoginApi'
import logo from '../../assets/logos/logo.png';

const AdminLogin = () => {
    const[credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState('');
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

            localStorage.setItem('access_token', response.access);
            localStorage.setItem('refresh_token', response.refresh);

            navigate('/dashboard/admin-panel');
        }catch(error){
            setError('Invalid username or password');
        } finally {
            setLoading(false);
        }

    };

    return(
        <div>
            <div>
                <div>
                    <img 
                        src={logo}
                        alt="Hastane Logosu" 
                        className=""
                    />

                    <h2> Özel Akademi Cerrahi Top Merkezi </h2>

                </div>

                <h1> Admin girişi </h1>
                
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type='text'
                                name='username'
                                placeholder=''
                                value={credentials.username}
                                onChange = {handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                name='password'
                                placeholder=''
                                value={credentials.password}
                                onChange = {handleChange}
                                required
                            />
                            <button>

                            </button>
                        </div>

                        <button type = 'submit' disabled = {loading}>
                            {loading? 'Giriş yapılıyor...': 'Giriş Yap'}
                        </button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );

};

export default AdminLogin;