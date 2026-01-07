import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem'


const News=({category}) =>{
  const[articles,setArticles]=useState([]);

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=33e60b5578954724927efdb293acf680 `)
    .then(res=>res.json())
    .then(data =>{
      setArticles(data.articles||[]);

    });
  },[category])
return(
        <div>
        <h2 className='bold'>{category} News</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3 ,1fr)",
            gap:"15px"
        }}>
            
                {/* //looping through articles */}
                {articles.map((news,index)=>(
                    < NewsItem 
                    key={index}
                    title={news.title}
                    description={news.description}
                    image={news.urlToImage}
                    url={news.url}
                    />

                    )
                )
                }
            
        </div>

            </div>
    )
}
export default News