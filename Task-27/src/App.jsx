import { useState } from "react";

export default function App(){
    const [rate , setRate] = useState(null)
    const [submit , setSubmit] = useState(false)
    const ratings = [1,2,3,4,5]

    function handleSubmit(){
        if (rate === null){
            alert('Please select a rating before submitting!');
            return
        }
        setSubmit(true)
    }

    if(submit){
        return(
            <div className="bg-[#121417] flex justify-center items-center p-4 min-h-screen">
                <div className="bg-[#202731] flex flex-col items-center p-8 text-center rounded-3xl max-w-md">
                    <img src="/images/illustration-thank-you.svg" className="mb-6" ></img>
                    <p className="bg-[#262e38] text-[#fb7413] text-sm mb-6 px-4 py-2 rounded-full">
                        You selected {rate} out of 5</p>

                    <h2 className="text-white text-3xl mb-4">Thank you!</h2>

                    <p className="text-[#969fad] text-sm">
                        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                    
                </div>
            </div>
        )
    }


    return(
        <div className="bg-[#121417] flex items-center justify-center p-4 min-h-screen">
            <div className="bg-[#202731] p-8 text-center rounded-3xl max-w-md">
                <div className="w-10 h-10 bg-[#262e38] rounded-full flex items-center justify-center mb-6">
                    <img src="/images/icon-star.svg" alt="Star" />
                </div>
                <h1 className="text-white text-2xl mb-3">
                    How did we do?
                </h1>

                <p className="text-[#969fad] text-sm mb-6">
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </p>

                <div className="flex justify-between mb-6">
                    {ratings.map((rating) => (
                        <button 
                            key={rating} 
                            onClick={() => setRate(rating)}
                            className={`w-12 h-12 rounded-full font-bold transition-colors cursor-pointer ${
                                rate === rating 
                                    ? 'bg-white text-black' 
                                    : 'bg-[#262e38] text-[#969fad] hover:bg-[#fb7413] hover:text-white'
                            }`}
                        >
                            {rating}
                        </button>
                    ))}
                </div>
                <button onClick={handleSubmit} className="w-full py-3 rounded-full bg-[#fb7413] text-white hover:bg-white hover:text-[#fb7413] cursor-pointer">
                    SUMBIT
                </button>
            </div>

        </div>
    )

}