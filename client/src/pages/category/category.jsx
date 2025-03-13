import CategoryCard from "../../components/CategoryCard";
import Wrapper from "../../components/Wrapper";

function Category() {
  return (
    <Wrapper
      sectionHeading="Explore Quiz Categories"
      sectionDescription="Test your knowledge in various tech domains! Choose a category and start your journey to becoming a tech expert."
    >
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </Wrapper>
  );
}

export default Category;
