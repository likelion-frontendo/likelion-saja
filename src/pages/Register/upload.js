import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {updateProfile} from "firebase/auth";
import {storage} from "@/firebase/app";

export async function upload(file) {
  const fileRef = ref(storage, "profiles/" + file.name);
  const snapshot = await uploadBytes(fileRef, file);
  console.log("업로드됨!");
  const photoURL = await getDownloadURL(fileRef);
  return photoURL;
}
