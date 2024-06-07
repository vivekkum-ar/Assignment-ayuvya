"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import StarRating from "@/components/rating";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface RatingProps {
  // Add your prop types here
}

const Rating: React.FC<RatingProps> = ({ }) => {
  const [praiseOptions, setPraiseOptions] = useState<string[]>([]);
  const [suggestion, setSuggestion] = useState("");
  const [recommend, setRecommend] = useState("na");
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const handleSafetyRating = (rating: number) => {
    setSafetyRating(rating);
  };
  const handleCommunicationRating = (rating: number) => {
    setCommunicationRating(rating);
  };
  return (
<Card className="w-[350px] h-fit outline">
      <CardHeader>
        <CardTitle className="font-poppins font-bold text-3xl">
          Leave a review
        </CardTitle>
        <CardDescription>
          Your feedback helps us improve our service.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {/* safety{safetyRating} communication{communicationRating} */}
            <StarRating
              onRatingChange={handleSafetyRating}
              topLabel={"Safety"}
              descriptionLabel={"Leave a rating from 1-5"}
              placeholder={""}
            ></StarRating>
            <StarRating
              onRatingChange={handleCommunicationRating}
              topLabel={"Communication"}
              descriptionLabel={"Leave a rating from 1-5"}
              placeholder={""}
            ></StarRating>
            {/* <StarRating topLabel = {"Safety"} descriptionLabel = {"Leave a rating from 1-5"} placeholder={""}></StarRating> */}
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-row items-center">
                <div className="flex flex-col space-y-1.5 grow">
                  <label
                    htmlFor="Safety"
                    className="text-xl font-bold m-0 p-0"
                  >
                    Would you recommend us?
                  </label>
                  <span className="text-xs text-gray-600 relative -top-2">
                    Your answer helps us improve our service.
                  </span>
                </div>
                {/* <div className={`text-sm`}></div> */}
              </div>
              <div
                className="flex flex-row gap-x-10 justify-start"
                onMouseLeave={() => { }}
              >
                <div className="flex flex-row justify-start items-center group">
                  {recommend === "no" ? (
                    <Icon
                      className="text-red-400 block"
                      icon={"fa-solid:thumbs-down"}
                      fontSize={40}
                      onClick={() => { setRecommend("no"); }}
                    />
                  ) : (
                    <Icon
                      className="text-red-400 block"
                      icon={"fa-regular:thumbs-down"}
                      fontSize={40}
                      onClick={() => { setRecommend("no"); }}
                    />
                  )}
                  <span className={`text-sm text-gray-500 ${recommend === "no" ? "text-red-400" : "group-hover:text-red-400"}`}>
                    No
                  </span>
                </div>

                <div className="flex flex-row justify-start items-center group">
                  {recommend === "yes" ? (
                    <Icon
                      className="text-green-400 block"
                      icon={"fa-solid:thumbs-up"}
                      fontSize={40}
                      onClick={() => { setRecommend("yes"); }}
                    />
                  ) : (
                    <Icon
                      className="text-green-400 block"
                      icon={"fa-regular:thumbs-up"}
                      fontSize={40}
                      onClick={() => { setRecommend("yes"); }}
                    />
                  )}
                  <span className={`text-sm text-gray-500 ${recommend === "yes" ? "text-green-400" : "group-hover:text-green-400"}`}>
                    Yes
                  </span>
                </div>
              </div>
            </div>


            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-row items-center">
                <div className="flex flex-col space-y-1.5 grow">
                  <label
                    htmlFor="Safety"
                    className="text-xl font-bold m-0 p-0"
                  >
                    Praise
                  </label>
                  <span className="text-xs text-gray-600 relative -top-2">
                    What did you like about our service?
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-4 grid-rows-2 grid-flow-row place-content-center gap-4 w-full">
                {
                  ["option1", "option2", "option3", "option4", "option5", "option6", "option7"].map((option,index) => {
                    return (
                      <div key={index} onClick={() => {praiseOptions.includes(option) ? setPraiseOptions(praiseOptions.filter(p => p !== option)) : setPraiseOptions([...praiseOptions,option])}} className={`px-2 py-1/2 m-0 outline rounded-full text-center w-fit h-fit outline-green-500 hover:bg-green-400 cursor-pointer ${praiseOptions.includes(option) ? "bg-green-400" : ""}`}>
                        <span className="text-sm font-semibold flex items-center pb-1" >{option}</span>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-row items-center">
                <div className="flex flex-col space-y-1.5 grow">
                  <label
                    htmlFor="Safety"
                    className="text-xl font-bold m-0 p-0"
                  >
                    Additional Comments
                  </label>
                  <span className="text-xs text-gray-600 relative -top-2">
                    Your feedback helps us improve our service.
                  </span>
                </div>
                <div className={`text-sm ${1 ? "block" : "hidden"}`}></div>
              </div>
              <Input
                placeholder={"Write your suggestion here"}
                type={"text"}
                onChange={(e) => {setSuggestion(e.target.value);}}
              ></Input>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button onClick={() => {
          if(safetyRating === 0 || communicationRating === 0 || recommend === "na" || praiseOptions.length === 0 || suggestion === "") {
            toast("Please fill in all the fields", {
              className:"group-[.toaster]:border-red-500",
              description: "Please fill in all the fields",
              duration: 3000,
              closeButton: true,
            });
          }
          else{

            toast("Response Recorded", {
              className:"group-[.toaster]:border-green-500",
              //description will be in the form of json code
              description: JSON.stringify({
                safetyRating: safetyRating,
                communicationRating: communicationRating,
                recommend: recommend,
                praiseOptions: praiseOptions,
                suggestion: suggestion,
              }),
              duration: 20000,
              closeButton: true,
            });
          }
        }}>Submit</Button>
      </CardFooter>
    </Card>
    
  );
};

export default Rating;
