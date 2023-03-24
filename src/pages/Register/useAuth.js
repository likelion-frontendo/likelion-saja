import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "@/firebase/app";
import {useRecoilState} from "recoil";
import {currentUserAtom} from "./atoms";

export function useAuth() {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
}
