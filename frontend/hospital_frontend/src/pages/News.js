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
                console.log(news);
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
                    <p className='text-3xl font-medium text-primary mx-20 my-20'>
                        Haberler yükleniyor, lütfen bekleyin...
                    </p>
                ): news.length > 0 ?(
                    <div>
                        <div className='bg-primary/5 pt-14'>
                            <h2 className="max-w-6xl mx-auto px-4 md:px-6 text-2xl md:text-3xl font-semibold text-primary ">
                                Son Eklenenler
                            </h2>

                            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-16 px-4 md:px-6 max-w-6xl mx-auto rounded-lg'>
                                {topThree.map(haber =>(
                                    <div
                                        key={haber.id}
                                        onClick={() => handleNewsClick(haber.id)}
                                        className="cursor-pointer rounded overflow-hidden bg-white shadow-lg md:hover:shadow-xl transition"
                                        >
                                        <img
                                            src={haber.main_image_url || haber.main_image}   // use the one your API has
                                            alt={haber.title}
                                            className="w-full h-64 object-cover"
                                            loading="lazy"
                                        />

                                        <div className="p-5 flex flex-col justify-between h-48">
                                            <div>
                                                <h3 className="font-semibold text-xl text-primary leading-snug">{haber.title}</h3>
                                                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{haber.summary}</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex flex-wrap gap-1">
                                                    {haber.keywords && haber.keywords.slice(0, 2).map((keyword, index) => (
                                                        <span key={index} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                                                            {keyword}
                                                        </span>
                                                    ))}
                                                </div>
                                                <span className="items-center inline-flex text-xs font-semibold text-secondary cursor-pointer">
                                                    Devamını Oku
                                                    <FaArrowRightLong  className="ml-1 translate-y-[1px]" strokeWidth={1}/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            </div>

                        <h2 className="max-w-6xl mx-auto px-4 md:px-6 mt-12 mb-4 text-xl md:text-2xl font-semibold text-primary">
                            Diğer Haberler
                        </h2>

                        <div
                            className='max-w-6xl mx-auto px-4 md:px-6 mb-32 pt-2'
                        >
                            {rest.map(haber => (
                                <div
                                    key={haber.id}
                                    onClick={() => handleNewsClick(haber.id)}
                                    className="flex flex-col sm:flex-row my-6 items-stretch cursor-pointer rounded overflow-hidden bg-white shadow-lg md:hover:shadow-xl transition"
                                >
                                
                                    <img
                                        src={haber.main_image_url || haber.main_image}   // use the one your API has
                                        alt={haber.title}
                                        className="w-48 h-48 object-cover"
                                        loading="lazy"
                                    />

                                    <div className="p-4 flex-1 flex flex-col justify-between">
                                        <div className='text-left my-2 sm:my-2 sm:ml-1'>
                                            <h3 className="font-semibold text-xl text-primary leading-snug">{haber.title}</h3>
                                            <p className="mt-2 text-sm text-gray-600  line-clamp-2">{haber.summary}</p>
                                        </div>
                                        <div className="flex justify-between items-center mt-3">
                                            <div className="flex flex-wrap gap-1">
                                                {haber.keywords && haber.keywords.slice(0, 2).map((keyword, index) => (
                                                    <span key={index} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                                                        {keyword}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="items-center inline-flex text-xs font-semibold text-secondary cursor-pointer">
                                                Devamını Oku
                                                <FaArrowRightLong  className="ml-1 translate-y-[1px]" strokeWidth={1}/>
                                            </span>
                                        </div>
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
