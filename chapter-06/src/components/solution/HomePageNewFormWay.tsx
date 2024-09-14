import React, { useActionState } from "react";

const HomePageNewFormWay: React.FC = () => {
  // Now, we can get rid of all this code, because `useActionState` hook is going to do it all for us!
  // ***
  // const inputRef = useRef<HTMLInputElement>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [data, setData] = useState<{ error?: string; message?: string }>();
  //
  // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   setData({ error: "", message: "" });
  //
  //   if (inputRef.current == null) {
  //     return;
  //   }
  //
  //   const data = await saveUser(inputRef.current.value);
  //   setData(data);
  //   setIsLoading(false);
  // }
  // ***

  const [data, action, isPending] = useActionState(saveUser, undefined);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        action={action}
        style={{ display: "flex", flexDirection: "column", width: ".3" }}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          defaultChecked={data?.firstName?.firstName}
          id="firstName"
          placeholder="First Name"
          name="firstName"
        />
        <button
          disabled={isPending}
          style={{ marginTop: ".5rem" }}
          type="submit"
        >
          Submit
        </button>
        {data?.error ? (
          <span style={{ color: "red" }}>{data?.error}</span>
        ) : null}
        {data?.message ? (
          <span style={{ color: "green" }}>{data?.message}</span>
        ) : null}
      </form>
    </div>
  );
};

export default HomePageNewFormWay;

async function saveUser(
  previousState: unknown,
  formData: FormData,
): Promise<{
  error?: string;
  message?: string;
  fieldData?: { firstName: string };
}> {
  const firstName = formData?.get("firstName");

  // Do some asynchronous code, like connecting to the database, fetch the data, etc
  await wait(1000);

  if (firstName === "") {
    return { error: "Name is required!" };
  }

  console.log("User Saved!", firstName);

  return { error: "", message: "User saved!", fieldData: { firstName } };
}

async function wait(delay: number = 500) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
