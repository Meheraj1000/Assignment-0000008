/* eslint-disable react/prop-types */


const Banner = ({title,subtitle,button}) => {
    return (
        <div
  className="hero min-h-screen absolute"
  style={{backgroundImage: "url(https://i.ibb.co.com/dtKGxwg/360-F-979901098-UFq-GYOVw0x6-Fd-DVWai1-PNxj-ZLkad-Ej-R2.jpg)",}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">
        {subtitle}
      </p>
      <button className="btn btn-primary">{button}</button>
    </div>
  </div>
</div>
    );
};

export default Banner;