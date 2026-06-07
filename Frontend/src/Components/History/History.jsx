import React, { useEffect, useState } from "react";
import Api from "../../API/Api";
// import { useNavigate } from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";

function History() {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("login") === "true") {
            Api.post("/visit/Userhistory", {
                id: JSON.parse(localStorage.getItem("user"))._id,
            }).then((res) => {
                setHistory(res.data.data);
                // console.log("history at history component ", res.data.data);
            });
        }
    }, []);

    return (
        <div className=" mt-10 mb-10">
            {history.map((item) => {
                return (
                    <div
                        key={item._id}
                        className="max-w-8/10 mx-auto border flex flex-row border-slate-300 rounded-lg p-3 pb-2 pt-2 mb-4"
                    >
                        <div className="basis-3/4 flex-row  ">
                            <h2 className=" text-2xl font-bold text-[#6becf5]">
                                {" "}
                                {item.topic?.toUpperCase() || " Topic"}{" "}
                            </h2>
                            <div className=" flex flex-col ">
                                <p>Total question : {item.totalQues}</p>
                                <p>
                                    {" "}
                                    Score:{" "}
                                    <span className="font-bold text-[#73f073]">
                                        {" "}
                                        {item.Score}{" "}
                                    </span>
                                </p>
                                <p> Time taken: {item?.timeTaken || "NULL"}</p>
                                {/* <p>Your Answer: {item.totalQues}</p> */}
                            </div>
                            {/* <p>Correct Answer: {item.correctAnswer}</p> */}
                        </div>
                        <div
                           
                            className=" basis-1/4  flex flex-col "
                        >
                            <div
                             onClick={() =>
                                navigate("/history/testagain", {
                                    state: {
                                        topic: item.topic?.toUpperCase(),
                                        ID: item._id,
                                        wrongattempt: false,
                                    },
                                })
                            }

                            className=" text-sm cursor-pointer border-2 w-20 mb-5 border-[#ff0000c2] text-[#6becf5] bg-[#8892008a] font-bold  rounded-lg text-center p-[2px]">
                                Test Again
                            </div>

                            <div
                                onClick={() => {
                                    navigate("/history/testagain", {
                                        state: {
                                            ID: item._id,
                                            topic: item.topic?.toUpperCase(),
                                            wrongattempt: true,
                                        },
                                    });
                                }}
                                className=" text-sm cursor-pointer border-2 w-20 border-[#d8d400d8] bg-[#ff000080] font-bold  rounded-lg text-center p-[1px]"
                            >
                                Wrong Question{" "}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default History;
