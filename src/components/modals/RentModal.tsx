import Modal from "./Modal";
import useAllModal from "@/hooks/useAllModal";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../Categories";
import CategoryInput from "../inputs.tsx/CategoryInput";
import CountrySelect, { CountrySelectValue } from "../inputs.tsx/CountrySelect";
import Map from "../Map";
import Counter from "../inputs.tsx/Counter";
import ImageUpload from "../inputs.tsx/ImageUpload";
import Input from "../inputs.tsx/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import Panorama from "../inputs.tsx/Panorama";

// import { TbCodeAsterix } from "react-icons/tb";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGERS = 3,
  DESCRIPTION = 4,
  AREA = 5,
  PANORAMA = 6,
}

const RentModal = () => {
  const rentModal = useAllModal();
  const router = useRouter();

  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 0,
      roomCount: 0,
      bathroomCount: 0,
      imageSrc: "",
      description: "",
      area: 0,
      userID: "",
      panoramaPhoto: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const bathroomCount = watch("bathroomCount");
  const roomCount = watch("roomCount");
  const imageSrc = watch("imageSrc");
  const panoramaPhoto = watch("PanoramaPhoto");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const [decoded, setDecoded] = useState<object | string>();
  const [token, setToken] = useState<string>();

  console.log(decoded);

  useEffect(() => {
    let localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
    if (localStorageValue.length > 1) {
      setToken(localStorageValue);
    }
  }, []);

  // function handleData(e: any) {
  //   setPropertiesData({0
  //     ...propertiesData,
  //     userID: decoded?.user?._id,
  //     comment: [e],
  //   });
  // }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setStep((value) => value + 1);
    // console.log(data);
    if (step === 2) {
      console.log(decoded?.user?._id);
      setCustomValue("userID", decoded?.user?._id);
    }

    if (step >= 6) {
      console.log(step);

      axios
        .post("http://localhost:9000/api/properties", data, {
          headers: { "x-access-token": token },
        })
        .then((res) => {
          console.log(res);

          toast.success("Listing Created!");
          router.refresh();
          reset();
          setStep(STEPS.CATEGORY);
          rentModal.onClose();
        })
        .catch(() => {
          toast.error("Something went wrong.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.DESCRIPTION) {
      return undefined;
    }
    return "Back";
  }, [step]);

  // const location = watch("location");
  // const Map = useMemo(
  //   () =>
  //     dynamic(() => import("../Map"), {
  //       ssr: false,
  //     }),
  //   [location]
  // );

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="asdfasfdasf asd fasd as d adasdf"
        subtitle="fdf sdfaff dfds"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        {/* <Map center={location?.latlng} /> */}
      </div>
    );
  }
  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your palace"
          subtitle="What amenities do you have?"
        />
        <Counter
          title="Guests"
          subtitle="How many guests do you allow?"
          value={guestCount}
          onChange={(value) => setCustomValue("guestCount", value)}
        />
        <hr />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you have?"
          value={roomCount}
          onChange={(value) => setCustomValue("roomCount", value)}
        />
        <hr />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
          value={bathroomCount}
          onChange={(value) => setCustomValue("bathroomCount", value)}
        />
      </div>
    );
  }

  if (step === STEPS.IMAGERS) {
    bodyContent = (
      <div>
        <Heading
          title="Add a photo of your place"
          subtitle="Show guests what your looks like!"
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div>
        <Heading
          title="How would you describe your place?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (step === STEPS.AREA) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Area"
          subtitle="What is the floor area of ​​your apartment?"
        />
        <Input
          id="area"
          label="Area"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (step === STEPS.PANORAMA) {
    bodyContent = (
      <div>
        <Heading
          title="Add a 360(Panorama photo) photo of your place"
          subtitle="Show your guests a more beautiful look!"
        />
        <Panorama
          value={panoramaPhoto}
          onChange={(value) => setCustomValue("PanoramaPhoto", value)}
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Bairliii your home!"
      body={bodyContent}
    />
  );
};

export default RentModal;
