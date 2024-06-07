"use client"
import { Icon } from '@iconify/react/dist/iconify.js'
import { Label } from '@radix-ui/react-select'
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { on } from 'events'

interface StarRatingProps {
    // Add your prop types here
    topLabel: string;
    descriptionLabel: string;
    placeholder: string;
    onRatingChange?: Function; // (rating:number) => void
}

const StarRating: React.FC<StarRatingProps> = ({ topLabel, descriptionLabel, placeholder,onRatingChange }) => {
    const [starText, setStarText] = useState({
        visible: false,
        text: "",
    });
    const [starValue, setStarValue] = useState(0);
    const [ratingDone, setRatingDone] = useState(false);
    useEffect(() => {
        if (onRatingChange) {
            onRatingChange(starValue);
          }
    }, [starValue]);
    return (
        <div className="flex flex-col space-y-1.5">
            <div className="flex flex-row items-center">
                <div className="flex flex-col space-y-1.5 grow">
                    <label htmlFor="Safety" className="text-xl font-bold m-0 p-0">{topLabel}
                    {/* {starValue}{ratingDone.toString()} */}
                    </label>
                    <span className="text-xs text-gray-600 relative -top-2">
                        {descriptionLabel}
                    </span>
                </div>
                <div className={`text-sm ${starText.visible ? "block" : "hidden"}`}>
                    {starText.text}
                </div>
            </div>
            <div className="flex flex-row gap-x-3" onMouseLeave={() => {
                    setStarText({text:"",visible:false});
                    if(ratingDone == false){
                        setStarValue(0);
                    }
                }}>
                <Icon onClick={() => {setRatingDone(true); setStarValue(1);}} onMouseEnter={() => { setStarText({text:"Very Poor",visible:true}); setStarValue(1);}} className='text-yellow-300' icon={`${starValue < 1 ? "ph:star-light" : "ph:star-fill"}`} fontSize={40} />
                <Icon onClick={() => {setRatingDone(true); setStarValue(2);}} onMouseEnter={() => { setStarText({text:"Poor",visible:true}); setStarValue(2);}} className='text-yellow-300' icon={`${starValue < 2 ? "ph:star-light" : "ph:star-fill"}`} fontSize={40} />
                <Icon onClick={() => {setRatingDone(true); setStarValue(3);}} onMouseEnter={() => { setStarText({text:"Average",visible:true}); setStarValue(3);}} className='text-yellow-300' icon={`${starValue < 3 ? "ph:star-light" : "ph:star-fill"}`} fontSize={40} />
                <Icon onClick={() => {setRatingDone(true); setStarValue(4);}} onMouseEnter={() => { setStarText({text:"Good",visible:true}); setStarValue(4);}} className='text-yellow-300' icon={`${starValue < 4 ? "ph:star-light" : "ph:star-fill"}`} fontSize={40} />
                <Icon onClick={() => {setRatingDone(true); setStarValue(5);}} onMouseEnter={() => { setStarText({text:"Excellent",visible:true}); setStarValue(5);}} className='text-yellow-300' icon={`${starValue < 5 ? "ph:star-light" : "ph:star-fill"}`} fontSize={40} />
            </div>
            <input id={topLabel} placeholder={placeholder} className='hidden' value={starValue} disabled />
        </div>
    )
}

export default StarRating