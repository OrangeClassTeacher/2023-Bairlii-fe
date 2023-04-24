import Link from "next/link";
import { useState } from "react";
import axios from "axios";

function Register(): any {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [block, setBlock] = useState("");

  const onChangeFN = (e: any) => {
    setFirstName(e.target.value);
  };
  const onChangeLN = (e: any) => {
    setLastName(e.target.value);
  };
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onChangeDistrict = (e: any) => {
    setDistrict(e.target.value);
  };
  const onChangeSubDistrict = (e: any) => {
    setSubDistrict(e.target.value);
  };
  const onChangeStreet = (e: any) => {
    setStreet(e.target.value);
  };
  const onChangeBlock = (e: any) => {
    setBlock(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const onChangePhone = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const onChangeProPic = (e: any) => {
    setProfilePicture(e.target.value);
  };

  const onSubmit = () => {
    axios
      .post(`http://localhost:9000/api/users`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: {
          district: district,
          subDistrict: subDistrict,
          street: street,
        },
        password: password,
        phoneNumber: phoneNumber,
        profilePicture: profilePicture,
      })
      .then((response: any) => {
        console.log(response);

        alert("Таны бүртгэл амжилттай үүслээ");
      })
      .catch((error: any) => console.log("error", error));
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-2xl dark:text-white">
                  Шинээр бүртгүүлэх
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <input
                  onChange={onChangeFN}
                  type="text"
                  placeholder="Нэр..."
                  className="border border-gray-400 py-1 px-2"
                />

                <input
                  onChange={onChangeLN}
                  type="text"
                  placeholder="Овог..."
                  className="border border-gray-400 py-1 px-2"
                />
              </div>

              <div className="mt-5">
                <input
                  onChange={onChangeEmail}
                  type="text"
                  placeholder="Имэйл..."
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5  ">
                <input
                  onChange={onChangeDistrict}
                  type="text"
                  placeholder="Дүүрэг..."
                  className="border border-gray-400 py-1 px-1"
                />
                <input
                  onChange={onChangeSubDistrict}
                  type="text"
                  placeholder="Хороо..."
                  className="border border-gray-400 py-1 px-1"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <input
                  onChange={onChangeBlock}
                  type="text"
                  placeholder="Гудамж..."
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  onChange={onChangeStreet}
                  type="text"
                  placeholder="Байр..."
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <input
                  onChange={onChangePassword}
                  type="password"
                  placeholder="Нууц үг..."
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  onChange={onChangePhone}
                  type="number"
                  placeholder="Утасны дугаар..."
                  className="border border-gray-400 py-1 px-2"
                />
              </div>

              <div className="mt-5 mb-5">
                <input
                  onChange={onChangeProPic}
                  type="text"
                  placeholder="Профайл зураг..."
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    form="exampleCheck2"
                  >
                    Намайг сана
                  </label>
                </div>
                <a href="#!">Нүүц үг мартсан?</a>
              </div>
              <div className="text-center lg:text-left">
                <Link href="/login">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="dark"
                  >
                    Нэвтрэх
                  </button>
                </Link>
                <button
                  onClick={onSubmit}
                  type="button"
                  className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                >
                  Бүртгүүлэх
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
