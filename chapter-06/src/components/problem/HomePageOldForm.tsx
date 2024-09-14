import React, { FormEvent, useRef, useState } from "react";

/**
 * This is the old way how we handled forms in the past using native React.
 * Nowadays we should use new hook such as: `useActionState` and `useFormStatus`
 * */

const HomePageOldForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<{ error?: string; message?: string }>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setData({ error: "", message: "" });

    if (inputRef.current == null) {
      return;
    }

    const data = await saveUser(inputRef.current.value);
    setData(data);
    setIsLoading(false);
  }

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
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: ".3" }}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          ref={inputRef}
          id="firstName"
          placeholder="First Name"
          name="firstName"
        />
        <button
          disabled={isLoading}
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

export default HomePageOldForm;

async function saveUser(
  value: string,
): Promise<{ error?: string; message?: string }> {
  await wait(1000);

  if (value === "") {
    return { error: "Name is required!" };
  }

  console.log("User Saved!", value);

  return { error: "", message: "User saved!" };
}

async function wait(delay: number = 500) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
