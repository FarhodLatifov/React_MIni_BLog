import Button from "./ui/button/Button";
const PostItem = ({ post, title, remove }) => {
  return (
    <div className="flex p-4 border-2 border-teal-500 mt-4 justify-between items-center">
      <div>
        <strong>
          {post.id}.{title}
        </strong>
        <div>{post.description}</div>
      </div>
      <div>
        <Button type="button" onClick={() => remove(post)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
