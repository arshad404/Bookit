// import Router from "next/dist/server/router";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useRequestHook from "../../hooks/use-request";

const Signout = () => {
  const router = useRouter();
  const { doRequest } = useRequestHook({
    url: "/api/users/signout",
    method: "get",
    body: {},
    onSuccess: () => router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing out...</div>;
};

export default Signout;
