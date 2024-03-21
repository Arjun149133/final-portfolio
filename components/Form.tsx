import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [state, handleSubmit] = useForm("xjvnejop");
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col space-y-4 text-slate-100"
    >
      <div className=" flex flex-col justify-start w-full my-1 lg:text-lg">
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className=" form-input text-black w-96 max-sm:w-full rounded-xl p-2"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className=" flex flex-col justify-start w-full my-1 lg:text-lg">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          className=" form-input text-black lg:w-96 rounded-xl p-2 h-56"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className=" z-[60]">
        <button
          type="submit"
          onClick={() => toast.success("Message Sent!")}
          disabled={state.submitting}
          className=" bg-sky-600 p-1 rounded-md px-2 max-sm:text-sm hover:bg-sky-500 "
        >
          Send Mail
        </button>
        {state.succeeded && <ToastContainer position="bottom-center" />}
      </div>
    </form>
  );
};

export default Form;
