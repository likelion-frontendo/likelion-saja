import {auth} from "@/firebase/app";
import {signOut} from "firebase/auth";

export async function logout() {
  try {
    await signOut(auth);
    console.log("로그아웃!");
  } catch (error) {
    console.log(error.message);
  }
}
