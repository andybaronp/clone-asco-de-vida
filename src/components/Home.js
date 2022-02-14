import Posts from "./Posts";
import { Link } from "react-router-dom";
import TagsCategorys from "./TagsCategorys";
import Button from "./Button";
import logoadv from "../assets/logoadv.png";
const Home = () => {
  return (
    <>
      <div className="flex  h-20 mb-6 justify-between  items-center px-3 mt-2">
        <div className=" self-start basis-1/3">
          <img src={logoadv} alt="al" className=" h-36" />
        </div>
        <div className="flex basis-2/3 h-8 flex-nowrap flex-col mr-4">
          <div className="w-2/3 self-end">
            <p className="text-sm text-white  italic">
              <span className="font-semibold text-orange-600">
                {" "}
                ¡ESTO ES UN CLON!
              </span>{" "}
              Asco de vida recoge anécdotas que han arruinado tu día. ¿Por qué
              guardártelo para ti cuando puedes sacar una sonrisa a miles de
              personas? Tu desgracia puede ser nuestra gracia.
            </p>
          </div>
          <div className="self-end">
            <Button variant="bg-black">
              <Link to="/post">Publicar</Link>
            </Button>
            <Button>
              <Link to="/">Moderar</Link>
            </Button>
            <Button>
              <Link to="/">Aleatorio</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex  ">
        <Posts />
        <TagsCategorys />
      </div>
    </>
  );
};

export default Home;
