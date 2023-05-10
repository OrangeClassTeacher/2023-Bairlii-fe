import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
function EditProperties() {
  const route = useRouter();
  const editPropert = route.query.editProperties;
  const [propertData, setPropertData] = useState<Object>();
  const [loading, setLoading] = useState(true);
  // console.log(propertData);

  useEffect(() => {
    editPro();
  }, [editPropert]);

  function editPro() {
    axios
      .get(`http://localhost:9000/api/properties/${editPropert}`)
      .then((res) => {
        setPropertData(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // console.log([propertData]);
  const onSave = () => {
    axios
      .put(`http://localhost:9000/api/properties`)
      .then((res) => {
        setPropertData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("asdsad");
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="flex w-full justify-center">
        <div>
          <div className="flex gap-6 justify-center max-w-5xl w-full mt-7 ">
            <div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  description
                </label>
                <input
                  type="text"
                  value={propertData?.description}
                  onChange={(e) => {
                    setPropertData([
                      { ...propertData, description: e.target.value },
                    ]);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="pt-3">
                <button className=" bg-lime-200 rounded-2xl" onClick={onSave}>
                  <p className="p-2">Hadgalah</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProperties;
