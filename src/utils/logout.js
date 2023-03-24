import {auth} from "@/firebase/app";
import {signOut} from "firebase/auth";

export async function useLogout() {
  await signOut(auth);
  console.log("로그아웃!");
}
