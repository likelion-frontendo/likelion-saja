import {useState} from "react";
import {ReactComponent as CameraIcon} from "@/assets/Post/camera-fill.svg";
import styled from "styled-components/macro";

export function PostImage() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif" || file.type === "image/bmp");
    const newImages = imageFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    if (images.length + newImages.length <= 6) {
      setImages([...images, ...newImages]);
    } else {
      alert("최대 6개 까지 업로드할 수 있습니다.");
    }
  };

  const handleImageDelete = (index) => {
    setImages(images.filter((image, i) => i !== index));
  };
  return (
    <PostImageSection>
      <div>
        <label for="file">
          <CameraIcon className="PostImageIcon FileUpload" />
        </label>
        <input type="file" name="file" id="file" accept=".jpg,.jpeg,.png,.gif,.bmp" multiple required onChange={handleImageChange}></input>
      </div>
      <div className="PreviewImage">
        {images.map((image, index) => (
          <div key={index} className="PreviewImageItem">
            <img src={image.url} alt={image.name} />
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
