import React, { useState, useEffect } from 'react';
import { getDetailedNews } from '../api/NewsApi';
import Header from '../components/Header'
import HeaderPhoto from '../assets/photos/news.jpg';
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

const DetailedNews = () => {

    const[news , setNews] = useState(null);
    const[loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(()=>{
        const fetchDetailedNews = async() =>{
            try{
                const news = await getDetailedNews(id);
                setNews(news);
            } catch(error) {
                console.error('Failed to fetch detailes for news', error);
            } finally {
                setLoading(false);
            }
        }

        fetchDetailedNews();

    },[id]);

    


    return(
        <div>
            <div>
                <Header 
                img={loading ? HeaderPhoto : (news?.main_image || HeaderPhoto)} 
                text="" 
            />
            </div>

            <section>
            {loading ? (
                <p className='text-3xl font-medium text-primary mx-20 my-20'>
                        Haber yükleniyor, lütfen bekleyin...
                    </p>
            ) : news ? (
                <div>
                    <div
                    className='m-10 md:m-20'
                    >
                        <h1 className='text-xl md:text-3xl font-semibold text-primary'>
                            {news.title}
                        </h1>

                        {news?.author?.name && (
                            <p className='my-1 text-base md:text-xl font-medium text-primary/75'>
                            {news.author.name}
                            </p>
                        )}

                        {news?.medical_unit?.name && (
                            <p className='my-1 text-base md:text-xl font-medium text-primary/75'>
                            {news.medical_unit.name}
                            </p>
                        )}

                    </div>

                    <div className="mt-10 mb-20 mx-5  md:my-20 md:mx-20 md:text-xl text-center">
                        <div 
                            className="prose prose-lg max-w-none mx-auto [&_img]:mx-auto [&_img]:block"
                            dangerouslySetInnerHTML={{ 
                                __html: DOMPurify.sanitize(news.content) 
                            }} 
                        />
                    </div>

                    <div className="flex justify-start items-start mx-5 md:mx-20 mb-10">
                        {news.keywords && news.keywords.length > 0 && (
                            <ul className="flex flex-wrap gap-2">
                                {news.keywords.map((keyword, index) => (
                                    <li 
                                        key={index} 
                                        className="bg-secondary text-white text-sm md:text-base px-3 py-1 rounded-lg"
                                    >
                                        {keyword}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                </div>
            ) : (
                <div>

                    <p
                        className='text-3xl font-medium text-primary m-10 md:m-20'
                    >
                        Bu haber şu anda görüntülenemiyor.
                    </p>

                </div>
            )}
        </section>


        </div>
    )
};
export default DetailedNews;