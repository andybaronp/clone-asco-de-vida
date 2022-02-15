import Posts from "./Posts";
import TagsCategorys from "./TagsCategorys";

const Layout = () => {
  return (
    <div className="flex   m-auto w-4/5">
      <main>
        <Posts />
      </main>
      <section>
        <TagsCategorys />
      </section>
    </div>
  );
};

export default Layout;
