import styles from '../styles/Statistics.module.css';

const Statistics = () => {
    return (
        <section className={`${styles['statistics-container']} flex justify-center`}>
            <div className={`${styles['sm-gap']} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-5 gap-48`}>
                <div className='p-4'>
                    <h1 className="ylw font-bold text-4xl"> 350 + </h1>

                    <p className="text-white"> Clients Worldwide </p>
                </div>

                <div className='p-4'>
                    <h1 className="font-bold text-4xl"> 20 + </h1>

                    <p className="text-white"> Team Members </p>
                </div>

                <div className='p-4'>
                    <h1 className="font-bold text-4xl"> 100 + </h1>

                    <p className="text-white"> Projects Completed </p>
                </div>

                <div className='p-4'>
                    <h1 className="font-bold text-4xl "> 85M + </h1>

                    <p className="text-white"> Revenue Generated </p>
                </div>
            </div>
        </section>
    );
}
 
export default Statistics;