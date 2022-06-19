import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto mb-10'>
            <div className="mt-40 sm:mt-5 lg:mt-40 sm:p-2 lg:p-0">
                <h1 className="text-2xl text-bold">Contact.</h1>
                <div className="mt-5">
                    {/* <Socials /> */}
                </div>
            </div>
            <h1 className="text-sm text-bold mt-10 sm:mt-2 lg:mt-10 sm:p-2 lg:p-0">
                Made With ❤ by{" "}
                {/* <Link href="http://www.chetanverma.com"> */}
                <a className="underline underline-offset-1">Raiyan Kabir</a>
                {/* </Link> */}
            </h1>
        </div>
    );
};

export default Footer;