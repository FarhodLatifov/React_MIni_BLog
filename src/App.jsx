import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/ui/MyModal/MyModal";
import Button from "./components/ui/button/Button";
const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      description:
        "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.",
    },
    {
      id: 2,
      title: "Python",
      description:
        "Python - мультипарадигменный высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ.",
    },
    {
      id: 3,
      title: "Kotlin",
      description:
        "Kotlin - кроссплатформенный, статически типизированный, объектно-ориентированный язык программирования, работающий поверх Java Virtual Machine и разрабатываемый компанией JetBrains. Также компилируется в JavaScript и в исполняемый код ряда платформ через инфраструктуру LLVM.",
    },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <div className="w-[800px] m-auto">
        <Button onClick={() => setModal(!modal)} m="mt-3">
          Создать пост
        </Button>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} length={posts.length} />
        </MyModal>
        <hr className="my-4 mx-0" />
        <PostFilter filter={filter} setFilter={setFilter} />
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список Постов 1"
        />
      </div>
    </>
  );
};

export default App;
