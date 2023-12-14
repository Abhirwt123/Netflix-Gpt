const DevicesCard = ({ title, subTitle, img, index }) => {
  return (
    <div className="dev-wrapper border-gray-600 py-16 border-b-8">
      <div
        className="box w-10/12 m-auto flex  items-center justify-center"
        style={{ flexDirection: index % 2 === 0 ? "" : "row-reverse" }}
      >
        <div className="text-wrap">
          <div className="title">
            <p className="text-white text-4xl font-bold py-4">{title}</p>
            <p className="text-white text-xl font-bold">{subTitle}</p>
          </div>
        </div>
        <div className="video-wrap">
          <img src={img} alt="device" />
        </div>
      </div>
    </div>
  );
};
export default DevicesCard;
