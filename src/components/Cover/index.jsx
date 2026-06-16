import CategoryButton from "../ui/CategoryButton";
import SearchBar from "../ui/SearchBar";

export default function Cover() {
  return (
    <div className="cover">
      <h1 className="title">
        <span className="logo">PixErn </span>- Search and Download free images
      </h1>

      <SearchBar />

      <CategoryButton />
    </div>
  );
}
