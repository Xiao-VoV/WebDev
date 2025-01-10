import { Link } from "react-router-dom";
import Search from "./Search";
const MainCategories = () => {
  return (
    <div className="hidden  md:flex bg-white  rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-between gap-8">
      {/* 分类链接 */}
      <div className=" flex items-center justify-between flex-wrap">
        <Link
          to="/post"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          所有文章
        </Link>
        <Link to="/post" className="hover:bg-blue-50 rounded-full px-4 py-2">
          前端开发
        </Link>
        <Link to="/post" className="hover:bg-blue-50 rounded-full px-4 py-2">
          后端开发
        </Link>
        <Link to="/post" className="hover:bg-blue-50 rounded-full px-4 py-2">
          AI
        </Link>
        <Link to="/post" className="hover:bg-blue-50 rounded-full px-4 py-2">
          Rust
        </Link>
        <Link to="/post" className="hover:bg-blue-50 rounded-full px-4 py-2">
          DevOps
        </Link>
        <Link to="/post" className="hover:bg-blue-50 rounded-full px-4 py-2">
          杂项
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <span className="text-xl font-medium">丨</span>
        {/* 搜索框 */}
        <Search />
      </div>
      {/* <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
                width={20}
                height={20}
                >
                    <circle cx={10.5} cy={10.5} r={7.5}/>
                    <line x1={16.5} y1={16.5} x2={22} y2={22}/>
                </svg>
                <input type="text" placeholder="搜索文章" className="bg-transparent " />
            </div> */}
    </div>
  );
};

export default MainCategories;
