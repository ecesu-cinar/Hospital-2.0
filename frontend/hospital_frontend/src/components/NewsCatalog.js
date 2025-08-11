import React, { useState, useEffect } from 'react';
import {getNews} from '../api/NewsApi';
import { useNavigate } from 'react-router-dom';

const NewsCatalog = () => {
    const[news , setNews] = useState([]);
    const[loading, setLoading] = useState(true);
    const navigate = useNavigate(); 
    
    useEffect(() => {
        const fetchNews = async() =>{
            try{
                const news = await getNews();
                console.log('News:', news);
                
                const latestNews = [...news]
                    .sort((a,b) => b.id - a.id)
                    .slice(0, 3);

                console.log('LatestNews:', latestNews);
                
                setNews(latestNews);
            }catch (error) {
                console.error('Failed to fetch news:', error);
            }finally{
                setLoading(false);
            }
        }

        fetchNews()
    }, []);

    const handleNewsClick = (newsId) => {
        navigate(`/haberler/${newsId}`);
    };

    return(
        <div>
            <h1
                    className='text-primary text-2xl md:text-4xl p-6 md:p-12 font-bold'
                >
                    Haberler
            </h1>

            <div>

                {loading? (
                    <p>
                        Haberler yükleniyor, lütfen bekleyin...
                    </p>
                ): news.length > 0 ?(
                    <div>
                        {news.map(haber =>(
                            <div 
                                key={haber.id} 
                                onClick={() => handleNewsClick(haber.id)}
                                className="cursor-pointer hover:bg-gray-100 p-4 rounded transition-colors"
                            >
                                {haber.title}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Şu anda görüntülenecek haber bulunamadı.</p>
                )}

            </div>


        </div>
    );
};

export default NewsCatalog