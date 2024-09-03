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
import { useProducts } from "../../../hooks/useProducts";
import { useCategories } from "../../../hooks/useCategories";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [showModal1, setShowModal1] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const { products } = useProducts();
  const { categories } = useCategories();
  const queryClient = useQueryClient();
  const [updateBody, setUpdateBody] = useState({
    name: "",
    productDescription: "",
    categoryId: "",
    categoryName: "",
    price: "",
    discount: "",
    img: "",
    status: "",
    roadmap: "",
    materials: "",
    queries: "",
    features: "",
    importance: "",
    id: "",
  });
  const [product, setProduct] = useState({
    name: "",
    productDescription: "",
    categoryId: "",
    categoryName: "",
    price: "",
    discount: "",
    status: "",
    img: "",
    roadmap: "",
    materials: "",
    queries: "",
    features: "",
    importance: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    productDescription: "",
    categoryId: "",
    categoryName: "",
    price: "",
    discount: "",
    img: "",
    roadmap: "",
    materials: "",
    status: "",
    queries: "",
    features: "",
    importance: "",
  });
  // const { data: products = [], refetch } = useQuery({
  //   queryKey: ["productss"],
  //   queryFn: async () => {
  //     // const res = await fetch(`${baseURL}/product?page=1&limit=10`);
  //     // http://localhost:5000/api/v1/product/owner?email=admin@gmail.com
  //     const res = await fetch(`${baseURL}/product`);
  //     const data = await res.json();

  //     return data.data;
  //   },
  // });
  // console.log({ products });
  const handleInputText = (e, modalValue) => {
    const name = e.target.name;
    let value = e.target.value.toLowerCase();

    if (!modalValue) {
      if (!value) {
        setProduct({ ...product, [name]: "" });
        setErrors({ ...errors, [name]: `${name} shouldn't be empty` });
      } else {
        value = value.trim();
        setProduct({ ...product, [name]: value });
        setErrors({ ...errors, [name]: "" });
      }
    } else {
      setUpdateBody({ ...updateBody, [name]: value });
      // if (!value) {
      //   setUpdateBody({ ...updateBody, [name]: "" });
      //   setErrors({ ...errors, [name]: `${name} shouldn't be empty` });
      // } else {
      //   setUpdateBody({ ...updateBody, [name]: value });
      //   setErrors({ ...errors, [name]: "" });
      // }
    }
  };

  const handleNumber = (e, modalValue) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    if (!modalValue) {
      if (!e.target.value) {
        setErrors({ ...errors, [name]: `Please provide ${name}` });
        setProduct({ ...product, [name]: "" });
      } else if (!/^[+]?\d*\.?\d+$/.test(value)) {
        setErrors({ ...errors, [name]: `please provide a positive number` });
        setProduct({ ...product, [name]: "" });
      } else {
        setErrors({ ...errors, [name]: `` });
        setProduct({ ...product, [name]: value });
      }
    }
    setUpdateBody({ ...updateBody, [name]: value });
  };

  const handleDiscount = (e, modalValue) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    if (!modalValue) {
      if (!e.target.value) {
        setErrors({ ...errors, [name]: `Please provide ${name}` });
        setProduct({ ...product, [name]: "" });
      } else if (!/^(100|\d{1,2}(\.\d+)?)$/.test(value)) {
        setErrors({ ...errors, [name]: `discount should be 0 to 100` });
        setProduct({ ...product, [name]: "" });
      } else {
        setErrors({ ...errors, [name]: `` });
        setProduct({ ...product, [name]: value });
      }
    }
    setUpdateBody({ ...updateBody, [name]: value });
  };

  const handleImageUpload = async (e, modalValue) => {
    const name = e.target.name;
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    if (!image) {
      setErrors({ ...errors, [name]: "Please select an image" });
      setProduct({ ...product, [name]: "" });
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
          setProduct({ ...product, [name]: data.data.imageUrl });
          toast.success("Category Logo Uploaded");
          setErrors({ ...errors, [name]: "" });
        } else {
          setProduct({ ...product, [name]: "" });
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
        setUpdateBody({ ...updateBody, [name]: data.data.imageUrl });
        toast.success("Category Logo Uploaded");
        setErrors({ ...errors, [name]: "" });
      } else {
        setUpdateBody({ ...updateBody, [name]: "" });
        setErrors({ ...errors, [name]: data.message });
      }
    } catch (err) {
      setErrors({ ...errors, [name]: err.message });
    }
  };

  // const { data: categories = [] } = useQuery({
  //   queryKey: ["categoriess"],
  //   queryFn: async () => {
  //     const res = await fetch(`${baseURL}/category`);
  //     const data = await res.json();
  //     return data.data.categories;
  //   },
  // });

  useEffect(() => {
    if (updateBody?.categoryId) {
      setProduct({ ...product, categoryId: updateBody?.categoryId });
    }
  }, [updateBody?.categoryId]);

  // console.log(updateBody);

  const handleUploadMultipleImage = async (e, modalValue) => {
    const name = e.target.name;
    const images = e.target.files;
    const formData = new FormData();

    for (let image of images) {
      formData.append("images", image);
    }

    if (!(images.length > 0)) {
      setErrors({ ...errors, [name]: "Please select an image" });
      setProduct({ ...product, [name]: "" });
      return;
    }
    if (!modalValue) {
      try {
        const res = await fetch(`${baseURL}/image/multiple`, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        // console.log(data);

        if (data.status === "success") {
          setProduct({ ...product, [name]: data.data });
          toast.success("Category Logo Uploaded");
          setErrors({ ...errors, [name]: "" });
        } else {
          setProduct({ ...product, [name]: "" });
          setErrors({ ...errors, [name]: data.message });
        }
      } catch (err) {
        setErrors({ ...errors, [name]: err.message });
      }
    }
    try {
      const res = await fetch(`${baseURL}/image/multiple`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      // console.log(data);

      if (data.status === "success") {
        setUpdateBody({ ...updateBody, [name]: data.data });
        toast.success("Category Logo Uploaded");
        setErrors({ ...errors, [name]: "" });
      } else {
        setUpdateBody({ ...updateBody, [name]: "" });
        setErrors({ ...errors, [name]: data.message });
      }
    } catch (err) {
      setErrors({ ...errors, [name]: err.message });
    }
  };

  const handleProduct = async (e) => {
    e.preventDefault();
    const {
      name,
      productDescription,
      categoryId,
      categoryName,
      price,
      discount,
      img,
      status,
      roadmap,
      materials,
      queries,
      features,
      importance,
    } = product;
    const newProduct = {
      name,
      productDescription,
      price,
      category: {
        name: categoryName,
        id: categoryId,
      },
      discount,
      img,
      status,
      roadmap,
      materials,
      queries,
      features,
      importance,
      // postedBy: {
      //   name: user?.firstName + user?.lastName,
      //   id: user._id,
      // },
    };

    // console.log(newProduct);
    try {
      const res = await fetch(`${baseURL}/product`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();
      if (data?.status === "success") {
        toast.success(data.message);
        setShowModal1(false);
        // refetch();
        queryClient.invalidateQueries("productss");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  // update product
  const handleProductUpdate = async (e) => {
    e.preventDefault();
    const {
      name,
      productDescription,
      categoryId,
      categoryName,
      price,
      discount,
      img,
      roadmap,
      materials,
      queries,
      features,
      importance,
      id,
    } = updateBody;
    const newProduct = {
      name,
      productDescription,
      price,
      category: {
        name: categoryName,
        id: categoryId,
      },
      discount,
      img,
      roadmap,
      materials,
      queries,
      features,
      importance,
      // postedBy: {
      //   name: user?.firstName + user?.lastName,
      //   id: user._id,
      // },
    };
    try {
      const res = await fetch(`${baseURL}/product/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();
      if (data?.status === "success") {
        // console.log(data);
        toast.success(data.message);
        setShowModalUpdate(false);
        // refetch();
        queryClient.invalidateQueries("productss");
      }
    } catch (err) {
      toast.error(err.message);
    }
    // console.log("updated state", updateBody);
  };

  const handleDelete = async (_id) => {
    try {
      const res = await fetch(`${baseURL}/product/${_id}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await res.json();
      if (data.status === "success") {
        toast.success(data.message);
        // refetch();
        queryClient.invalidateQueries("productss");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  // console.log(categories);
  // console.log(updateBody.subCategoryName);
  // console.log(product);
  return (
    <main>
      <div className="flex items-center justify-between ">
        <h2 className="text-xl mx-auto font-bold text-[#0866FF]   uppercase mb-5">
          Our Products
        </h2>
        <ActionButton
          containerStyles="text-sm hover:text-secondary bg-[#0866FF] text-white rounded-3xl   tracking-widest py-2 capitalize font-semibold  "
          handleAction={() => setShowModal1(true)}
        >
          Create new
        </ActionButton>
      </div>
      <div className="w-full overflow-x-auto rounded-md px-5 mt-2 text-white bg-white ">
        <TableHeader
          containerStyles="bg-secondary "
          fields={[
            "S.I",
            "name",
            "category",

            "price",

            "discount",

            "status",
            // "createdAt",
            // "updatedAt",
            "Action",
          ]}
        >
          {products?.products?.map((product, index) => (
            <TableRow key={index}>
              <TableCol>{index + 1}</TableCol>
              <TableCol styles="min-w-[100px]">{product.name}</TableCol>
              <TableCol styles="min-w-[100px]">
                {product.category?.name}
              </TableCol>

              <TableCol styles="w-[40px]">{product.price}</TableCol>

              <TableCol styles="">{product.discount}%</TableCol>

              <TableCol styles="">{product.status}</TableCol>
              {/* <TableCol styles="min-w-[80px]">
                {format(new Date(product.createdAt), "dd MMM yyyy")}
              </TableCol>
              <TableCol styles="min-w-[80px] md:min-w-auto">
                {format(new Date(product.updatedAt), "dd MMM yyyy")}
              </TableCol> */}
              <TableCol>
                <div className="flex items-end h-full justify-center ">
                  <BsTrashFill
                    onClick={() => handleDelete(product._id)}
                    size={18}
                    className="text-red-500 block cursor-pointer mr-1"
                  ></BsTrashFill>
                  <TiEdit
                    size={20}
                    onClick={() => {
                      setUpdateBody({
                        ...updateBody,
                        name: product.name,
                        description: product.productDescription,
                        categoryId: product.category.id,
                        categoryName: product.category.name,

                        status: product.status,

                        price: product.price,

                        discount: product.discount,
                        img: product.img,
                        roadmap: product.roadmap,
                        materials: product.materials,
                        queries: product.queries,
                        features: product.features,
                        importance: product.importance,

                        id: product._id,
                      });

                      setShowModalUpdate(true);
                    }}
                    className={"text-green-700 block cursor-pointer"}
                  ></TiEdit>
                </div>
              </TableCol>
            </TableRow>
          ))}
        </TableHeader>
      </div>

      {showModal1 && (
        <CommonModal
          setShow={setShowModal1}
          className="max:h-[80vh] overflow-y-auto"
        >
          <form
            onSubmit={handleProduct}
            className="flex gap-3  flex-col items-start justify-center md:justify-between bg-[#ffff] p-7 rounded-md "
          >
            <div className="gap-3 grid grid-cols-1 md:grid-cols-3 w-full">
              <h1 className="text-xl font-bold uppercase  md:col-span-3 text-[#0866FF]">
                Create Product
              </h1>
              <InputText
                type="text"
                name="name"
                placeholder="product name"
                label="product name"
                error={errors.name}
                onChange={handleInputText}
              />
              <InputSelectionObj
                label="select Category"
                data={product}
                setData={setProduct}
                selectedId="categoryId"
                selectedName="categoryName"
                options={categories}
                selectOp="select category"
              />

              <InputSelection
                label="status"
                data={product}
                setData={setProduct}
                field="status"
                options={["active", "in-active"]}
                selectOp="select status"
              />

              <InputText
                type="number"
                name="price"
                placeholder="Selling price"
                label="Selling price"
                error={errors.price}
                onChange={handleNumber}
              />

              <InputText
                type="number"
                name="discount"
                placeholder="product discount"
                label="product discount"
                error={errors.discount}
                onChange={handleDiscount}
              />
              <div className="md:col-span-3 flex md:flex-row flex-col items-center gap-5 w-full">
                <div className=" w-full  md:w-1/2">
                  <div className="w-full flex flex-col gap-1 ">
                    <label
                      htmlFor="thumbnail"
                      className=" font-semibold text-sm capitalize"
                    >
                      Upload Image
                    </label>
                    <ImageUpload
                      id="img"
                      image={product.img}
                      error={errors.img}
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
                      image={product.images}
                      error={errors.images}
                      onChange={handleUploadMultipleImage}
                    />
                  </div>
                </div> */}
              </div>
              {/* <div className="md:col-span-3">
                <InputTextBox
                  label="product description"
                  rows={2}
                  cols={10}
                  name="productDescription"
                  placeholder="write product description"
                  onChange={handleInputText}
                  error={errors.productDescription}
                  styles="w-full"
                ></InputTextBox>
              </div> */}
              {product.categoryName === "course" && (
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

              {(product.categoryName === "web solution" ||
                product.categoryName === "Software Services") && (
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
                !product?.name ||
                !product?.categoryName ||
                !product?.status ||
                !product.img ||
                !product?.discount ||
                !product?.price
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
            onSubmit={handleProductUpdate}
            className="flex gap-3  flex-col items-start justify-center md:justify-between bg-[#382850] p-7 rounded-md "
          >
            <div className="gap-3 grid grid-cols-1 md:grid-cols-3 w-full">
              <h1 className="text-xl font-bold uppercase  md:col-span-3">
                update Product
              </h1>
              <InputText
                type="text"
                name="name"
                placeholder="product name"
                label="product name"
                initialValue={updateBody.name}
                modalValue={true}
                error={errors.name}
                onChange={handleInputText}
              />

              <InputSelectionObj
                label="select Category"
                data={updateBody}
                setData={setUpdateBody}
                selectedId="categoryId"
                selectedName="categoryName"
                options={categories}
                setProduct={setProduct}
                selectOp={updateBody.categoryName}
              />

              <InputSelection
                label="status"
                data={updateBody}
                setData={setUpdateBody}
                field="status"
                options={["in-stock", "out-of-stock"]}
                // selectOp="select status"
                selectOp={updateBody.status}
              />

              <InputText
                type="number"
                name="price"
                placeholder="Selling price"
                label="Selling price"
                initialValue={updateBody.price}
                error={errors.price}
                modalValue={true}
                onChange={handleNumber}
              />

              <InputText
                type="number"
                name="discount"
                placeholder="product discount"
                label="product discount"
                initialValue={updateBody.discount}
                error={errors.discount}
                modalValue={true}
                onChange={handleDiscount}
              />
              <div className="md:col-span-3 flex md:flex-row flex-col items-center gap-5 w-full">
                <div className=" w-full  md:w-1/2">
                  <div className="w-full flex flex-col gap-1 ">
                    <label
                      htmlFor="thumbnail"
                      className=" font-semibold text-sm capitalize"
                    >
                      Upload Image
                    </label>
                    <ImageUpload
                      id="img"
                      image={updateBody.img}
                      error={errors.img}
                      modalValue={true}
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
                      image={product.images}
                      error={errors.images}
                      onChange={handleUploadMultipleImage}
                    />
                  </div>
                </div> */}
              </div>
              {/* <div className="md:col-span-3">
                <InputTextBox
                  label="product description"
                  rows={2}
                  cols={10}
                  name="productDescription"
                  placeholder="write product description"
                  initialValue={updateBody.productDescription}
                  onChange={handleInputText}
                  error={errors.productDescription}
                  styles="w-full"
                ></InputTextBox>
              </div> */}
              {updateBody.categoryName === "course" && (
                <>
                  <div className="md:col-span-3">
                    <InputTextBox
                      label="Roadmap (Separate with coma ',')"
                      rows={2}
                      cols={10}
                      name="roadmap"
                      placeholder="ex: Logo Design,Brochure Design,Banner Design,Web Template Design,Flyer Design"
                      onChange={handleInputText}
                      initialValue={updateBody.roadmap}
                      error={errors.roadmap}
                      modalValue={true}
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
                      initialValue={updateBody.materials}
                      error={errors.materials}
                      modalValue={true}
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
                      initialValue={updateBody.queries}
                      error={errors.queries}
                      modalValue={true}
                      styles="w-full"
                    ></InputTextBox>
                  </div>
                </>
              )}
              {(updateBody.categoryName === "web solution" ||
                updateBody.categoryName === "Software Services") && (
                <>
                  <div className="md:col-span-3">
                    <InputTextBox
                      label="features (Separate with coma ',')"
                      rows={2}
                      cols={10}
                      name="features"
                      placeholder=""
                      onChange={handleInputText}
                      initialValue={updateBody.features}
                      error={errors.features}
                      modalValue={true}
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
                      initialValue={updateBody.importance}
                      error={errors.importance}
                      styles="w-full"
                      modalValue={true}
                    ></InputTextBox>
                  </div>
                </>
              )}
            </div>

            <SubmitButton
              className="text-secondary w-[150px] mx-auto my-3 tracking-widest py-[6px] text-lg capitalize"
              disabled={
                !updateBody?.name ||
                !updateBody?.categoryId ||
                !updateBody?.categoryName ||
                !updateBody?.discount ||
                !updateBody?.price
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

export default MyProducts;
