import { AdDetailSmallSlider } from "@/components/adDetailComp/AdDetailSmallSlider";
import { Description } from "@/components/adDetailComp/Description";
import { Data } from "@react-google-maps/api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function UserPage() {
  const route = useRouter();
  const userId = route.query.detail;
  const [propertiesData, setPropertiesData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPropertiesData();
  }, [userId]);

  function getPropertiesData() {
    axios
      .get(`http://localhost:9000/api/propertiesbyuser/${userId}`)
      .then((res) => {
        setPropertiesData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="flex flex-col max-w-5xl w-full mt-7">
        <div>{propertiesData}</div>
      </div>
    );
  }
}

export default UserPage;
