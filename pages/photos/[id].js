import {useRouter} from "next/router";
import styles from '../../styles/photo.module.scss'
import MainContainer from "../../components/MainContainer";

export default function Photos({photos}) {
    const {query} = useRouter()
      return (
        <MainContainer keywords={photos.id}>
            <div className={styles.box}>

                <h1 className={styles.h1}>id {query.id}</h1>
                <img src={photos.url} className={styles.img} ></img>
                <div className={styles.title}> {photos.title}</div>
                

                
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
    const photos = await response.json();
  
    return {
        props: {photos}, 
    }
}
