"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ProcessCardProps {
  Title: string;
  Content: string;
  Img: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ Title, Content, Img }) => {
  return (
    <div className="cs_card cs_style_1">
      <div className="cs_card_in cs_white_bg ml-4">
        <div className="cs_card_icon cs_center cs_mb_30">
          <Image src={Img} alt={Title} width={100} height={100} />
        </div>
        <h3 className="cs_fs_24 cs_semibold cs_mb_6">{Title}</h3>
        <p className="cs_fs_14 cs_mb_25">{Content}</p>
        <Link
          href="/about"
          className="cs_text_btn cs_fs_14 text-uppercase cs_heading_color cs_bold"
        >
          READ MORE
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block ml-1"
          >
            <path
              d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="cs_card_shape">
        <svg
          width="305"
          height="145"
          viewBox="0 0 305 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProcessCard;
