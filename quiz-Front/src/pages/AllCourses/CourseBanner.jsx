/* eslint-disable react/prop-types */

const img = ({ banner }) => {
  const styles = {
    background: `linear-gradient(90deg, rgba(48, 97, 221, 0),rgba(48, 97, 221, 0)), url(${banner}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    objectFit: "cover",
  };
  return (
    <>
      <div
        className={` w-full md:h-[100vh] h-[30vh] duration-300`}
        style={styles}
      ></div>
    </>
  );
};

export default img;
