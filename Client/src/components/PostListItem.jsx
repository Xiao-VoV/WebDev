import Image from "./Image";
import { Link } from "react-router-dom";
const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/** 封面图片 */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className={"rounded-2xl object-cover"}
          w={735}
        />
      </div>
      {/** 内容 */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/text" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
          assumenda?
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>作者</span>
          <Link className="text-blue-800">Xiao</Link>
          <span>发布于</span>
          <span>2天前</span>
          <Link className="text-blue-800">web dev</Link>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla atque,
          praesentium ex quasi quibusdam esse repellat animi culpa. Eveniet
          tempora ut odit debitis soluta est, dolorem inventore aliquid
          obcaecati asperiores temporibus quam laboriosam quibusdam unde
          suscipit eius cum molestias. Dolores inventore quo nobis maiores,
          dolor dicta voluptatem ipsa at maxime.
        </p>
        <Link to={"/test"} className="undetlined text-blue-800 text-sm">
          阅读更多
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
