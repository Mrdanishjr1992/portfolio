import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

export default function Project(){
    const [postData, setPost] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == 'post']{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data)=> setPost(data))
            .catch(console.error)
    },[])


    return (
        <main className='min-h-screen p12'>
            <section className="container mx-auto">
                <h1 className="text-white text-8xl cursive flex justify-center">Projects Page</h1>
                <div className="projects container grid md:cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post,index)=>(
                        <div key={index} className="project block h-64 relative leading-snug bg-red-800 border-8 border-red-800">
                            <Link to={"/project/"+ post.slug.current} key={post.slug.current}>
                                <img className="img" src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                                <div>
                                    <h3 className="text-white bg-red-900">{post.title}</h3>
                                    <p className="text-white bg-red-900">{post.body}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}