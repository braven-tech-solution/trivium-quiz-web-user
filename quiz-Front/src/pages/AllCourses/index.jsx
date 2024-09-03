import { useEffect, useState } from "react";
import img from "../../assets/courses/BI.jpg";
import { products } from "../../data/data";
import CourseCard from "./CourseCard";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
const AllCourses = () => {
  // const [trainingCourses, setTrainingCourses] = useState([]);
  // useEffect(() => {
  //   const courseProduct = products.filter(
  //     (product) => product.category.name === "course"
  //   );
  //   setTrainingCourses([...trainingCourses, ...courseProduct]);
  // }, []);
  const { data: trainingCourses = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/product`);
      const data = await res.json();

      return data.data.products.filter(
        (product) => product.category.name === "course"
      );
    },
  });

  return (
    <div className="pt-28 container mx-auto">
      <h1 className="md:text-6xl text-xl my-10 text-[#9619B0] font-bold">
        Courses
      </h1>
      <p className="md:w-[50%] w-full">
        We offer all the trendy courses that are in demand in the global market.
        In addition, you are getting lab facilities where high-end computers
        with the required configuration are ready to facilitate your learning.
        After class, you can practice the topic in our labs to grow your skills.
        The courses are designed to make you confident throughout the learning
        journey.
      </p>
      <div className="text-center md:w-[60%] w-full mx-auto">
        <h1 className="md:text-6xl text-2xl text-[#DFD0B5] font-semibold mb-4 mt-6 ">
          Admission Is Going On
        </h1>
        <p className="">
          We have designed our course list with the demanding skills in the
          local and global market. From the list, you can pick any online or
          offline course according to your preference.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6  my-10 mx-auto justify-center">
          {trainingCourses?.map((course) => (
            <CourseCard key={course?.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
