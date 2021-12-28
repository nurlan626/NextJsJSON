import {useRouter} from "next/router";
import styles from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const {query} = useRouter()
    return (
        <MainContainer keywords={user.name}>

            <div className={styles.MainBox}>
                <div className={styles.MainBoxInner, styles.div}>
                    <div className={styles.box1}>
                        <div>
                            <img src='https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png' width='200px'></img>
                        </div>
                        <div>
                            <div className={styles.userName}>User name: {user.username}</div>
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <div>tel. {user.phone}</div>
                            <div>web site: {user.website}</div>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <div>Company information</div>
                        <div>name: {user.company.name}</div>
                        <div>catch phrase: {user.company.catchPhrase}</div>
                        <div>bs: {user.company.bs}</div>
                    </div>
                </div>
                
            </div>

        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}, 
    }
}
