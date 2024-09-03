import React from "react";

const HelpCenter = () => {
  return (
    <div className="md:flex justify-between">
      <div className="w-full">
        <h1 className="text-center font-semibold">Frequently Ask Questions</h1>
        <div>
          <div className="collapse collapse-arrow bg-base-200 border border-slate-900">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium ">
              HOW LONG DOES IT TAKE FOR ME TO RECEIVE MY ORDER?
            </div>
            <div className="collapse-content">
              <p>
                Generally we do deliver the product within 3-5 days, except for
                Pre-orders, and any unwanted condition appears. We do
                communicate regarding our delivery time with our customers over
                the phone.{" "}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 border border-slate-900">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              HOW DO I TRACK THE STATUS OF MY ORDER?
            </div>
            <div className="collapse-content">
              <p>
                It’s available in “My Account” section. You can find it in the
                Header section on Desktop, and in the Mobile Menu on Smart
                Phones
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 border border-slate-900">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              HOW DO I TRACK THE STATUS OF MY ORDER?
            </div>
            <div className="collapse-content">
              <p>
                It’s available in “My Account” section. You can find it in the
                Header section on Desktop, and in the Mobile Menu on Smart
                Phones
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <h1 className="text-center font-semibold">Your Opinion/ Questions</h1>
        <div className="  bg-base-200 w-[75%] mx-auto ">
          <div className="">
            <div className=" w-full  shadow-2xl bg-base-100">
              <form className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email / Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email / Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Opinion / Question
                    </span>
                  </label>
                  <textarea
                    className="border rounded-md"
                    id="txtid"
                    name="txtname"
                    rows="4"
                    cols="50"
                    maxlength="200"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
