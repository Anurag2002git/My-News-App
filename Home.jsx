import React, { useEffect, useRef, useState } from 'react'
// import NewsItem from './NewsItem';
import { Link } from 'react-router-dom'



function Home({q, language }) {
  const [totalResults, setTotalResults] = useState()
  const [articles, setArticles] = useState([])

  async function getApidata(){
    var response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&sortBy=publishedAt&apiKey=8ba44eade1874dda892693e2fab0b6be`)
    var data = await response.json();
    setTotalResults(data.totalResults);
    setArticles(data.articles)

    // console.log("total result:", response.totalResults);
    // console.log("articals:", response.articles);
  };

  useEffect((oldProps) => {
    getApidata()
    // console.log("called");

  }, [q, language])

  return (
    <div className='w-[100%] gap-4'>
      <h4 className="home h-15 items-center ml-3 bg-gray-700 text-xl">{q} News Items  :</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-9'>
        {articles.length === 0 ? (
          <p>loading</p>
        ) : (
          articles.map((Item, index) => (

            <div key={index} >
              {/* <NewsItem /> */}
              <div>
                <div className=' border border-black mt-[50px] h-120 rounded-xl'>
                  <img src={Item.urlToImage} alt="image" className='h-[225px] rounded-tl-xl rounded-tr-xl' />
                  <div className='flex flex-col justify-between h-60 text-center'>
                    <div className='scrollBarTitle'>
                      <h5 >{Item.title}</h5>
                    </div>
                    {/* line-clamp-2.. : isse ham apni title ki words or unki line ko control kar skte he ye tailwind css ki property he */}
                    <div className='flex justify-between ml-2 text-[13px]'>
                      <p>{Item.source.name}</p>
                      <p>{(new Date(Item.publishedAt)).toLocaleDateString()}</p>
                    </div>
                    <hr />
                    <div className="scrollBar">
                      <p>{Item.description}</p>
                    </div>
                    <Link to={Item.url} className='bg-gray-700 text-white text-[18px] rounded-full'>Read Full Artical..</Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {/* <div>
          {
            articles.map((item)=>{
              <NewsItem/>
              {item.title}
            })
          }
        </div> */}

      </div>

    </div>
  )
}
export default Home;