import {Navigate} from "react-router-dom";
import {checkCurrentUserStateAtom} from "@/components/Header/Header";
import {useRecoilValue} from "recoil";
import {uidAtom} from "@/pages/Register/atoms/uidAtom";

export function RequireAuth({children}) {
  const checkCurrentUserState = useRecoilValue(checkCurrentUserStateAtom);
  const uid = useRecoilValue(uidAtom);

  console.log(checkCurrentUserState, uid);

  return checkCurrentUserState ? children : <Navigate to="/login" />;
}