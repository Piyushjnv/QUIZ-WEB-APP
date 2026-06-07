import React, { useState } from "react";
import Api from "../../API/Api";

function Score({ score, totalquestion, correctId, IncorrectID, topic, timeTaken }) {
    const userid = JSON.parse(localStorage.getItem("user"))._id;
    const username = JSON.parse(localStorage.getItem("user")).fullname
;
    const Score = {
        userId: userid,
        Score: score,
        totalq: totalquestion,
        correctQID: correctId,
        IncorrectQID: IncorrectID,
        name: username,
        topic : topic,
        timeTaken: timeTaken
    };
    // console.log(score, totalquestion, correctId, IncorrectID);
    
    if (!userid) return;
    Api.post("/user/score", Score).then((score) => {
        if (score.data.success == true) {
            // console.log(" you win ");
        }
    });
    return 
}

export default Score;
