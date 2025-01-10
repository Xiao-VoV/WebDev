import Search from "./Search";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">搜索</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">过滤</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value={"newest"}
            className="appearence-none w-4 h-4 border-[1.5px] border-blue-800 rounded-full cursor-pointer checked:bg-blue-800"
          />
          最新
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value={"popular"}
            className="appearence-none w-4 h-4 border-[1.5px] border-blue-800 rounded-full cursor-pointer checked:bg-blue-800"
          />
          最多阅读
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value={"mostComment"}
            className="appearence-none w-4 h-4 border-[1.5px] border-blue-800 rounded-full cursor-pointer checked:bg-blue-800"
          />
          评论最多
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">分类</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to={"/"}>
          全部
        </Link>
        <Link className="underline" to={"/"}>
          前端
        </Link>
        <Link className="underline" to={"/"}>
          后端
        </Link>
        <Link className="underline" to={"/"}>
          AI
        </Link>
        <Link className="underline" to={"/"}>
          DevOps
        </Link>
        <Link className="underline" to={"/"}>
          杂记
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
