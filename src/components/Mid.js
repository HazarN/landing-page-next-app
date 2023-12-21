import styles from '../styles/Mid.module.css';

const Mid = () => {
    return (
        <section className={`${styles['sm-padding']} mid-container flex flex-col justify-center p-20 `}>
            <h1 className='text-3xl font-bold pb-5'> Who we are </h1>

            <p className='text-xl'>
                We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.
                We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.
            </p>

            <img src="mid_image.png" alt="mid_image" className={`${styles['sm-padding-top']} pt-20`}/>
        </section>
    );
}
 
export default Mid;