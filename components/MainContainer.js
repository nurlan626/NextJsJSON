import A from "./A";
import Head from "next/head";
import styles from '../styles/MainContainer.module.scss'


const MainContainer = ({children, keywords}) => {
    return (
        <div className={styles.container}>
            <Head>
                <meta keywords={"ulbi tv, nextjs" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className={styles.navbar}>
                <A href={'/'} text="Main"/>
                <A href={'/users'} text="Users"/>
                <A href={'/posts'} text="Posts"/>
                 <A href={'/photos'} text="Photos"/>
                {/* <A href={'/users'} text="posts"/>  */}
            </div>
            <div className={styles.containerBody}>
                {children}
            </div>
           
        </div>
    );
};

export default MainContainer;
