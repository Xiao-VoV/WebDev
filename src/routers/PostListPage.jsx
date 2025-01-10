import PostListItem from "../components/PostListItem";
import SideMenu from "../components/SideMenu";
import { useState } from "react";
const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-xl">博客归档</h1>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "查找"}
      </button>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="">
          <PostListItem />
        </div>
        <div className={`${open ? "block" : "hidden"}`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};
export default PostListPage;
