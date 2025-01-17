import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import sohag from "../../../assets/profile/sohag.jpg";
import omit from "../../../assets/profile/Omit.jpg";

const Leaderboard = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [liveUsers, setLiveUsers] = useState([]); // In case you want to implement the live leaderboard

  // Fetch leaderboard data
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch(
          "https://quiz.bd.coopersbakery.com/api/v1/users/leaderboard"
        );
        const result = await response.json();
        setAllUsers(result.data);
      } catch (error) {
        console.error("Failed to fetch leaderboard data:", error);
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <HelmetProvider>
      <div className="md:container mx-auto">
        <Helmet>
          <title>Leaderboard - Live & All</title>
        </Helmet>

        {/* Leaderboard Header */}
        <h1 className="text-2xl font-bold text-center mb-6">Leaderboard</h1>

        {/* Tabs for Live and All */}

        <Tabs>
          <TabList className="flex justify-center space-x-6 text-lg font-semibold mb-4 border-b">
            <Tab selectedClassName="border-b-2 border-[#008081] text-[#008081]">
              <span className="inline-flex items-center">⭐ Live</span>
            </Tab>
            <Tab selectedClassName="border-b-2 border-[#008081] text-[#008081]">
              <span className="inline-flex items-center">💥 All</span>
            </Tab>
          </TabList>

          {/* TabPanel for Live Leaderboard (You can implement this later) */}
          {/* TabPanel for Live Leaderboard */}
          <TabPanel>
            <div className="leaderboard bg-custom-gradient p-4 rounded-lg shadow-lg">
              <div className="flex justify-center  text-center">
                <div className="text-xl pt-10 mx-4">
                  <p className="text-[#ffcc00] font-bold">2nd</p>
                  <img
                    src={sohag}
                    alt="Jacky"
                    className="mx-auto rounded-full w-[80px] h-[80px]"
                  />
                  <div className="bg-white p-2 rounded-md">
                    <p className="text-lg font-bold">Jacky</p>
                    <p className="text-base font-medium bg-[#1FB2A8] pt-1 rounded">
                      Points: ⭐125035
                    </p>
                  </div>
                </div>
                <div className="text-xl">
                  <p className="text-[#ffcc00] font-bold">1st</p>
                  <img
                    src={sohag}
                    alt="Alex Costa"
                    className="mx-auto rounded-full w-[100px] h-[100px]"
                  />
                  <div className="bg-white p-2 rounded-md md:h-[90px] h-[115px] relative w-full">
                    <p className="text-lg font-bold">Chery</p>
                    <p className="text-base font-medium  mt-5  bg-[#1FB2A8] pt-1 rounded">
                      <span>Points:</span> <span>⭐125035</span>
                    </p>
                  </div>
                </div>
                <div className="text-xl pt-10 mx-4">
                  <p className="text-[#ffcc00] font-bold">3rd</p>
                  <img
                    src={sohag}
                    alt="Chery Foo"
                    className="mx-auto rounded-full w-[80px] h-[80px]"
                  />
                  <div className="bg-white p-2 rounded-md">
                    <p className="text-lg font-bold">Chery</p>
                    <p className="text-base font-medium bg-[#1FB2A8] pt-1 rounded">
                      Points: ⭐125035
                    </p>
                  </div>
                </div>
              </div>
              {/* Other rankings */}
              <div className="mt-6">
                {[4, 5, 6].map((rank, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 my-4 rounded-lg shadow-custom-shadow flex justify-start items-center"
                  >
                    <p className="px-1 mr-2 rounded-full bg-slate-400">
                      {rank}.
                    </p>
                    <div className="flex justify-between items-center w-full">
                      <img
                        src={sohag}
                        alt="Alex Costa"
                        className="w-12 h-12 rounded-full"
                      />
                      <p>Alex Costa</p>
                      <p>Points: ⭐115035</p>
                      <p>Strength: 💥42.27</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          {/* TabPanel for All Leaderboard */}
          <TabPanel>
            <div className="leaderboard bg-custom-gradient p-4 rounded-lg shadow-lg">
              <div className="flex justify-center text-center">
                {/* First three users */}
                {allUsers.slice(0, 3).map((user, index) => (
                  <div
                    key={user._id}
                    className={`text-xl ${index === 1 ? "pt-0" : "pt-10"} mx-4`}
                  >
                    <p className="text-[#ffcc00] font-bold">
                      {index + 1}
                      {index === 0 ? "st" : index === 1 ? "nd" : "rd"}
                    </p>
                    <img
                      src={omit} // Replace with user image if available
                      alt={user.fullName}
                      className={`mx-auto rounded-full ${
                        index === 1
                          ? "w-[100px] h-[100px]"
                          : "w-[80px] h-[80px]"
                      }`}
                    />
                    <div className="bg-white p-2 rounded-md">
                      <p className="text-lg font-bold">{user.fullName}</p>
                      <p className="text-base font-medium bg-[#1FB2A8] pt-1 rounded">
                        Points: ⭐{user.point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Other rankings */}
              <div className="mt-6">
                {allUsers.slice(3).map((user, idx) => (
                  <div
                    key={user._id}
                    className="bg-white p-4 my-4 rounded-lg shadow-custom-shadow flex justify-start items-center"
                  >
                    <p className="px-1 mr-2 rounded-full bg-slate-400">
                      {idx + 4}.
                    </p>
                    <div className="flex justify-between items-center w-full">
                      <img
                        src={omit} // Replace with user image if available
                        alt={user.fullName}
                        className="w-12 h-12 rounded-full"
                      />
                      <p>{user.fullName}</p>
                      <p>Points: ⭐{user.point}</p>
                      <p>Strength: 💥{user.strength}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </HelmetProvider>
  );
};

export default Leaderboard;
