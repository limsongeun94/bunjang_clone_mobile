import "../_styles/global.scss";
import "../_styles/etc.scss";
import { useEffect, useState, useRef } from "react";

type ModalProps = {
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  used: boolean;
  setUsed: React.Dispatch<React.SetStateAction<boolean>>;
  exchangeable: boolean;
  setExchangeable: React.Dispatch<React.SetStateAction<boolean>>;
};

export default (props: ModalProps) => {
  const {
    viewMode,
    setViewMode,
    quantity,
    setQuantity,
    used,
    setUsed,
    exchangeable,
    setExchangeable,
  } = props;

  return (
    <div
      className={`etc_component modal_bg ${
        viewMode === "etc" ? "modal_shown" : "modal_hidden"
      }`}
    >
      <div className="etc_header">
        <button onClick={() => setViewMode("main")}>
          <img src="/icons/back.svg" />
        </button>
        <h1>세부사항 선택</h1>
        <button>
          <img src="/icons/check.svg" />
        </button>
      </div>
      <div className="label_container">
        <div className="label_wrapper">
          <label htmlFor="quantity">
            <span>수량</span>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="999"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              value={quantity}
            />
          </label>
        </div>
        <div className="radio_wrapper">
          <span>상태</span>
          <label htmlFor="used">
            <input
              type="radio"
              id="used"
              name="used"
              onClick={() => {
                setUsed(true);
              }}
              defaultChecked={used ? true : false}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill={used ? "#FF5058" : "#C3C2CC"}
                fillRule="evenodd"
                d={
                  used
                    ? "M8 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM8 1.6c3.529 0 6.4 2.871 6.4 6.4 0 3.529-2.871 6.4-6.4 6.4-3.529 0-6.4-2.871-6.4-6.4 0-3.529 2.871-6.4 6.4-6.4zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                    : "M8 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM8 1.6c3.529 0 6.4 2.871 6.4 6.4 0 3.529-2.871 6.4-6.4 6.4-3.529 0-6.4-2.871-6.4-6.4 0-3.529 2.871-6.4 6.4-6.4z"
                }
              ></path>
            </svg>
            중고상품
          </label>
          <label htmlFor="new">
            <input
              type="radio"
              id="new"
              name="new"
              onClick={() => {
                setUsed(false);
              }}
              defaultChecked={used ? false : true}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill={used ? "#C3C2CC" : "#FF5058"}
                fillRule="evenodd"
                d={
                  used
                    ? "M8 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM8 1.6c3.529 0 6.4 2.871 6.4 6.4 0 3.529-2.871 6.4-6.4 6.4-3.529 0-6.4-2.871-6.4-6.4 0-3.529 2.871-6.4 6.4-6.4z"
                    : "M8 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM8 1.6c3.529 0 6.4 2.871 6.4 6.4 0 3.529-2.871 6.4-6.4 6.4-3.529 0-6.4-2.871-6.4-6.4 0-3.529 2.871-6.4 6.4-6.4zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                }
              ></path>
            </svg>
            새상품
          </label>
        </div>
        <div className="radio_wrapper">
          <span>교환</span>
          <label htmlFor="nonexchange">
            <input
              type="radio"
              id="nonexchange"
              name="nonexchange"
              onClick={(e) => setExchangeable(false)}
              defaultChecked={exchangeable ? false : true}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill={exchangeable ? "#C3C2CC" : "#FF5058"}
                fillRule="evenodd"
                d={
                  exchangeable
                    ? "M8 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM8 1.6c3.529 0 6.4 2.871 6.4 6.4 0 3.529-2.871 6.4-6.4 6.4-3.529 0-6.4-2.871-6.4-6.4 0-3.529 2.871-6.4 6.4-6.4z"
                    : "M8 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM8 1.6c3.529 0 6.4 2.871 6.4 6.4 0 3.529-2.871 6.4-6.4 6.4-3.529 0-6.4-2.871-6.4-6.4 0-3.529 2.871-6.4 6.4-6.4zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                }
              ></path>
            </svg>
            교환불가
          </label>
          <label htmlFor="exchange">
            <input
              type="radio"
              id="exchange"
              name="exchange"
              onClick={(e) => setExchangeable(true)}
              defaultChecked={exchangeable ? true : false}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill={exchangeable ? "#FF5058" : "#C3C2CC"}
                fillRule="evenodd"
                d={
                  exchangeable
                    ? "M8 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM8 1.6c3.529 0 6.4 2.871 6.4 6.4 0 3.529-2.871 6.4-6.4 6.4-3.529 0-6.4-2.871-6.4-6.4 0-3.529 2.871-6.4 6.4-6.4zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                    : "M8 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM8 1.6c3.529 0 6.4 2.871 6.4 6.4 0 3.529-2.871 6.4-6.4 6.4-3.529 0-6.4-2.871-6.4-6.4 0-3.529 2.871-6.4 6.4-6.4z"
                }
              ></path>
            </svg>
            교환가능
          </label>
        </div>
      </div>
    </div>
  );
};
