import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();
  function returnToHome() {
    router.push("/");
  }
  return (
    <div>
      <h1>The Page isn't exist</h1>
      <button
        style={{ cursor: "pointer", padding: "10px" }}
        onClick={() => returnToHome()}
      >
        Return to Home
      </button>
    </div>
  );
}
