import React, { useState, useEffect } from 'react';
import { getDetailedNews } from '../api/NewsApi';
import Header from '../components/Header'
import HeaderPhoto from '../assets/photos/news.jpg';
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

const DetailedNews = () => {

    const[news , setNews] = useState([]);
    const[loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(()=>{
        const fetchDetailedNews = async() =>{
            try{
                const news = await getDetailedNews(id);
                console.log('Raw API response:', news); 
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
                    className='m-10'
                    >
                        <h1 className='text-xl md:text-3xl text-bold text-primary'>
                            {news.title}
                        </h1>

                        <p className='text-xl md:text-sm text-primary/5'>
                            {news?.author}
                        </p>

                    </div>

                    <div className="mx-10">
                        <div 
                            className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ 
                                __html: DOMPurify.sanitize(news.content) 
                            }} 
                        />
                    </div>

                </div>
            ) : (
                <div>

                </div>
            )}
        </section>


        </div>
    )
};
export default DetailedNews;