import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      console.log("Calling profile api")  
      const currentUser = await client.profile();
      console.log(currentUser)
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    console.log("completed")
    setPending(false);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  if (!pending) {
    return children;
  }
}
