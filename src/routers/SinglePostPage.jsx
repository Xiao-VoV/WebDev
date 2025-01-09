import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/** 文章描述 */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            excepturi fuga rerum non!
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>作者</span>
            <Link className="text-blue-800">Xiao</Link>
            <span>2 天前</span>
            <Link className="text-blue-800">Web Dev</Link>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            dicta qui ex porro vitae. Repellat obcaecati numquam minima
            exercitationem doloribus beatae culpa! Iste tempore fugit obcaecati
            accusantium laborum magni quas.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            src={"postImg.jpeg"}
            w={600}
            className={"rounded-2xl object-cover"}
          />
        </div>
      </div>
      {/** 文章內容 */}
      <div className="flex flex-col md:flex-row gap-8">
        {/** 文章 */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            neque, laudantium aspernatur quas eius cupiditate itaque. Animi
            suscipit, accusantium culpa, quibusdam, magni harum magnam voluptas
            est iste mollitia cupiditate dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            neque, laudantium aspernatur quas eius cupiditate itaque. Animi
            suscipit, accusantium culpa, quibusdam, magni harum magnam voluptas
            est iste mollitia cupiditate dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            neque, laudantium aspernatur quas eius cupiditate itaque. Animi
            suscipit, accusantium culpa, quibusdam, magni harum magnam voluptas
            est iste mollitia cupiditate dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            nobis numquam illo perspiciatis facilis. Veniam, quos asperiores.
            Deserunt, reprehenderit beatae exercitationem non laudantium quae
            aspernatur. Temporibus, molestias ullam! Molestiae quidem
            consequuntur quas! Ullam quos veniam suscipit debitis, asperiores
            quasi dolores ipsum, eveniet aspernatur nihil distinctio. Doloremque
            in, quae perferendis quidem expedita quisquam fuga officia! Sit
            doloribus tempora fugit maxime cupiditate voluptate facere ex, unde
            voluptatum nihil esse ab iusto culpa neque autem magnam voluptates
            optio dicta dolor corporis quasi exercitationem ullam, aperiam
            asperiores. Eius, sequi placeat quisquam ullam illo dignissimos
            voluptatibus atque odio quis saepe deserunt quae accusantium eos et.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            nobis numquam illo perspiciatis facilis. Veniam, quos asperiores.
            Deserunt, reprehenderit beatae exercitationem non laudantium quae
            aspernatur. Temporibus, molestias ullam! Molestiae quidem
            consequuntur quas! Ullam quos veniam suscipit debitis, asperiores
            quasi dolores ipsum, eveniet aspernatur nihil distinctio. Doloremque
            in, quae perferendis quidem expedita quisquam fuga officia! Sit
            doloribus tempora fugit maxime cupiditate voluptate facere ex, unde
            voluptatum nihil esse ab iusto culpa neque autem magnam voluptates
            optio dicta dolor corporis quasi exercitationem ullam, aperiam
            asperiores. Eius, sequi placeat quisquam ullam illo dignissimos
            voluptatibus atque odio quis saepe deserunt quae accusantium eos et.
          </p>
        </div>
        {/** 侧边菜单 */}
        <div className="px-4 h-max sticky top-12">
          <h1 className=" mb-4 text-sm font-medium">作者</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={"userImg.jpeg"}
                w={48}
                h={48}
                className={"w-12 h-12 rounded-full object-cover"}
              />
              <Link className="text-blue-800">Xiao</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src={"facebook.svg"} />
              </Link>
              <Link>
                <Image src={"instagram.svg"} />
              </Link>
            </div>
          </div>
          <PostMenuActions />
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
          <h1 className="mt-8 mb-4 text-sm font-medium">搜索</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};
export default SinglePostPage;
