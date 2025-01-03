import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoles, loadingSetter } from "../store/actions/globalAction";
import Loading from "../components/Loading";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });
  //stateler

  /*const [roles, setRoles] = useState([]);*/
  const loading = useSelector((store) => store.global.loading);
  const [selectedRole, setSelectedRole] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  //
  const history = useHistory();
  const password = watch("password");
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const dispatch = useDispatch();

  const roles = useSelector((store) => store.global.roles);

  //Helper Functions
  const onSubmit = (formData) => {
    const formDataToSend = formData;
    console.log("giden data", formDataToSend);
    dispatch(loadingSetter(true));
    instance
      .post("/signup", formDataToSend)
      .then((res) => {
        console.log("response", res.data);

        dispatch(loadingSetter(false));
        history.push("/login");
        toast.success(
          `You need to click link in email to activate your account!`
        );
      })
      .catch((err) => {
        console.log("hata", err);
        dispatch(loadingSetter(false));
        toast.error("Form posting has been failed.");
      });
  };
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(getRoles());
      dispatch(loadingSetter(false));
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  //SPINNER
  if (loading) {
    <Loading />;
  }
  //JSX
  return (
    <section className="bg-white dark:bg-gray-900 sm:px-10 font-Montserrat font-bold">
      <div className="flex justify-center">
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto sm:px-0   ">
          <div className="w-full flex flex-col gap-6 text-sm">
            <p className="text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="gap-6 flex flex-col"
            >
              <div id="name-field" className="">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John"
                  {...register("name", {
                    required: "You must enter name",
                    minLength: {
                      value: 3,
                      message: "Min 3 characters",
                    },
                  })}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.name && (
                  <p className="text-red" id="name-error">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div id="email-field">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  {...register("email", {
                    required: "You must enter email",
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="text-red">This field is required</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="text-red">Invalid email address</span>
                )}
              </div>

              <div id="password-field">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "You must enter a password",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                      message: "Password must meet complexity requirements",
                    },
                  })}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.password && (
                  <span className="text-red">{errors.password.message}</span>
                )}
              </div>

              <div id="confirm-password-field">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {!password
                  ? null
                  : password !== confirmPassword && (
                      <p className="text-red">Passwords do not match</p>
                    )}
              </div>
              <div id="role-field" className="">
                <select
                  className="border border-black rounded-md bg-white text-black p-2"
                  name="role_id"
                  id="role"
                  defaultValue={roles ? (roles[2] ? roles[2].id : "") : ""}
                  onChange={handleRoleChange}
                  {...register("role_id", { required: true })}
                >
                  {roles &&
                    roles.map((role, index) => (
                      <option key={index} value={role.id}>
                        {role.name}
                      </option>
                    ))}
                </select>
              </div>
              {watch("role_id") === "2" && (
                <div id="store" className="flex flex-col gap-4">
                  <div id="store-name-field">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Store Name
                    </label>
                    <input
                      id="store-name"
                      type="text"
                      placeholder="ABCD LTD"
                      {...register("store.name", {
                        required: "You must enter store name",
                        minLength: {
                          value: 3,
                          message: "Min 3 characters",
                        },
                      })}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.store?.name && (
                      <p className="text-red" id="store-name-error">
                        {errors.store?.name.message}
                      </p>
                    )}
                  </div>
                  <div id="phone-field">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="0532 123 45 67"
                      {...register("store.phone", {
                        required: "You must enter a phone number",
                        minLength: {
                          value: 11,
                          message: "Phone number must be at 11 characters long",
                        },
                        pattern: {
                          value:
                            /(^[0\s]?[\s]?)([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g,
                          message:
                            "Phone number must meet complexity requirements",
                        },
                      })}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.store?.phone && (
                      <span className="text-red">
                        {errors.store?.phone.message}
                      </span>
                    )}
                  </div>
                  <div id="taxID-field">
                    <label
                      htmlFor="taxID"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Tax ID
                    </label>
                    <input
                      type="text"
                      id="taxID"
                      placeholder="Enter your TaxID"
                      {...register("store.tax_no", {
                        required: "You must enter tax ID",
                        pattern: {
                          value: /^T\d{4}V\d{6}$/,
                          message: "Tax ID must match the pattern TXXXXVXXXXXX",
                        },
                      })}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.store?.tax_no && (
                      <span className="text-red">
                        {errors.store?.tax_no.message}
                      </span>
                    )}
                  </div>
                  <div id="iban-field">
                    <label
                      htmlFor="iban"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      IBAN
                    </label>
                    <input
                      type="text"
                      id="iban"
                      placeholder="Enter your IBAN number"
                      {...register("store.bank_account", {
                        required: "You must enter a IBAN number",
                        minLength: {
                          value: 26,
                          message: "IBAN must be at  26 characters long",
                        },
                        pattern: {
                          value:
                            /TR[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\s?)([a-zA-Z0-9]{4}\s?){3}([a-zA-Z0-9]{2})\s?/,
                          message: "IBAN must meet complexity requirements",
                        },
                      })}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.store?.bank_account && (
                      <span className="text-red">
                        {errors.store?.bank_account.message}
                      </span>
                    )}
                  </div>
                </div>
              )}
              <div>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`${
                    isValid
                      ? "bg-blue-500 hover:bg-blue-400 focus:ring-blue-300 "
                      : "bg-red hover:bg-orange-500 focus:ring-orange-300"
                  } flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring  focus:ring-opacity-50"`}
                >
                  <span>Sign Up </span>
                </button>
              </div>
              {!isValid && <p className="text-red">Fill the form correctly</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
