
import ScrollButton from '../ScrollButton/ScrollButton';
import styles from './Header.module.css'


function Header() {

    
    return(
        <>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    HEADER
                </div>
                    <ScrollButton/>
            </div>
        </>
    )
}

export default Header;