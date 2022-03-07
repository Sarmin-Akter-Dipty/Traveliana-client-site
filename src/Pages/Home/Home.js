import { useEffect, useState } from 'react';
import { TailSpin, Watch } from 'react-loader-spinner';
import Services from '../Services/Services';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import SubHome from './SubHome';




const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise((r) => setTimeout(r, 2000));
            setLoading((loading) => !loading);
        };
        loadData();
    }, []);

    if (loading) {
        return <div className=" bg-red-50 ">
            <div className="flex items-center justify-center min-h-screen">

                <h3 className="text-red-500 text-3xl text-center">Loading...</h3>
                <TailSpin color="#EF4444" height={80} width={80} />


            </div>

        </div>
    }
    else {
        return (
            <div >
                <SubHome></SubHome>
                <About></About>
                <Services></Services>
                <Contact></Contact>
                <Footer></Footer>

            </div>
        )
    };
    // return (
    //     <div >
    //         <SubHome></SubHome>
    //         <About></About>
    //         <Contact></Contact>
    //         <Footer></Footer>

    //     </div>
    // );
};

export default Home;