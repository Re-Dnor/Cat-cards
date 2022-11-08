import CatCard from "./CatCard";
import { propertiesKitty } from "./slice/cats-slice";

type Props = {
  cats: propertiesKitty[];
};

function AllCats({ cats }: Props) {
  return (
    <>
      {cats.map((cat: propertiesKitty) => <CatCard key={cat._id} cat={cat}/>)}
    </>
  );
}

export default AllCats;