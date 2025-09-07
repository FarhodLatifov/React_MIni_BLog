import { useState } from "react";
import Button from "./ui/button/Button";
import Input from "./ui/input/Input";
const PostForm = ({ create, length }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: length + 1,
    };
    create(newPost);
    setPost({ title: "", description: "" });
  };
  return (
    <form>
      <Input
        placeholder="Название поста..."
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        placeholder="Описание поста..."
        type="text"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <Button type="button" onClick={addNewPost}>
        Создать
      </Button>
    </form>
  );
};

export default PostForm;
