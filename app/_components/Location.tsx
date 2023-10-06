import "../_styles/global.scss";
import "../_styles/location.scss";
import { useState, useRef, useEffect } from "react";
import { KeyboardEvent, MouseEvent } from "react";
import axios from "axios";

type ModalProps = {
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

export default ({
  viewMode,
  setViewMode,
  location,
  setLocation,
}: ModalProps) => {
  // location은 inputValue | tradeLocation | "" 이 있음.

  const ref = useRef<HTMLInputElement>(null);

  // 직접 입력 받는 위치 정보
  const [inputValue, setInputValue] = useState("");

  // inputValue를 set하는 함수
  const onSubmit = (
    e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
  ) => {
    const { key } = e as KeyboardEvent<HTMLInputElement>;
    const { button } = e as MouseEvent<HTMLButtonElement>;
    if (key === "Enter" || button === 0) {
      if (ref.current!.value === "") {
        return;
      } else {
        setInputValue(ref.current!.value);
      }
    }
  };

  // 현재 위치 정보
  const [tradeLocation, setTradeLocation] = useState("");

  const [longitude, setLongitude] = useState(""); // 경도
  const [latitude, setLatitude] = useState(""); // 위도

  // 현재 위치의 위도와 경도를 구하는 함수
  const getMyLocatLon = () => {
    const success = (event: any) => {
      setLongitude(event.coords.longitude); // 경도
      setLatitude(event.coords.latitude); // 위도
    };
    if (window.navigator.geolocation) {
      // geolocation 지원할 경우 현재 위치 get
      window.navigator.geolocation.getCurrentPosition(success);
    }
  };

  // 경도와 위도를 인자로 받아 지역 이름을 구하는 함수
  const getMyAddress = async () => {
    try {
      let response = await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?&x=${longitude}&y=${latitude}`,
          {
            headers: {
              Authorization: "KakaoAK 8c968b954fec27d48c45cde969ac5cfc",
            },
          }
        )
        .then((response) => {
          const region = response.data.documents.find(
            (el: any) => el.region_type === "H"
          );
          setTradeLocation(region.address_name);
        });
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getMyAddress();
  }, [longitude && latitude]);

  return (
    <div
      className={`location_component modal_bg ${
        viewMode === "location" ? "modal_shown" : "modal_hidden"
      }`}
    >
      <div className="location_header">
        <button onClick={() => setViewMode("main")}>
          <img src="/icons/back.svg" />
        </button>
        <h1>선호 거래지역</h1>
        <button onClick={() => setViewMode("main")}>
          <img src="/icons/check.svg" />
        </button>
      </div>
      <div className="location_section">
        <div className="location_input_container">
          <div style={{ fontSize: "0.875rem" }}>직접 입력</div>
          <div className="location_input_wrapper">
            <input
              ref={ref}
              type="text"
              placeholder="예) 서울특별시 서초구 서초2등"
              onKeyUp={(e) => onSubmit(e)}
            />
            <button onClick={(e) => onSubmit(e)}>입력</button>
          </div>
        </div>
        <button onClick={getMyLocatLon} className="location_now">
          <img src="/icons/location.svg" width="20px" height="20px" />현 위치로
          주소 설정
        </button>
        <div className="location_select">
          <h2>지역선택</h2>
          <span>1개의 지역만 선택 가능합니다</span>
          <div className="location_list">
            <button
              onClick={() => setLocation("")}
              className={location === "" ? "active" : "nonactive"}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>5790A3A2-74E4-43BA-9A35-E8E0C300CCC1</title>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-51.000000, -634.000000)"
                    fill={location === "" ? "#FF5058" : "#9B99A9"}
                  >
                    <g
                      id="Group-10"
                      transform="translate(0.000000, 383.000000)"
                    >
                      <g transform="translate(0.000000, 159.000000)">
                        <g
                          id="Group-9"
                          transform="translate(51.000000, 92.000000)"
                        >
                          <g
                            id="Icon-(아이콘)/-ic_accept"
                            transform="translate(-0.000000, -0.000000)"
                          >
                            <path
                              d="M6.326,16.674 C6.502,16.85 6.732,16.938 6.963,16.938 C7.193,16.938 7.424,16.85 7.599,16.674 L18.737,5.536 C19.089,5.185 19.089,4.615 18.737,4.264 C18.386,3.912 17.815,3.912 17.464,4.264 L6.963,14.765 L2.537,10.339 C2.185,9.987 1.615,9.987 1.264,10.339 C0.912,10.69 0.912,11.26 1.264,11.612 L6.326,16.674 Z"
                              id="Fill-1"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              지역설정 안함
            </button>
            {inputValue ? (
              <button
                onClick={() => setLocation(inputValue)}
                className={location === inputValue ? "active" : "nonactive"}
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>5790A3A2-74E4-43BA-9A35-E8E0C300CCC1</title>
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-51.000000, -634.000000)"
                      fill={location === inputValue ? "#FF5058" : "#9B99A9"}
                    >
                      <g
                        id="Group-10"
                        transform="translate(0.000000, 383.000000)"
                      >
                        <g transform="translate(0.000000, 159.000000)">
                          <g
                            id="Group-9"
                            transform="translate(51.000000, 92.000000)"
                          >
                            <g
                              id="Icon-(아이콘)/-ic_accept"
                              transform="translate(-0.000000, -0.000000)"
                            >
                              <path
                                d="M6.326,16.674 C6.502,16.85 6.732,16.938 6.963,16.938 C7.193,16.938 7.424,16.85 7.599,16.674 L18.737,5.536 C19.089,5.185 19.089,4.615 18.737,4.264 C18.386,3.912 17.815,3.912 17.464,4.264 L6.963,14.765 L2.537,10.339 C2.185,9.987 1.615,9.987 1.264,10.339 C0.912,10.69 0.912,11.26 1.264,11.612 L6.326,16.674 Z"
                                id="Fill-1"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                {inputValue}
              </button>
            ) : (
              ""
            )}
            {tradeLocation ? (
              <button
                onClick={() => setLocation(tradeLocation)}
                className={location === tradeLocation ? "active" : "nonactive"}
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>5790A3A2-74E4-43BA-9A35-E8E0C300CCC1</title>
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-51.000000, -634.000000)"
                      fill={location === tradeLocation ? "#FF5058" : "#9B99A9"}
                    >
                      <g
                        id="Group-10"
                        transform="translate(0.000000, 383.000000)"
                      >
                        <g transform="translate(0.000000, 159.000000)">
                          <g
                            id="Group-9"
                            transform="translate(51.000000, 92.000000)"
                          >
                            <g
                              id="Icon-(아이콘)/-ic_accept"
                              transform="translate(-0.000000, -0.000000)"
                            >
                              <path
                                d="M6.326,16.674 C6.502,16.85 6.732,16.938 6.963,16.938 C7.193,16.938 7.424,16.85 7.599,16.674 L18.737,5.536 C19.089,5.185 19.089,4.615 18.737,4.264 C18.386,3.912 17.815,3.912 17.464,4.264 L6.963,14.765 L2.537,10.339 C2.185,9.987 1.615,9.987 1.264,10.339 C0.912,10.69 0.912,11.26 1.264,11.612 L6.326,16.674 Z"
                                id="Fill-1"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                {tradeLocation}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
