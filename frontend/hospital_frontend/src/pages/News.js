import React,  { useState, useEffect } from 'react';
import {getNews} from '../api/NewsApi';
import Header from '../components/Header'
import HeaderPhoto from '../assets/photos/news.jpg';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

const News = () => {

    const[news , setNews] = useState([]);
    const[loading, setLoading] = useState(true);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchNews = async() =>{
            try{
                const news = await getNews();

                const sorted = [...(news || [])].sort((a, b) => b.id - a.id);
                
                setNews(sorted);

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

    const topThree = news.slice(0, 3); 
    const rest = news.slice(3);

    return(
        <div>
            <div>
                <Header img={HeaderPhoto} text="Haberler" />
            </div>

            <div>
                {loading?(
                    <p className='text-xl font-medium text-primary'>
                        Haberler yükleniyor, lütfen bekleyin...
                    </p>
                ): news.length > 0 ?(
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10 mx-10'>
                            {topThree.map(haber =>(
                                <div
                                    key={haber.id}
                                    onClick={() => handleNewsClick(haber.id)}
                                    className="cursor-pointer rounded overflow-hidden bg-white shadow-lg md:hover:shadow-xl transition"
                                    >
                                    <img
                                        src={haber.main_image_url || haber.main_image}   // use the one your API has
                                        alt={haber.title}
                                        className="w-full h-56 object-cover"
                                        loading="lazy"
                                    />

                                    <div className="p-4">
                                        <h3 className="font-semibold text-xl text-primary">{haber.title}</h3>
                                        <p className="mt-2 text-sm text-gray-600">{haber.summary}</p>
                                        <span className="mt-3 inline-flex items-center text-xs font-semibold text-secondary cursor-pointer">
                                            Devamını Oku
                                            <FaArrowRightLong  className="ml-1 translate-y-[1px]" strokeWidth={1}/>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            {rest.map(haber => (
                                <div
                                    key={haber.id}
                                    onClick={() => handleNewsClick(haber.id)}
                                    className="cursor-pointer rounded overflow-hidden bg-white shadow-lg md:hover:shadow-xl transition"
                                >
                                
                                    <img
                                        src={haber.main_image_url || haber.main_image}   // use the one your API has
                                        alt={haber.title}
                                        className="w-full h-56 object-cover"
                                        loading="lazy"
                                    />

                                    <div className="p-4">
                                        <h3 className="font-semibold text-xl text-primary">{haber.title}</h3>
                                        <p className="mt-2 text-sm text-gray-600">{haber.summary}</p>
                                        <span className="mt-3 inline-flex items-center text-xs font-semibold text-secondary cursor-pointer">
                                            Devamını Oku
                                            <FaArrowRightLong  className="ml-1 translate-y-[1px]" strokeWidth={1}/>
                                        </span>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                ):(
                    <p>Şu anda görüntülenecek haber bulunamadı.</p>
                )}

            </div>

        </div>
    );
};

export default News;
