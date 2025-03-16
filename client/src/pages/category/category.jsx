import CategoryCard from "../../components/CategoryCard";
import Wrapper from "../../components/Wrapper";

function Category() {
  const categories = [
    "Docker",
    "Linux",
    "Code",
    "uncategorized",
    "NodeJs",
    "React",
    "Next.js",
    "SQL",
    "Django",
    "DevOps",
    "bash",
  ];
  return (
    <Wrapper
      sectionHeading="Explore Quiz Categories"
      sectionDescription="Test your knowledge in various tech domains! Choose a category and start your journey to becoming a tech expert."
    >
      {categories.map((cat) => (
        <CategoryCard
          key={cat}
          img={`../../../public/assets/${cat}.webp`}
          categoryName={cat}
        />
      ))}
    </Wrapper>
  );
}

export default Category;
