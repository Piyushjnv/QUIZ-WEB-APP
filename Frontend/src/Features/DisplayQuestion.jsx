import React from "react";

function DisplayQuestion({question}) {
  return (
    <div className=" w-full  flex flex-col box-border">

        {/*  question and option  */}
      <div className=" border-2 mb-2 ">

        <div className=" border rounded m-5">{question.question}</div>
        <div className=" border rounded flex flex-col ">
          <div className="flex text-center flex-row  h-15 border-2 m-2">
            <input
              type="radio"
              id="option1"
              name="option"
              placeholder={`hii`}
              className=" m-2 border rounded"
            />
            <label className=" " htmlFor="option1">hii {question.option1}</label>
          </div>
          <div>
            {" "}
            <input
              type="radio"
              id="option2"
              name="option"
              placeholder=""
              className="  border rounded"
            />
            <label htmlFor="option2">{question.option2}</label>
          </div>
          <div>
            {" "}
            <input
              type="radio"
              id="option3"
              name="option"
              placeholder=""
              className="  border rounded"
            />
            <label htmlFor="option3">{question.option3}</label>
          </div>
          <div>
            <input
              type="radio"
              id="option4"
              name="option"
              placeholder=""
              className="  border rounded"
            />
            <label htmlFor="option4">{question.option4}</label>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default DisplayQuestion;
