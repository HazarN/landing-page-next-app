import styles from '../styles/Hero.module.css';

const Hero = () => {
    return ( 
        <section className={`${styles['hero-container']} flex flex-col justify-between`}>
            <h1 className={`${styles['header-text']} ${styles['md-header-text']} ${styles['sm-header-text']} text-6xl font-bold flex justify-center text-center `}> 
                Let's create something <br/> great together. 
            </h1>

            <div className={`${styles.images} grid justify-center grid-cols-3 lg:grid-cols-6`}>
                <img src="hand1.png" alt="hand1"/>
                <img src="hand2.png" alt="hand2"/>
                <img src="hand3.png" alt="hand3"/>
                <img src="hand4.png" alt="hand4"/>
                <img src="hand5.png" alt="hand5"/>
                <img src="hand6.png" alt="hand6"/>    
            </div>
        </section>
    );  
}

export default Hero;
