import React from "react";

function Signin(){
    return(
        <div>
        <div className="flex flex-col md:flex-col justify-center items-center text-center bg-gray-50 p-10">
            <div className="flex flex-col md:flex-col justify-center itmes-center p-10">
                <h1 className="text-3xl font-bold ">Sign in to your account</h1>
                <p>Or sign up for a new account</p>
            </div>


            <div className="shadow-md bg-white p-10 rounded-md">
                {/* form */}
                <form className="space-y-2">
                    <label className="block text-left">Email address</label>
                    <input type="email"
                    className="w-full border border-gray-300 rounded-md h-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    
                    <label className="block text-left">Password</label>
                    <input type="password"
                    className="w-full border border-gray-300 rounded-md h-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <div className="flex justify-start gap-2 items-center ">
                        <input type="checkbox"
                        />
                        <label>Remember Me</label>
                    </div>
                    <button className="w-full bg-gray-700 text-white h-10 rounded-md transistion-transform duration-300 hover:scale-110">Sign In</button>
                </form>
            </div>
        
        </div>


         <div className='flex flex-col p-20 bg-gray-100'>
        <div className='flex flex-col justify-center items-center text-center gap-5'>
            <h2 className='text-black font-bold text-3xl'>Support us!</h2>
            <p>The Odin Project is funded by the community. Join us in empowering <br /> learners around the globe by supporting The Odin Project! </p>
        </div>
        <div className='flex flex-row justify-center items-center text-center gap-5 p-7'>
            <button className='rounded-md bg-white border shadow-md w-32 h-10 hover:cursor-pointer transition-transform duration-300 hover:scale-110'>Learn More</button>
            <button className='rounded-md bg-gray-600 text-white  shadow-sm w-32 h-10 hover:cursor-pointer transition-transform duration-300 hover:scale-110'>Donate Now →</button>
        </div>

      </div>
</div>


        
    )
}
export default Signin;