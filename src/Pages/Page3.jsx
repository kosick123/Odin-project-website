import React from "react";
import learn from "../assets/learn.svg";
import build from "../assets/build.svg";
import connect from "../assets/connect.svg";

function Page3(){
    return(
        <div className="flex flex-col gap-5 md:flex-col justify-center items-center text-center p-10">
            <div className="flex flex-col  md:flex-col justify-center items-center text-center gap-6">
                <h2 className="text-black text-3xl font-semibold">How it works</h2>
                <p >This is the website we wish we had when we were learning on our own. We scour the <br /> internet looking for only the best resources to supplement your learning and present them <br /> in a logical order.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center text-center gap-20">
                <div className="flex flex-col gap-5 justify-center items-center text-center">
                    <img 
                    src={learn}
                    alt="learn"
                    className="w-1/2"
                    />
                    <h2 className="text-2xl">Learn</h2>
                    <p>Learn from a curriculum with the best <br /> curated online tutorials, blogs, and <br /> courses.</p>
                </div>
                 <div className="flex flex-col gap-5 justify-center items-center text-center">
                    <img 
                    src={build}
                    alt="build"
                    
                    />
                    <h2 className="text-2xl">Build</h2>
                    <p>Learn from a curriculum with the best <br /> curated online tutorials, blogs, and <br /> courses.</p>
                </div>
                 <div className="flex flex-col gap-5 justify-center items-center text-center">
                    <img 
                    src={connect}
                    alt="connect"
                    />
                    <h2 className="text-2xl">Connect</h2>
                    <p>Learn from a curriculum with the best <br /> curated online tutorials, blogs, and <br /> courses.</p>
                </div>
            </div>

        </div>
    )
}
export default Page3;