import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { courses } = portfolioData;  return (
    <div>
      <SectionTitle title="Courses" />
      <div className="flex py-10 gap-20 sm:flex-col">

        <div className="flex flex-col gap-10 border-1-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((course, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40"
                    : "text-white"
                } `}
              >
                {course.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col ">
        
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {courses[selectedItemIndex]?.title || ""}
            </h1>

            <p className="text-white">
            {courses[selectedItemIndex]?.description || ""}
            </p>
          </div>
          <img src={courses[selectedItemIndex].image} alt="" className="h-52 w-82" />
        </div>
      </div>
    </div>
  );
}
//1:45:15
export default Courses;
