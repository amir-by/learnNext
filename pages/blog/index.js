import Link from 'next/link';
import React from 'react'
 export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9");
  const data = await res.json()
  return{
    props : {posts : data}
  }
 }


const blog = ({posts}) => {
  return (
    <div>
      <div className="container">
        <div className="row my-4 text-center">
          <h1>Blog</h1>
        </div>
        <div className="row ">
          {posts
          .map((post, index) => (
            <div className="row col-12 col-md-4 " key={post.id}>

                <div className="card text-dark mb-4">
                <img src= {`https://source.unsplash.com/720x400/?${post.id}`}
                className="card-img-top" alt="c1" />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{posts.body}</p>
                  <Link href={`/blog/${post.id}`} className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default blog
