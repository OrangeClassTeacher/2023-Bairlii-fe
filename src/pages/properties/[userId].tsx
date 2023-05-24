import UserPropertyCard from "@/components/user/UserPropertyCard";
import useAllModal from "@/hooks/useAllModal";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Utils from "@/utils/Utils";
import Loading from "@/components/loading/Loading";
import { toast } from "react-toastify";
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
        .get(`${Utils.API_URL}/propertiesbyuser/${userID}`)
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
          toast.success("🏚 Your post has been successfully deleted", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          getPropertiesData();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("❌ unsuccessful", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <div className="max-w-full text-center">
          <h2 className="text-purple-900 text-4xl">
            Hello, It`s your properties
          </h2>
        </div>
        <div className="flex w-full justify-center containerblur mb-20">
          <div className="">
            <div className="flex gap-5 flex-wrap  max-w-7xl w-full mt-7 ">
              <div className="cards ">
                <div className="card-inner  p-2 rounded-md">
                  <Image
                    height={1000}
                    width={1000}
                    className="rounded-md h-40 w-[288px] object-cover"
                    src="https://files.realpython.com/media/How-to-Use-the-Python-append-Method_Watermarked.4e39826bc6f5.jpg"
                    alt=""
                  />
                  <button
                    className=" rounded-md flex text-6xl text-center ms-[100px] mt-[50px]"
                    onClick={
                      rentModal.isOpen ? rentModal.onClose : rentModal.onOpen
                    }
                  >
                    <FaPlus className="text-[80px] hover:text-gray-800 transition" />
                  </button>
                  <p className="bg-gray-100 w-[289px] rounded-md text-2xl mt-[56px] text-center">
                    If you want to enter your place, click here.
                  </p>
                </div>
              </div>
              {propertiesData.map((propertyData, i) => (
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
      </div>
    );
  }
}

export default UserPage;
