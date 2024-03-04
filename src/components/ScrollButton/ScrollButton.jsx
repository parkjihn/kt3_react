
import styles from './ScrollButton.module.css'



function ScrollButton () {

    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }

    return (
        <div className={styles.buttonHouse}>
            <button className={styles.headerButton} type="button" onClick={handleScroll}>Scroll to Footer</button>;
        </div>
    )
}

export default ScrollButton