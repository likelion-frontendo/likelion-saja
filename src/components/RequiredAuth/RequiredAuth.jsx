import { Navigate } from 'react-router-dom';
import {checkCurrentUserStateAtom} from "@/components/Header/Header";
import { useRecoilState, useRecoilValue } from 'recoil';
import { uidAtom } from '@/pages/Register/atoms/uidAtom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/app';

export function RequireAuth({children}) {

  const [checkCurrentUserState, setCheckCurrentUserState] = useRecoilState(checkCurrentUserStateAtom);
  console.log(checkCurrentUserState);

  return (
    checkCurrentUserState ? {children} : <Navigate to ="/login" />
  )
}