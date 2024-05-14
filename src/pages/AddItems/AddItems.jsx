import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";


const imgHosting=import.meta.env.VITE_IMGBB_APIKEY;
const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"---What's new?---"}
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Recipe name*</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            {...register("name", { required: true })}
            className="input input-bordered w-full flex "
          />
        </label>

        <div className="flex  gap-8">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled >
                Pick one
              </option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details*</span>
          </div>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </label>
        <label className="form-control w-1/2 ">
          <div className="label">
            <span className="label-text"> Pick Images</span>
          </div>

          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input  file-input-bordered w-full "
          />
        </label>
        <input
          className="btn btn-warning mt-5"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItems;
