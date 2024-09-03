/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery, useQueryClient } from "@tanstack/react-query";

import format from "date-fns/format";
import { BsTrashFill } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { accessToken, baseURL } from "../../../Configs/libs";

import ActionButton from "../../../Components/Buttons/ActionButton";
import TableHeader from "../../../Components/TableHeader";
import TableRow from "../../../Components/TableRow";
import TableCol from "../../../Components/TableCol";
import CommonModal from "../../../CommonModal/CommonModal";
import InputText from "../../../Components/Inputs/InputText";
import InputSelectionObj from "../../../Components/InputSelection/InputSelectionObj";
import InputSelection from "../../../Components/InputSelection/inputSelection";
import ImageUpload from "../../../Components/ImageUpload";
import InputTextBox from "../../../Components/Inputs/InputTextBox";
import SubmitButton from "../../../Components/Buttons/SubmitButton";
import { useSettings } from "../../../hooks/useSettings";

const Setting = () => {
  const { user } = useContext(AuthContext);
  const [showModal1, setShowModal1] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const { settings } = useSettings();
  const queryClient = useQueryClient();
  const [updateSettings, setUpdateSettings] = useState({
    name: "",
    logo: "",
    phone: "",
    email: "",
    location: "",
    officeTime: "",
    aboutUS: "",
    id: "",
  });
  const [setting, setSetting] = useState({
    name: "",
    logo: "",
    phone: "",
    email: "",
    location: "",
    officeTime: "",
    aboutUS: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    logo: "",
    phone: "",
    email: "",
    location: "",
    officeTime: "",
    aboutUS: "",
  });

  const handleInputText = (e, modalValue) => {
    const name = e.target.name;
    let value = e.target.value.toLowerCase();

    if (!modalValue) {
      if (!value) {
        setSetting({ ...setting, [name]: "" });
        setErrors({ ...errors, [name]: `${name} shouldn't be empty` });
      } else {
        value = value.trim();
        setSetting({ ...setting, [name]: value });
        setErrors({ ...errors, [name]: "" });
      }
    } else {
      setUpdateSettings({ ...updateSettings, [name]: value });
      // if (!value) {
      //   setUpdateSettings({ ...updateSettings, [name]: "" });
      //   setErrors({ ...errors, [name]: `${name} shouldn't be empty` });
      // } else {
      //   setUpdateSettings({ ...updateSettings, [name]: value });
      //   setErrors({ ...errors, [name]: "" });
      // }
    }
  };

  const handleImageUpload = async (e, modalValue) => {
    const name = e.target.name;
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    if (!image) {
      setErrors({ ...errors, [name]: "Please select an image" });
      setSetting({ ...setting, [name]: "" });
      return;
    }
    if (!modalValue) {
      try {
        const res = await fetch(`${baseURL}/image`, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (data.status === "success") {
          setSetting({ ...setting, [name]: data.data.imageUrl });
          toast.success("Logo Uploaded");
          setErrors({ ...errors, [name]: "" });
        } else {
          setSetting({ ...setting, [name]: "" });
          setErrors({ ...errors, [name]: data.message });
        }
      } catch (err) {
        setErrors({ ...errors, [name]: err.message });
      }
    }
    try {
      const res = await fetch(`${baseURL}/image`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.status === "success") {
        setUpdateSettings({ ...updateSettings, [name]: data.data.imageUrl });
        toast.success(" Logo Uploaded");
        setErrors({ ...errors, [name]: "" });
      } else {
        setUpdateSettings({ ...updateSettings, [name]: "" });
        setErrors({ ...errors, [name]: data.message });
      }
    } catch (err) {
      setErrors({ ...errors, [name]: err.message });
    }
  };

  useEffect(() => {
    if (updateSettings?.id) {
      setSetting({ ...settings });
    }
  }, [updateSettings?.id]);

  // console.log(updateSettings);

  const handlesetting = async (e) => {
    e.preventDefault();
    const { name, logo, phone, email, location, officeTime, aboutUS } = setting;
    const newsetting = {
      name,
      logo,
      phone,
      email,
      location,
      officeTime,
      aboutUS,
    };

    // console.log(newsetting);
    try {
      const res = await fetch(`${baseURL}/setting`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(newsetting),
      });

      const data = await res.json();
      if (data?.status === "success") {
        // console.log(data);
        toast.success(data.message);
        setShowModal1(false);
        // refetch;
        queryClient.invalidateQueries("settings");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  // update setting
  const handlesettingUpdate = async (e) => {
    e.preventDefault();

    const { name, logo, phone, email, location, officeTime, aboutUS } =
      updateSettings;
    const newsetting = {
      name,
      logo,
      phone,
      email,
      location,
      officeTime,
      aboutUS,
    };

    try {
      const res = await fetch(`${baseURL}/setting`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(newsetting),
      });

      const data = await res.json();
      if (data?.status === "success") {
        // console.log(data);
        toast.success(data.message);
        setShowModalUpdate(false);
        // refetch();
        queryClient.invalidateQueries("settings");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // const handleDelete = async (_id) => {
  //   try {
  //     const res = await fetch(`${baseURL}/setting/${_id}`, {
  //       method: "delete",
  //       headers: {
  //         "content-type": "application/json",
  //         authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     const data = await res.json();
  //     if (data.status === "success") {
  //       toast.success(data.message);
  //       // refetch();
  //       queryClient.invalidateQueries("settings");
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (err) {
  //     toast.error(err.message);
  //   }
  // };
  // console.log(categories);
  // console.log(updateSettings.subCategoryName);
  // console.log(setting);
  return (
    <main>
      <div className="flex items-center justify-between ">
        <h2 className="text-xl  text-[#0866FF]   mx-auto font-bold uppercase mb-5">
          Our settings
        </h2>
        <ActionButton
          containerStyles="text-sm hover:text-secondary bg-[#0866FF] text-white rounded-3xl   tracking-widest py-2 capitalize font-semibold  "
          handleAction={() => setShowModal1(true)}
        >
          Create new
        </ActionButton>
      </div>
      <div className="w-full overflow-x-auto rounded-md  mt-2 text-white bg-white">
        <TableHeader
          containerStyles="bg-secondary "
          fields={[
            "S.I",
            "name",
            "Email",

            "Phone",

            "Address",

            "About Us",
            "Office Time",
            "Logo",
            // "updatedAt",
            "Action",
          ]}
        >
          {settings && (
            <TableRow>
              <TableCol> 1</TableCol>
              <TableCol styles="min-w-[100px]">{settings.name}</TableCol>
              <TableCol styles="min-w-[100px]">{settings.email}</TableCol>

              <TableCol styles="w-[40px]">{settings.phone}</TableCol>

              <TableCol styles="">{settings.location}</TableCol>

              <TableCol styles="">{settings.aboutUS}</TableCol>
              <TableCol styles="">{settings.officeTime}</TableCol>
              <TableCol styles="min-w-[80px]">
                <img
                  src={settings.logo}
                  alt={settings.name}
                  className="w-full h-5 object-fit"
                />
              </TableCol>
              {/*
              <TableCol styles="min-w-[80px] md:min-w-auto">
                {format(new Date(setting.updatedAt), "dd MMM yyyy")}
              </TableCol> */}
              <TableCol>
                <div className="flex items-end h-full justify-center ">
                  {/* <BsTrashFill
                    onClick={() => handleDelete(setting._id)}
                    size={18}
                    className="text-red-500 block cursor-pointer mr-1"
                  ></BsTrashFill> */}
                  <TiEdit
                    size={20}
                    onClick={() => {
                      setUpdateSettings({
                        ...updateSettings,
                        name: settings.name,
                        logo: settings.logo,
                        phone: settings.phone,
                        email: settings.email,
                        location: settings.location,
                        officeTime: settings.officeTime,
                        aboutUS: settings.aboutUS,

                        id: settings._id,
                      });

                      setShowModalUpdate(true);
                    }}
                    className={"text-green-700 block cursor-pointer"}
                  ></TiEdit>
                </div>
              </TableCol>
            </TableRow>
          )}
        </TableHeader>
      </div>

      {showModal1 && (
        <CommonModal
          setShow={setShowModal1}
          className="max:h-[80vh] overflow-y-auto "
        >
          <form
            onSubmit={handlesetting}
            className="flex gap-3  flex-col items-start justify-center md:justify-between  p-7 rounded-md bg-white"
          >
            <div className="gap-3 grid grid-cols-1 md:grid-cols-3 w-full">
              <h1 className="text-xl font-bold uppercase  md:col-span-3 text-[#0866FF]">
                Create setting
              </h1>
              <InputText
                type="text"
                name="name"
                placeholder="setting name"
                label="setting name"
                error={errors.name}
                onChange={handleInputText}
              />
              <InputText
                type="text"
                name="email"
                placeholder="setting email"
                label="setting email"
                error={errors.email}
                onChange={handleInputText}
              />
              <InputText
                type="text"
                name="phone"
                placeholder="setting phone"
                label="setting phone"
                error={errors.phone}
                onChange={handleInputText}
              />
              <InputText
                type="text"
                name="location"
                placeholder="setting location"
                label="setting location"
                error={errors.location}
                onChange={handleInputText}
              />
              <InputText
                type="text"
                name="officeTime"
                placeholder="setting officeTime"
                label="setting officeTime"
                error={errors.officeTime}
                onChange={handleInputText}
              />
              <InputText
                type="text"
                name="aboutUS"
                placeholder="setting aboutUS"
                label="setting aboutUS"
                error={errors.aboutUS}
                onChange={handleInputText}
              />

              <div className="md:col-span-3 flex md:flex-row flex-col items-center gap-5 w-full">
                <div className=" w-full  md:w-1/2">
                  <div className="w-full flex flex-col gap-1 ">
                    <label
                      htmlFor="thumbnail"
                      className=" font-semibold text-sm capitalize"
                    >
                      Upload Logo
                    </label>
                    <ImageUpload
                      id="logo"
                      image={setting.logo}
                      error={errors.logo}
                      onChange={handleImageUpload}
                      isMultiple={false}
                    />
                  </div>
                </div>
                {/* <div className=" w-full  md:w-1/2">
                  <div className="w-full flex flex-col gap-1 ">
                    <label
                      htmlFor="images"
                      className=" font-semibold text-sm capitalize"
                    >
                      Upload Images
                    </label>
                    <ImageUpload
                      id="images"
                      isMultiple={true}
                      image={setting.images}
                      error={errors.images}
                      onChange={handleUploadMultipleImage}
                    />
                  </div>
                </div> */}
              </div>
              {/* <div className="md:col-span-3">
                <InputTextBox
                  label="setting description"
                  rows={2}
                  cols={10}
                  name="settingDescription"
                  placeholder="write setting description"
                  onChange={handleInputText}
                  error={errors.settingDescription}
                  styles="w-full"
                ></InputTextBox>
              </div> */}
              {setting.categoryName === "course" && (
                <>
                  <div className="md:col-span-3">
                    <InputTextBox
                      label="Roadmap (Separate with coma ',')"
                      rows={2}
                      cols={10}
                      name="roadmap"
                      placeholder="ex: Logo Design,Brochure Design,Banner Design,Web Template Design,Flyer Design"
                      onChange={handleInputText}
                      error={errors.roadmap}
                      styles="w-full"
                    ></InputTextBox>
                  </div>
                  <div className="md:col-span-3">
                    <InputTextBox
                      label="materials (Separate with coma ',')"
                      rows={2}
                      cols={10}
                      name="materials"
                      placeholder=""
                      onChange={handleInputText}
                      error={errors.materials}
                      styles="w-full"
                    ></InputTextBox>
                  </div>
                  <div className="md:col-span-3">
                    <InputTextBox
                      label="queries (Separate with coma ',')"
                      rows={2}
                      cols={10}
                      name="queries"
                      placeholder=""
                      onChange={handleInputText}
                      error={errors.queries}
                      styles="w-full"
                    ></InputTextBox>
                  </div>
                </>
              )}

              {(setting.categoryName === "web solution" ||
                setting.categoryName === "Software Services") && (
                <>
                  <div className="md:col-span-3">
                    <InputTextBox
                      label="features (Separate with coma ',')"
                      rows={2}
                      cols={10}
                      name="features"
                      placeholder=""
                      onChange={handleInputText}
                      error={errors.features}
                      styles="w-full"
                    ></InputTextBox>
                  </div>
                  <div className="md:col-span-3">
                    <InputTextBox
                      label="importance (Separate with coma ',')"
                      rows={2}
                      cols={10}
                      name="importance"
                      placeholder=""
                      onChange={handleInputText}
                      error={errors.importance}
                      styles="w-full"
                    ></InputTextBox>
                  </div>
                </>
              )}
            </div>

            <SubmitButton
              className="text-secondary w-[150px] mx-auto my-3 tracking-widest py-[6px] text-lg capitalize"
              disabled={
                !setting?.name ||
                !setting?.email ||
                // !setting?.categoryId ||
                !setting?.phone ||
                !setting?.location ||
                !setting.officeTime ||
                !setting?.aboutUS ||
                !setting?.logo
              }
            >
              create
            </SubmitButton>
          </form>
        </CommonModal>
      )}

      {showModalUpdate && (
        <CommonModal
          setShow={setShowModalUpdate}
          className="max:h-[80vh] overflow-y-auto"
          containerStyles="w-[90%] md:w-[60%]"
        >
          <form
            onSubmit={handlesettingUpdate}
            className="flex gap-3  flex-col items-start justify-center md:justify-between bg-[#382850] p-7 rounded-md "
          >
            <div className="gap-3 grid grid-cols-1 md:grid-cols-3 w-full">
              <h1 className="text-xl font-bold uppercase  md:col-span-3">
                update setting
              </h1>
              <InputText
                type="text"
                name="name"
                placeholder="setting name"
                label="setting name"
                initialValue={updateSettings.name}
                error={errors.name}
                modalValue={true}
                onChange={handleInputText}
              />
              <InputText
                type="text"
                name="email"
                placeholder="setting email"
                label="setting email"
                initialValue={updateSettings.email}
                error={errors.email}
                modalValue={true}
                onChange={handleInputText}
              />
              <InputText
                type="text"
                name="phone"
                modalValue={true}
                placeholder="setting phone"
                label="setting phone"
                initialValue={updateSettings.phone}
                error={errors.phone}
                onChange={handleInputText}
              />
              <InputText
                type="text"
                name="location"
                placeholder="setting location"
                label="setting location"
                initialValue={updateSettings.location}
                error={errors.location}
                modalValue={true}
                onChange={handleInputText}
              />
              <InputText
                type="text"
                name="officeTime"
                modalValue={true}
                placeholder="setting officeTime"
                label="setting officeTime"
                initialValue={updateSettings.officeTime}
                error={errors.officeTime}
                onChange={handleInputText}
              />
              <InputText
                type="text"
                modalValue={true}
                name="aboutUS"
                placeholder="setting aboutUS"
                label="setting aboutUS"
                initialValue={updateSettings.aboutUS}
                error={errors.aboutUS}
                onChange={handleInputText}
              />

              <div className="md:col-span-3 flex md:flex-row flex-col items-center gap-5 w-full">
                <div className=" w-full  md:w-1/2">
                  <div className="w-full flex flex-col gap-1 ">
                    <label
                      htmlFor="thumbnail"
                      className=" font-semibold text-sm capitalize"
                    >
                      Settings Logo
                    </label>
                    <ImageUpload
                      id="logo"
                      image={updateSettings.logo}
                      error={errors.logo}
                      modalValue={true}
                      onChange={handleImageUpload}
                      isMultiple={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            <SubmitButton
              className="text-secondary w-[150px] mx-auto my-3 tracking-widest py-[6px] text-lg capitalize"
              disabled={
                !updateSettings?.name ||
                !updateSettings?.email ||
                !updateSettings?.phone ||
                !updateSettings?.location ||
                !updateSettings.officeTime ||
                !updateSettings?.aboutUS ||
                !updateSettings?.logo
              }
            >
              Update
            </SubmitButton>
          </form>
        </CommonModal>
      )}
    </main>
  );
};

export default Setting;
