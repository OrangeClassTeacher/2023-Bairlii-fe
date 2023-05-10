import RentModal from "@/components/modals/RentModal";
import useAllModal from "@/hooks/useAllModal";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function UserPage() {
  const route = useRouter();
  const { userId } = route.query;
  const [propertiesData, setPropertiesData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPropertiesData();
  }, [userId]);

  //console.log(propertiesData);

  function getPropertiesData() {
    setLoading(true);

    console.log({ userId });

    if (userId) {
      axios
        .get(`http://localhost:9000/api/propertiesbyuser/${userId}`)
        .then((res) => {
          console.log(res.data.result);
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
  const [isOpen, setIsOpen] = useState(true);
  const rentModal = useAllModal();

  // console.log(userID);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex w-full justify-center">
        <div className="">
          <div
            className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
            onClick={RentModal.isOpen ? rentModal.onClose : rentModal.onOpen}
          >
            <p>Зар оруулах</p>
          </div>
          <div className="flex gap-6 justify-center max-w-5xl w-full mt-7 ">
            {propertiesData.map(
              (
                {
                  _id,
                  photos,
                  PanoramaPhoto,
                  guestCount,
                  roomCount,
                  bathroomCount,
                  area,
                  coordinates,
                  description,
                  locationName,
                },
                i
              ) => {
                return (
                  <div key={i}>
                    <div className="w-60 p-2 rounded-xl bg-gray-200">
                      <div>
                        <img
                          className="rounded-xl h-40 w-60 object-cover"
                          src={photos}
                          alt=""
                        />
                      </div>
                      <div className="pt-4">
                        <div className=" flex bg-yellow-200 justify-between p-2 rounded-3xl ">
                          <p className="bg-yellow-300 rounded-xl ps-2 pr-2 font-bold">
                            Хүний тоо
                          </p>
                          <p className="rounded-xl bg-yellow-400 pr-2 ps-2">
                            {" "}
                            {guestCount}
                          </p>
                        </div>
                        <div className="pt-2">
                          <p className="flex bg-lime-200 justify-between p-2 rounded-3xl ">
                            <p className="bg-lime-300 rounded-xl ps-2 pr-2 font-bold">
                              Өрөөний тоо
                            </p>
                            <p className="rounded-xl bg-lime-400 pr-2 ps-2">
                              {roomCount}
                            </p>
                          </p>
                        </div>
                        <div className="pt-2">
                          <p className="flex bg-green-200 justify-between p-2 rounded-3xl ">
                            <p className="bg-green-300 rounded-xl ps-2 pr-2 font-bold">
                              Угаалгын өрөө
                            </p>
                            <p className="bg-green-400 rounded-xl pr-2 ps-2">
                              {bathroomCount}
                            </p>
                          </p>
                        </div>
                        <div className="pt-2">
                          <p className="flex bg-teal-200 justify-between p-2 rounded-3xl">
                            <p className="bg-teal-300 rounded-xl ps-2 pr-2 font-bold">
                              Талбай
                            </p>
                            <p className="bg-teal-400 rounded-xl pr-2 ps-2">
                              {area + "м.кв"}
                            </p>
                          </p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <p className="ps-2 pr-2 bg-slate-300 rounded-2xl">
                          {description}
                        </p>
                      </div>
                      <div>{locationName}</div>
                      <div className="flex justify-between ps-2 pe-2 pt-3">
                        <Link
                          href={{
                            pathname: `/edit/[editProperties]`,
                            query: {
                              editProperties: _id,
                            },
                          }}
                        >
                          <button className="bg-yellow-300 rounded-2xl">
                            {" "}
                            <p className="p-2">Zasah</p>
                          </button>
                        </Link>
                        <button className="bg-lime-300 rounded-2xl">
                          <p className="p-2">Zar ilgeeh</p>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
