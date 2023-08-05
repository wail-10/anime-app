import React from 'react'

const Hero = () => {
    return (
        // <div>
        //     <div>
        //         <img 
        //             src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1779&q=80" 
        //             alt="bg" 
        //         />
        //     </div>
        //     <div>
        //         <h3>Title</h3>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, recusandae eveniet! Eum iste omnis accusantium maxime a expedita neque illum sit quaerat. Perspiciatis quibusdam optio tempore, tenetur dignissimos corrupti saepe.</p>
        //     </div>
        // </div>
        <div className="max-w-md mx-auto bg-cover bg-center rounded-md overflow-hidden shadow-lg">
            <img
                src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1779&q=80"
                alt="bg"
                className="opacity-80"
            />
            <div className="bg-opacity-50 bg-black p-4 text-white absolute bottom-0 left-0 w-full">
                <h3 className="text-2xl font-bold mb-2">Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore recusandae autem facere quaerat quia! Voluptatum, porro nulla? Quo tenetur, quam optio, dolorem officiis minus eaque laudantium illum aliquam nostrum unde.</p>
            </div>
        </div>
    )
}

export default Hero