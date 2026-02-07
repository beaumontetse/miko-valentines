import React, { useState } from 'react';
import loveImage from './assets/briella_sampson.jpg';

const ValentineRequest = () => {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "Really sure?",
            "Think again!",
            "Last chance!",
            "Surely not?",
            "You might regret this!",
            "Give it another thought!",
            "Are you absolutely certain?",
            "This could be a mistake!",
            "Have a heart!",
            "Don't be so cold!",
            "Change of heart?",
            "Wouldn't you reconsider?",
            "Is that your final answer?",
            "You're breaking my heart ;(",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen -mt-16 selection:bg-rose-500 selection:text-white w-full text-center">
            {yesPressed ? (
                <>
                    <img src={loveImage} alt="Simba and Briella" className="max-w-md rounded-lg shadow-lg" />
                    <div className="text-4xl font-bold my-4 text-center">Yay!!!</div>
                </>
            ) : (
                <>
                    <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="bear with roses" />
                    <h1 className="text-4xl my-4 text-center">Can I be your Valentine?</h1>
                    <div className="flex flex-wrap flex-col md:flex-row gap-4 items-center justify-center">
                        <button
                            className={`rounded bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
                            style={{ fontSize: yesButtonSize }}
                            onClick={() => setYesPressed(true)}
                        >
                            Yes
                        </button>
                        <button
                            onClick={handleNoClick}
                            className=" rounded bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {noCount === 0 ? "No" : getNoButtonText()}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ValentineRequest;
