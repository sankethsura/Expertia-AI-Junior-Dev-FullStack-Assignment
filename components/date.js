import React from "react";

const Date1 = () => {
  const date = new Date();
  let suffix;
  if (date.toString().split(" ")[2] == "01") {
    suffix = "st";
  } else if (date.toString().split(" ")[2] == "02") {
    suffix = "nd";
  } else if (date.toString().split(" ")[2] == "03") {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return (
    <div>
      <div className="text-sm font-bold my-8">
        Tasks for {date.toString().split(" ")[2]}
        {suffix} {date.toString().split(" ")[1]} {date.toString().split(" ")[3]}{" "}
        :
      </div>
    </div>
  );
};

export default Date1;
