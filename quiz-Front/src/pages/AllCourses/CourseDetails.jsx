import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ultimateBanner from "../../assets/courses/ultimateBanner.jpg";
import CoursePlanCard from "../../Components/CoursePlan/CoursePlanCard";
import RoadmapLi from "./RoadmapLi";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
import { useProducts } from "../../hooks/useProducts";
import Loading from "../../Components/common/Loading";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState();
  const { products } = useProducts();
  // console.log(products.products);
  useEffect(() => {
    if (products.totalProducts) {
      const course = products?.products?.find((course) => course._id == id);
      setCourse(course);
    }
  }, [id, products.totalProducts]);
  // console.log(course);
  // const { data: course = [], refetch } = useQuery({
  //   queryKey: ["course"],
  //   queryFn: async () => {
  //     const res = await fetch(`${baseURL}/product`);
  //     const data = await res.json();

  //     return data.data.products?.find((course) => course.id == id);
  //   },
  // });

  const handleCoursePath = (id) => {
    navigate(`/course/${id}`);
  };
  // if (!course) return <Loading></Loading>;
  return (
    <>
      <div className="relative bg-white">
        {/* Apply a semi-transparent overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={ultimateBanner}
          alt=""
          className="w-full h-[70vh] object-cover"
        />

        <div className="absolute top-[50%] w-full transform[-translate-x-1/2 ] text-center bg-[#0866FF]/50 rounded-md p-1 text-white">
          <h1 className="text-5xl font-extrabold">{course?.name}</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-10 grid md:grid-cols-12 grid-cols-8 gap-3">
          <div className="col-span-7 row-span-1  mx-auto shadow-lg rounded shadow-black">
            <img src={course?.img} alt="" className="w-full h-full  p-2" />
          </div>

          <div className="border border-black col-span-4 ">
            {products &&
              products?.products
                ?.filter((product) => product.category.name === "course")
                ?.map((course) => (
                  <div
                    onClick={() => handleCoursePath(course._id)}
                    key={course._id}
                    className="flex items-center w-full border-b border-black border-spacing-1 pb-2 pl-2
                 cursor-pointer hover:bg-[#0866FF] hover:font-bold"
                  >
                    <h1 className="w-full text-black hover:text-white">
                      {course.name}
                    </h1>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {/* details */}
      <div className="container mt-6">
        <h1 className="capitalize py-10 text-3xl font-semibold text-[#0866FF]">
          FAQ Answers (Queries){" "}
        </h1>
        {course?.queries && <h1>{course?.queries}</h1>}
      </div>
      <div className="container mt-10 capitalize">
        <h1 className="capitalize py-10 text-3xl font-semibold text-[#0866FF]">
          How can I learn {course?.name}? (Roadmap)
        </h1>
        {course &&
          course?.roadmap
            ?.split(", ")
            ?.map((item, idx) => (
              <RoadmapLi key={idx} item={item} serial={idx} />
            ))}
      </div>
      <div className="container mt-10">
        <h1 className="capitalize py-10 text-3xl font-semibold text-[#0866FF]">
          We Will guide you for the Throughout Process
        </h1>
        {course && <CoursePlanCard course={course} />}
      </div>
    </>
  );
};

export default CourseDetails;
