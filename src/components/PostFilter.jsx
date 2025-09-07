import Select from "./ui/select/Select";
import Input from "./ui/input/Input";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          {
            value: "title",
            name: "По названия",
          },
          {
            value: "description",
            name: "По описанию",
          },
        ]}
      />
    </div>
  );
};

export default PostFilter;
