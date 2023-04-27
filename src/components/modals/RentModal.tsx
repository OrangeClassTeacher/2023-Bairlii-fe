import Modal from "./Modal";
import useAllModal from "@/hooks/useAllModal";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import { useMemo, useState } from "react";
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
import Router, { useRouter } from "next/navigation";
// import { TbCodeAsterix } from "react-icons/tb";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGERS = 3,
  DESCRIPTION = 4,
  PRICE = 5,
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
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const bathroomCount = watch("bathroomCount");
  const roomCount = watch("roomCount");
  const imageSrc = watch("imageSrc");

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
  const onNext = () => {
    setStep((value) => value + 1);
  };

  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   console.log(data);

  //   if (step === STEPS.PRICE) {
  //     return onNext();
  //   }
  //   setIsLoading(true);

  //   axios
  //     .post("http://localhost:9000/api/properties", data)
  //     .then(() => {
  //       toast.success("Listing Created!");
  //       router.refresh();
  //       reset();
  //       setStep(STEPS.CATEGORY);
  //       rentModal.onClose();
  //     })
  //     .catch(() => {
  //       toast.error("Something went wrong.");
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
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
          id="title"
          label="Title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
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

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Now, set your price"
          subtitle="How much do you charge per night"
        />
        <Input
          id="price"
          label="Price"
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

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onNext)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Bairliii your home!"
      body={bodyContent}
    />
  );
};

export default RentModal;
