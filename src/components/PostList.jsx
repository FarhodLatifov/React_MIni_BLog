import PostItem from "./PostItem";
const PostList = ({posts, title, remove}) => {
  if(!posts.length){
    return (
      <h1 className="text-3xl font-bold text-center">
        Посты не найдены!
      </h1>
    )
  }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">{title}</h1>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          title={post.title}
          remove={remove}
        />
      ))}
    </div>
  );
};

export default PostList;
