import UserPropertyCard from "@/components/user/UserPropertyCard";
import useAllModal from "@/hooks/useAllModal";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Utils from "@/utils/Utils";
function UserPage(): JSX.Element {
  const route = useRouter();
  const userID = route.query.userId;
  const [propertiesData, setPropertiesData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const rentModal = useAllModal();

  useEffect(() => {
    getPropertiesData();
  }, [userID]);

  //console.log(propertiesData);

  function getPropertiesData(): void {
    setLoading(true);
    if (userID) {
      axios
        .get(`http://localhost:9000/api/propertiesbyuser/${userID}`)
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
  }

  function deleteProperties(id: string): void {
    axios
      .delete(`${Utils.API_URL}/properties/${id}`)
      .then((res) => {
        if (res.data.status) {
          alert("amjilttai ustgalaa");
          getPropertiesData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (loading) {
    return (
      <div className="flex justify-center h-full pt-52">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel" />
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear" />
                <div className="hamster__eye" />
                <div className="hamster__nose" />
              </div>
              <div className="hamster__limb hamster__limb--fr" />
              <div className="hamster__limb hamster__limb--fl" />
              <div className="hamster__limb hamster__limb--br" />
              <div className="hamster__limb hamster__limb--bl" />
              <div className="hamster__tail" />
            </div>
          </div>
          <div className="spoke" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-full justify-center containerblur mb-20">
        <div className="">
          <div className="flex gap-5 flex-wrap justify-between max-w-7xl w-full mt-7 ">
            <div className="cards ">
              <div className="card-inner  p-2 rounded-md">
                <Image
                  className="rounded-md h-40 w-[270px] object-cover"
                  src="https://files.realpython.com/media/How-to-Use-the-Python-append-Method_Watermarked.4e39826bc6f5.jpg"
                  alt=""
                />
                <button
                  className=" rounded-md flex text-6xl text-center ms-[100px] mt-[50px]"
                  onClick={
                    rentModal.isOpen ? rentModal.onClose : rentModal.onOpen
                  }
                >
                  <FaPlus className="adlist" />
                </button>
                <p className="bg-gray-100 w-[270px] rounded-md text-2xl mt-[56px] text-center ">
                  If you want to enter your place, click here.
                </p>
              </div>
            </div>
            {propertiesData?.map((propertyData, i) => (
              <div key={i}>
                <div className="">
                  <div className="blob">
                    <UserPropertyCard
                      propertyData={propertyData}
                      deleteProperties={deleteProperties}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
