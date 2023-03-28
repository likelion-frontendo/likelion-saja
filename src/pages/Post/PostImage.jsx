import {useEffect} from "react";
import {ReactComponent as CameraIcon} from "@/assets/Post/camera-fill.svg";
import styled from "styled-components/macro";
import {storage} from "./../../firebase/app";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import {useRecoilState} from "recoil";
import {imagesAtom, imageListAtom} from "./postAtoms";

export function PostImage() {
  const [images, setImages] = useRecoilState(imagesAtom);
  const [imageList, setImageList] = useRecoilState(imageListAtom);

  useEffect(() => {
    console.log("PostImage: ", imageList);
  }, [imageList]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif" || file.type === "image/bmp");
    const newImages = imageFiles.map((file) => ({
      name: file.name,
      file: file,
      url: URL.createObjectURL(file),
    }));
    if (newImages.length > 0) {
      const span = document.querySelector(".PreviewImage span");
      if (span) {
        span.style.display = "none";
      }
    }
    if (images.length + newImages.length <= 6) {
      setImages([...images, ...newImages]);
    } else {
      alert("최대 6개 까지 업로드할 수 있습니다.");
    }

    if (newImages == null) return;
    newImages.forEach((newImage) => {
      const imageRef = ref(storage, `post/${newImage.file.name + v4()}`);
      uploadBytes(imageRef, newImage.file).then((snaphsot) => {
        getDownloadURL(snaphsot.ref).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  };

  function handleDrop(e) {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    const newImages = newFiles
      .filter((file) => file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif" || file.type === "image/bmp")
      .map((file) => ({name: file.name, url: URL.createObjectURL(file)}));
    if (newImages.length > 0) {
      const span = document.querySelector(".PreviewImage span");
      if (span) {
        span.style.display = "none";
      }
    }
    if (images.length + newImages.length <= 6) {
      setImages([...images, ...newImages]);
    } else {
      alert("최대 6개 까지 업로드할 수 있습니다.");
    }
  }

  const handleImageDelete = (index) => {
    setImages(images.filter((image, i) => i !== index));
  };

  return (
    <PostImageSection>
      <div>
        <label htmlFor="file">
          <CameraIcon className="PostImageIcon FileUpload" />
        </label>
        <input type="file" name="file" id="file" accept=".jpg,.jpeg,.png,.gif,.bmp" multiple required onChange={handleImageChange}></input>
      </div>
      <div className="PreviewImage" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        {images.length === 0 && <span>이미지를 드래그 해주세요</span>}
        {images.map((image, index) => (
          <div key={image.name} className="PreviewImageItem">
            <img src={image.url} key={index} alt={image.name} />
            <button onClick={() => handleImageDelete(index)}>X</button>
          </div>
        ))}
      </div>
    </PostImageSection>
  );
}

const PostImageSection = styled.div`
  margin-top: 60px;
  display: flex;

  & .PostImageIcon {
    width: 160px;
    height: 160px;
    border: 2px solid #a5b2a6;
    border-radius: 12px;
    fill: #dcdee3;
    align-items: center;
    justify-content: center;
    padding: 40px;
    margin-right: 24px;
    cursor: pointer;

    &:hover {
      fill: #f8e1db;
    }
  }

  #file {
    display: none;
  }

  button {
    background-color: #eca997;
    color: #fff;
    border: none;
    border-radius: 10px;
    margin: -20px 0 0 -30px;
    padding: 5px 10px;
    position: absolute;
    top: 20px;
    right: 0;
  }

  .PreviewImage {
    border: 2px solid #a5b2a6;
    border-radius: 12px;
    width: 872px;
    height: 160px;
    display: flex;
    align-items: center;
    padding: 24px;
    justify-content: center;

    & span {
      color: #868b94;
    }
  }

  .PreviewImage img {
    width: 100px;
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
  }

  .PreviewImageItem {
    margin-right: 40px;
    position: relative;
  }
`;
