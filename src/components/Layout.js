import Posts from "./Posts";
import TagsCategorys from "./TagsCategorys";

const Layout = () => {
  return (
    <div className="flex  flex-col  sm:flex-row  ">
      <main className="flex justify-center ">
        <Posts />
      </main>
      <section className="w-full">
        <TagsCategorys />
      </section>
    </div>
  );
};

export default Layout;
