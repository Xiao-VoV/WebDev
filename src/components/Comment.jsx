import Image from "./Image";
const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src={"userImg.jpeg"}
          className={"w-10 h-10 rounded-full object-cover"}
          w="40"
        />
        <span className="font-medium">Xiao</span>
        <span className="text-sm text-gray-500">2 天前</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure porro
          doloremque quia provident asperiores quod rerum amet? Ratione,
          necessitatibus debitis? Nostrum voluptatum itaque ipsum odio sit,
          commodi adipisci fugiat quasi obcaecati recusandae provident
          asperiores earum dolores, enim hic rerum reiciendis.
        </p>
      </div>
    </div>
  );
};
export default Comment;
