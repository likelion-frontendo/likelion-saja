import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import topBtn from "@/assets/top-btn.svg";
import {Button} from "@/components/Button/Button";
import {useNavigate} from "react-router-dom";
import {checkCurrentUserStateAtom} from "@/components/Header/Header";
import {useRecoilValue} from "recoil";

export function UpButton() {
  const checkCurrentUserState = useRecoilValue(checkCurrentUserStateAtom);
  const navigate = useNavigate();
  function clickNavigate() {
    navigate("/post");
  }

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <TopButton>
        {checkCurrentUserState && (
          <Button className="PostBtn" onClick={clickNavigate}>
            <p>+</p>
          </Button>
        )}
        <div>
          <Button onClick={scrollToTop} className="TopBtn">
            <img src={topBtn} alt="위로 가기"></img>
          </Button>
        </div>
      </TopButton>
    )
  );
}

const TopButton = styled.div`
  position: fixed;
  text-align: center;
  right: 5%;
  bottom: 5%;
  z-index: 1;

  & .PostBtn {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
    background-color: #eca997;
    border: 0;
    border-radius: 50%;
    position: relative;

    &:hover {
      opacity: 80%;
    }

    &:hover p {
      font-size: 0;
    }

    &:hover:before {
      content: "글쓰기";
      font-size: 14px;
      color: #fff;
      font-weight: 600;
    }

    & p {
      color: #fff;
      font-weight: 600;
      font-size: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -57%);
    }
  }

  & .TopBtn {
    cursor: pointer;
    padding: 0;
    border: 0;
    background: 0;

    &:hover {
      opacity: 80%;
    }
  }
`;
