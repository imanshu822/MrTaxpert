"use client";
import Marquee from "react-fast-marquee";

const Content = () => {
  return (
    <div className="flex gap-2 items-center shrink-0 whitespace-nowrap mx-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clip-path="url(#clip0_397_14565)">
          <g filter="url(#filter0_d_397_14565)">
            <path
              d="M11.3728 6.41449C11.1021 5.4227 12.3244 4.717 13.0479 5.44736L20.5197 12.9896C20.7049 13.1765 20.9564 13.2829 21.2195 13.2857L30.228 13.3813C30.9883 13.3894 31.4618 14.2095 31.0886 14.8721L26.6672 22.7214C26.5381 22.9507 26.5045 23.2217 26.5738 23.4756L29.3696 33.7174C29.6404 34.7092 28.4181 35.4149 27.6945 34.6845L20.2227 27.1424C20.0375 26.9554 19.7861 26.849 19.5229 26.8462L10.5145 26.7506C9.75413 26.7425 9.28063 25.9224 9.65381 25.2598L14.0752 17.4105C14.2044 17.1812 14.2379 16.9102 14.1686 16.6563L11.3728 6.41449Z"
              fill="#A66EFE"
            />
            <path
              d="M11.3728 6.41449C11.1021 5.4227 12.3244 4.717 13.0479 5.44736L20.5197 12.9896C20.7049 13.1765 20.9564 13.2829 21.2195 13.2857L30.228 13.3813C30.9883 13.3894 31.4618 14.2095 31.0886 14.8721L26.6672 22.7214C26.5381 22.9507 26.5045 23.2217 26.5738 23.4756L29.3696 33.7174C29.6404 34.7092 28.4181 35.4149 27.6945 34.6845L20.2227 27.1424C20.0375 26.9554 19.7861 26.849 19.5229 26.8462L10.5145 26.7506C9.75413 26.7425 9.28063 25.9224 9.65381 25.2598L14.0752 17.4105C14.2044 17.1812 14.2379 16.9102 14.1686 16.6563L11.3728 6.41449Z"
              stroke="#A66EFE"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_397_14565"
            x="9.02344"
            y="4.64368"
            width="24.6963"
            height="33.8445"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0156863 0 0 0 0 0.0901961 0 0 0 0 0.2 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_397_14565"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_397_14565"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_397_14565">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-semibold uppercase">
        we’re <span className="text-[#44D6B9]">Creative design agency</span>
      </h2>
    </div>
  );
};

const TaglineMarquee = () => {
  return (
    <Marquee
      className="bg-[#44D6B9]/10  py-2 md:py-4 my-10"
      autoFill
      pauseOnHover
    >
      <Content />
    </Marquee>
  );
};

export default TaglineMarquee;
