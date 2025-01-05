import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BreadCrumb */}
      <div className="flex gap-4">
        <Link to="/" >首页</Link>
        <span className="font-bold">·</span>
        <span className="text-blue-800">博客和文章</span>
      </div>
      {/* 博客首页介绍*/}
      <div className="flex items-center justify-between">
        {/* 标题 */}
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">Lorem ipsum dolor, sit amet consectetur</h1>
          <p className="mt-8 text-md md:text-lg">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Dignissimos ut eligendi 
            ducimus! Et ex dolorum perspiciatis
          </p>
        </div>
        {/* 动画按钮 */}
        <Link to='write' className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animateButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="m 100,100 m -75,0 a 75,75 0 1 1 150,0 a 75,75 0 1 1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">分享你的故事·</textPath>
              <textPath href="#circlePath" startOffset="50%">书写你的想法·</textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
              width={50}
              height={50}
            >
              <line x1="6" y1={18} x2={18} y2={6}/>
              <polyline points="9 6 18 6 18 15"/>
            </svg>
          </button>

        </Link>
      </div>
    </div>
  );
};
export default Homepage;