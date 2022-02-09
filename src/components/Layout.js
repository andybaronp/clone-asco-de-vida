import Header from "./Header";
import Posts from "./Posts";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto h-screen  flex  ">
        <Posts />
      </div>
      ;
    </>
  );
};

export default Layout;
