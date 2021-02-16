import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
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
                <h1 className="text-white text-8xl cursive flex justify-center p-5">Projects Page</h1>
                <div className="projects container grid md:cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post,index)=>(
                        <div key={index} className="project block relative leading-snug bg-red-800 border-4 rounded border-red-800" style={ { backgroundImage: post.mainImage.asset.url }}>
                            <Link to={"/project/"+ post.slug.current} key={post.slug.current}>
                                <img  src={post.mainImage.asset.url} alt={post.mainImage.alt} className="absolute object-cover w-full h-full"/>
                            </Link>
                            <div className="bg-red-800 relative flex justify-center  p-2 lg:p-4">
                                <h3 className="text-white mr-5">{post.title}</h3>
                                <SocialIcon url={'https://github.com/Mrdanishjr1992/'+post.slug.current} className="block ml-5" target="_blank" fgColor="#fff" style={ { height:45, width: 45 } } />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}