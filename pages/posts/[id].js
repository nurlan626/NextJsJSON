import {useRouter} from "next/router";
import styles from '../../styles/post.module.scss';
import MainContainer from "../../components/MainContainer";

export default function Post({post}) {
    const {query} = useRouter()
  




    return (
        <MainContainer keywords={post.id}>
            <div className={styles.box}>
                <h1>Post {query.id}</h1>
                <img src="https://www.nicepng.com/png/full/37-370475_small-world-map.png"></img>
                <div className={styles.title}>Title: {post.title}</div>
                <div className={styles.body}>Body: {post.body}</div>

                
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await response.json();

    return {
        props: {post}, 
    }
}
