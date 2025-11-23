import React from "react";
import book from "../assets/book.svg";
import finger from "../assets/fingers.svg";
import connect from "../assets/network.svg"
import people from "../assets/peopl.svg";

function Community(){
    return(
        <div className="flex flex-col md:flex-col justify-center items-center ">

            {/*part1*/}
            <div className="flex flex-col md:flex-col  bg-gray-50 w-full ">
               <div className="flex flex-col md:flex-col justify-center items-center p-10">
                <h1 className="flex justify-center text-center text-3xl font-semibold">About The Odin Project</h1>
                <p className="text-center max-w-4xl p-10">The Odin Project is one of those "What I wish I had when I was learning" resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.</p>
               </div>
               <div className="flex flex-row justify-center items-center text-center p-5 "><p className="text-2xl font-semibold">What you can expect at The Odin Project</p></div>

               {/*books part*/}
               <div className="flex flex-col md:flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row justify-center items-center text-center gap-20 p-10">
                    <div>
                        <img
                        src={book}
                        alt="book"

                        />
                    </div>
                    <div className="flex flex-col md:flex-col md:flex-wrap items-start justify-center gap-2">
                      <h2 className="font-semibold text-center md:text-left"> Receive support from others</h2>
                      <p className="text-center md:text-left">Our free, comprehensive curriculum will equip you to be a full stack developer,no matter your current experience level.</p>
                    </div>
                </div>

                 <div className="flex flex-col md:flex-row justify-center items-center text-center gap-20 p-10">
                    <div>
                        <img
                        src={finger}
                        alt="finger"

                        />
                    </div>
                    <div className="flex flex-col md:flex-col md:flex-wrap items-start gap-2">
                        <h2 className="font-semibold text-center md:text-left">Receive support from others</h2>
                        <p className="text-center md:text-left">Our free, comprehensive curriculum will equip you to be a full stack developer,no matter your current experience level.</p>
                    </div>
                </div>

                 <div className="flex flex-col md:flex-row justify-center items-center text-center gap-20 p-10">
                    <div>
                        <img
                        src={connect}
                        alt="connect"

                        />
                    </div>
                   <div className="flex flex-col md:flex-col md:flex-wrap items-start gap-2">
                    <h2 className="font-semibold text-center md:text-left">Receive support from others</h2>
                   <p className="text-center md:text-left">Our free, comprehensive curriculum will equip you to be a full stack developer,no matter your current experience level.</p>
                   </div>
                </div>

                 <div className="flex flex-col md:flex-row justify-center items-center text-center gap-20 p-10">
                    <div>
                        <img
                        src={people}
                        alt="people"

                        />
                    </div>
                    <div className="flex flex-col md:flex-col md:flex-wrap items-start gap-2">
                    <h2 className="font-semibold text-center md:text-left">Receive support from others</h2>
                    <p className="text-center md:text-left">Our free, comprehensive curriculum will equip you to be a full stack developer,no matter your current experience level.</p>
                   </div>
                </div>

            </div>
        </div>



         {/*part2*/}
         <div className="flex flex-col md:flex-col justify-center itmes-center text-center p-10 bg-gray-100 w-full">
            <div className="flex justify-center items-center text-center"><h1 className=" text-2xl font-semibold text-black">Overview of The Odin Project</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
                <div className="flex flex-col justify-center items-center text-right p-10 shadow-md rounded-lg bg-white transition-transform duration-300 hover:scale-110">
                    <p className="text-2xl font-semibold ">1,719,194</p>
                    <p>Learners</p>
                </div>
                  <div className="flex flex-col justify-center items-center text-right p-10 shadow-md rounded-lg bg-white transition-transform duration-300 hover:scale-110">
                    <p className="text-2xl font-semibold ">5000+</p>
                    <p>Contributors</p>
                </div>
                 <div className="flex flex-col justify-center items-center text-right p-10 shadow-md rounded-lg bg-white transition-transform duration-300 hover:scale-110">
                    <p className="text-2xl font-semibold ">2013</p>
                    <p>Founded</p>
                </div>


                <div className="col-span-2 flex flex-col p-5 bg-white rounded-md shadow-md items-start gap-5 h-96">
                    <p className="text-black text-2xl p-5 font-bold ">Origin of The Odin Project</p>
                    <p className="max-w-5xl">The Odin Project provides a free open source coding curriculum that can be taken entirely online. Since its inception, it has helped many students get hired as developers and has assisted countless others in learning enough programming to work on their own personal projects.</p>
                    <p>Erik Trautman founded The Odin Project in 2013. Currently it is maintained and continually improved by a team of volunteers many of whom learned to code with us. Many find success from Odin Project's curriculum because of its hands-on approach with learning and emphasis on building projects. The curriculum is meticulously curated to ensure the content is up-to-date.</p>
                </div>
                <div className="flex flex-col bg-white rounded-md shadow-md items-start gap-5 h-96">
                    <p className="text-black text-2xl p-5 font-bold">Open Source</p>
                    <p className="max-w-2xl">This website and the curriculum it hosts are completely open source. That means anyone can work on new features or fix existing bugs on the website. This also extends to the curriculum itself, anyone can work on new lessons, add new resources and improve existing lessons.</p>
                    <p className="max-w-3xl">If you're interested in helping us make The Odin Project better, please find out how to contribute.</p>
                </div>

            
            </div>

           
            

         </div>



        </div>
    )
}
export default Community;