import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styles from "../styles/photos.module.scss";

const Posts = ({photos}) => {
    return (
        <MainContainer keywords={"users next js"}>
            <h1 className={styles.title} >Photos</h1>
            <div className={styles.mainBox}>
                {photos.map(photos =>
                    <div key={photos.id} className={styles.box}>
                        
                        <div><img src={photos.url} className={styles.img} ></img></div>
                        <div> {photos.title} </div>
                        <div className={styles.h1}> <Link href={`/photos/${photos.id}`}><a>Open </a></Link> </div>
                    </div>
                )}
            </div>
        </MainContainer>
    );
};

export default Posts;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
    const photos = await response.json()

    return {
        props: {photos}, 
    }
}
