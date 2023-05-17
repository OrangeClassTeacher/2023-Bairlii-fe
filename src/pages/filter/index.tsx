import AdCard from "../../components/AddProperty/AdCard";
import Ads from "../../components/AddProperty/Ads";
import { useState } from "react";
import axios from "axios";

const Filter = ({ item, key }: any) => {
  const [room1, setRoom1] = useState("");
  function getSquare() {
    axios
      .get(`http://localhost:9000/api/properties/filter/room`)
      .then((res) => {
        setRoom1(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <Ads />
    </div>
  );
};
export default Filter;
