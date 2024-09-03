// import experienImg from "../../assets/experience.jpg";
import img from "../../assets/quiz/banner3.jpg";

const Experience = () => {
  return (
    <div className="px-20 flex items-center justify-end relative shadow-2xl shadow-slate-700 py-10">
      <div className="">
        <p className="w-[400px]  absolute left-40">
          <span className="text-5xl font-semibold capitalize">
            {" "}
            We have 10 Years Experience of iT Service
          </span>
          {/* <span className="">
            Web3Soft Solution is a professional web design, Software
            Development, Brand SMS Marketing, Social Media Marketing, Search
            Engine Marketing, Email Marketing and Freelancing/Outsourcing
            Training company. Since 2014 Web3Soft Solution have been providing
            the best web development solutions for corporate or individuals
            interested in the country.
          </span> */}
        </p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Experience;
