import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styles from "../styles/users.module.scss";


const Users = ({users}) => {
    return (
        <MainContainer keywords={"users next js"}>
            <h1 className={styles.usersTitle}>Users List</h1>
            <div className={styles.mainBox}>
                    {users.map(user =>
                        <div key={user.id} className={styles.box}>
                            <div> {user.name} </div>
                            <div>from {user.address.city} </div>
                            <div className={styles.additionalInfo}><Link href={`/users/${user.id}`}><a className={styles.additionalInfo}>Additional information</a></Link></div>
                        </div>
                    )}
            </div>
            
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: {users}, 
    }
}
