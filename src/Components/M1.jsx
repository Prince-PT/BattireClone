import React,{useState} from 'react'
import Scooty from '../assets/Images/scooty.png'
import Sym from '../assets/Images/location sym.png'
import Tick from '../assets/Images/tick.png'
import Arrow from '../assets/Images/Arrow 2.png'
import Red from '../assets/Images/scooty-red.png'
import Grey from '../assets/Images/scooty-grey.png'
import Dblue from '../assets/Images/scooty-darkblue.png'
import Lblue from '../assets/Images/scooty-lightblue.png'
import White from '../assets/Images/scooty-white.png'
import Yellow from  '../assets/Images/scooty-yellow.png'




function M1() {
    const [currentImage, setCurrentImage] = useState(Scooty);

    const handleChangeImage = (image) => {
      setCurrentImage(image);
    };
        return (
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap justify-between w-full md:w-1/2 mt-8 lg:w-1/2">
                    <div className="flex items-center mb-5"> {/* Container for text and circle */}
                        <h1 className="text-2xl ml-16 mt-10">Storie</h1>
                        <div className="ml-[280px] flex ">
                            <div className="rounded-full bg-green-200 border-solid border-1 w-6 h-6 mt-10"></div>
                            <p className=" ml-2 justify-center mt-10">Sparkling Green</p>
                        </div>
                    </div>
                    <div className=" w-5/6 h-1 border-b-4 bg-slate-600 align-middle justify-center mx-14"></div>
                    <div className="mx-10 mt-6 ml-40">
                        <img src={currentImage} alt="" className='h-80'/>
                    </div>
                    <div className="w-5/6 h-1 border-b-4 bg-slate-600 align-middle justify-center aling-centre mb-6 ml-14 mt-6"></div>
                    <div className="flex flex-wrap">
                        <div className="ml-10 mt-3 mb-10">
                            <ul>
                                <li className="mb-4">Booking Amount</li>
                                <li className="text-5xl font-bold">&#8377; 2,500/-</li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap ml-[80px] mt-3 mb-10">
                            <ul>
                                <li className="text-xs">*Ex-showroom price in</li>
                                <li className="text-xs">(incl. FAME II Subsidy)</li>
                                <li className="mt-3 text-xl ml-0">&#8377; 1,17,357/-</li>
                            </ul>
                            <div className="ml-4 flex">
                                <p className="mr-2 text-xs font-bold">New Delhi</p>
                                <img src={Sym} className="h-4 w-3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 w-full md:w-1/2 lg:w-1/2">
                    <div className="flex justify-between flex-wrap mx-28">
                        <ol className="flex justify-between flex-wrap mt-[76px]">
                            <li className="mr-10 text-base">01    SELECT MODEL</li>
                            <li className="mr-10 text-base">02    SELEECT COLOR</li>
                            <li className="mr-10 text-gray-400 text-lg">03    YOUR DETAILS AND PREFERRED LOCATION</li>
                        </ol>
                    </div>
                    <h1 className="text-4xl mt-4 ml-[110px] mb-6">Choose a Colour</h1>
                    <div className="bg-white  mx-[140px] ml-28 flex flex-col p-8">
                        <div className="flex">
                            <img src={Tick} alt="" className="w-8 h-8 mt-5"></img>
                            <ul className="mt-5 ml-10">
                                <li className="text-3xl mb-2"> Storie</li>
                                <li className="text-sm">Sparkling Green</li>
                            </ul>
                            <div>
                                <img src={currentImage} alt="" className=" w-24 h-auto ml-[250px]"></img>
                            </div>
                        </div>
                        <div className="flex justify-between flex-row mt-8">
                            <ul className="flex flex-wrap flex-row justify-between">
                                <li><button onClick={() => handleChangeImage(Scooty)} className="w-8 h-8 rounded-full bg-[#A0CABB] mx-4  border-gray-300 border-[1px] enabled:hover:border-black"></button></li>
                                <li><button onClick={() => handleChangeImage(Grey)} className="w-8 h-8 rounded-full bg-[#707485] mx-4  border-gray-300 border-[1px] enabled:hover:border-black"></button></li>
                                <li><button onClick={() => handleChangeImage(Dblue)} className="w-8 h-8 rounded-full bg-[#233A78] mx-4  border-gray-300 border-[1px] enabled:hover:border-black"></button></li>
                                <li><button onClick={() => handleChangeImage(Scooty)} className="w-8 h-8 rounded-full bg-[#93D4DE] mx-4  border-gray-300 border-[1px] enabled:hover:border-black"></button></li>
                                <li><button onClick={() => handleChangeImage(Lblue)} className="w-8 h-8 rounded-full bg-[#C5DBF4] mx-4  border-gray-300 border-[1px] enabled:hover:border-black"></button></li>
                                <li><button onClick={() => handleChangeImage(Red)} className="w-8 h-8 rounded-full bg-[#B42025] mx-4  border-gray-300 border-[1px] enabled:hover:border-black"></button></li>
                                <li><button onClick={() => handleChangeImage(White)} className="w-8 h-8 rounded-full bg-[#ffffff] mx-4  border-gray-300 border-[1px] enabled:hover:border-black"></button></li>
                                <li><button onClick={() => handleChangeImage(Yellow)} className="w-8 h-8 rounded-full bg-[#F5D266] mx-4  border-gray-300 border-[1px] enabled:hover:border-black"></button></li>
                            </ul>
                        </div>
                    </div>
                    <button className="bg-black text-white mt-24 ml-12 p-4 text-left w-4/5 flex justify-between align-middle">Confirm <img src={Arrow} alt="" className="mt-2"></img></button>
                </div>
            </div>
        );
    }
    //return <ImageChanger />;
export default M1