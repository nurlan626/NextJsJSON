import {useState, useEffect} from 'react'
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styles from "../styles/posts.module.scss";


const Posts = ({posts}) => {
    return (
        <MainContainer keywords={"users next js"}>
            <h1 className={styles.usersTitle}>Posts</h1>
            <div className={styles.mainBox}>
                    {posts.map(post =>
                        <div key={post.id} className={styles.box}>
                            <div className={styles.title}> {post.title} </div>
                            <div>  {post.body} </div>
                            <div className={styles.additionalInfo}><Link href={`/posts/${post.id}`}><a className={styles.additionalInfo}>Open</a></Link></div>
                        </div>
                    )}
            </div>
        </MainContainer>
    );
};

export default Posts;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await response.json()

    return {
        props: {posts}, 
    }
}
