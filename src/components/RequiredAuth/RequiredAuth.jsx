import { Navigate } from 'react-router-dom';
import {checkCurrentUserStateAtom} from "@/components/Header/Header";
import { useRecoilValue } from 'recoil';

export function RequireAuth({children}) {

  const checkCurrentUserState = useRecoilValue(checkCurrentUserStateAtom);

  return (
    checkCurrentUserState ? {children} : <Navigate to ="/login" />
  )
}