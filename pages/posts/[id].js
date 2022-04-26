import axios from 'axios'
import React from 'react'
import markdownParser from '../../plugin/makdownParser'

export default function PostPage({ post,html }) {
  return (
    <article>
      <header>
        <h1>{post.attributes.title}</h1>
        <h2>{post.attributes.description}</h2>
      </header>
      <section dangerouslySetInnerHTML={{__html: html }}/>
    </article>
  )
}

export async function getStaticProps({ params}) {
  const postRes = await axios.get(`http://localhost:1337/api/posts/${params.id}`)
  const html = await markdownParser(postRes.data.data.attributes.content)
  // console.log(html)
  return {
    props:{
      post: postRes.data.data,
      html
    }
  }
}

export async function getStaticPaths() {
const postRes = await axios.get("http://localhost:1337/api/posts")
const paths = postRes.data.data.map((post) => {
  return {params: {id: post.id.toString()}}
})
  return {
    paths,
    fallback: false
  }
}