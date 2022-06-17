import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center bg-no-repeat" style={{
                backgroundImage: "url(https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

                <div class="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
                    <span class="text-bold">Wait Please !</span>
                    <h1 class="text-5xl">Coming <b>Soon</b> !</h1>
                    <p>Stay tuned for something amazing!!!</p>



                </div>

            </div>
        </div>
    );
};

export default Blogs;