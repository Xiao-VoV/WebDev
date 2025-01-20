import { useUser } from "@clerk/clerk-react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
const Write = () => {
  // const { isLoaded, isSignedin } = useUser();
  // if (!isLoaded) return <div>Loading...</div>;

  // if (isLoaded && !isSignedin) return <div>Sign in to write</div>;

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">创建新文章</h1>
      <form className="flex flex-col gap-6  flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          添加封面图片
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="文章标题"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            选择一个分类
          </label>
          <select
            name="分类"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">其他</option>
            <option value="frontend">前端</option>
            <option value="backend">后端</option>
            <option value="AI">AI</option>
            <option value="Rust">Rust</option>
            <option value="notes">杂记</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="摘要"
          className="p-2 rounded-xl bg-white shadow-md"
        ></textarea>
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-2 p-2 w-36">
          确定
        </button>
      </form>
    </div>
  );
};
export default Write;
