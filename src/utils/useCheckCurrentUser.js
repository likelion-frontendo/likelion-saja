import {currentUserAtom} from "@/atoms/currentUser";
import {auth} from "@/firebase/app";
import {onAuthStateChanged} from "firebase/auth";
import {useEffect} from "react";
import {useRecoilState} from "recoil";

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  useEffect(() => {
    const userData = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return userData;
  }, []);
  return currentUser;
}
