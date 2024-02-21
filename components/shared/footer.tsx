import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Footer() {
  const links = [
    {
      image: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clip-path="url(#clip0_2128_606)">
            <mask
              id="mask0_2128_606"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="22"
              height="22"
            >
              <path d="M22 0H0V22H22V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_2128_606)">
              <mask
                id="mask1_2128_606"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="22"
                height="22"
              >
                <path d="M22 0H0V22H22V0Z" fill="white" />
              </mask>
              <g mask="url(#mask1_2128_606)">
                <path
                  d="M15.5014 3.55713H18.0268L12.5097 9.86289L19.0001 18.4435H13.9182L9.93775 13.2393L5.3833 18.4435H2.85646L8.75755 11.6988L2.53125 3.55713H7.74222L11.3402 8.3139L15.5014 3.55713ZM14.6152 16.932H16.0145L6.98187 4.98927H5.48025L14.6152 16.932Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2128_606">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "Twitter",
      id: "@Trovelabs_Official",
      link: "/",
    },
    {
      image: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M7.3684 3.36279C6.66943 3.36279 4.56213 4.21767 4.18406 4.38851C3.80599 4.55936 3.38635 5.09268 2.91019 5.97289C2.43339 6.85309 2.05077 7.88206 1.42911 9.39563C0.808088 10.9092 0.663228 13.8272 0.684015 14.7178C0.704802 15.6084 0.806789 16.3041 1.71948 16.8309C2.63152 17.3571 3.43832 17.908 4.28735 18.2393C5.13702 18.5706 5.71647 18.809 6.11012 18.4777C6.50378 18.1464 6.76297 17.5663 6.76297 17.5663C6.76297 17.5663 7.13584 17.0486 6.43168 16.7381C5.72751 16.4269 5.37543 16.2093 5.40596 15.8884C5.43714 15.5675 5.48846 15.3914 5.6645 15.433C5.84054 15.4746 6.25563 16.2197 7.8504 16.5614C9.44517 16.9031 10.9997 16.8517 10.9997 16.8517C10.9997 16.8517 12.5548 16.9037 14.1496 16.5614C15.7443 16.2197 16.1588 15.4746 16.3348 15.433C16.5109 15.3914 16.5622 15.5675 16.5934 15.8877C16.6245 16.2093 16.2725 16.4269 15.5683 16.7381C14.8641 17.0486 15.237 17.5663 15.237 17.5663C15.237 17.5663 15.4962 18.1457 15.8899 18.4777C16.2829 18.809 16.863 18.5706 17.712 18.2393C18.561 17.908 19.3685 17.3578 20.2805 16.8309C21.1932 16.3041 21.2952 15.6084 21.316 14.7178C21.3367 13.8278 21.1919 10.9092 20.5702 9.39563C19.9492 7.88206 19.5659 6.85309 19.0891 5.97289C18.6136 5.09268 18.1933 4.55936 17.8159 4.38786C17.4378 4.21767 15.3299 3.36279 14.6309 3.36279C13.932 3.36279 13.7254 3.84999 13.7254 3.84999L13.4818 4.38851C13.4818 4.38851 11.8448 4.07735 11.0107 4.0767C10.1766 4.0767 8.51819 4.38851 8.51819 4.38851L8.27459 3.84934C8.27459 3.84934 8.06802 3.36279 7.3684 3.36279ZM7.4444 9.82501H7.47039C8.48961 9.82501 9.31525 10.7169 9.31525 11.8167C9.31525 12.9171 8.48961 13.8084 7.47039 13.8084C6.45116 13.8084 5.62552 12.9171 5.62552 11.8167C5.62487 10.7273 6.43557 9.83995 7.4444 9.82501ZM14.5296 9.82501H14.5556C15.5644 9.83995 16.3745 10.728 16.3745 11.8167C16.3745 12.9171 15.5488 13.8084 14.5296 13.8084C13.5097 13.8084 12.6847 12.9171 12.6847 11.8167C12.6847 10.7169 13.5097 9.82501 14.5296 9.82501Z"
            fill="white"
          />
        </svg>
      ),
      name: "Discord",
      id: "@Trovelabs_Org",
      link: "/",
    },
    {
      image: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M6.85386 6.4165C4.08115 6.4165 1.8335 8.67899 1.8335 11.4714C2.09823 18.1775 11.6108 18.1745 11.8744 11.4714C11.8746 8.67976 9.62654 6.4165 6.85386 6.4165ZM14.8718 6.71301C13.4855 6.71301 12.3615 8.84399 12.3615 11.4714C12.4992 17.7859 17.2449 17.7859 17.3821 11.4714C17.3821 8.84399 16.2583 6.71301 14.8718 6.71301ZM18.7521 7.20802C17.5926 7.29004 17.595 15.6574 18.752 15.7347C19.9113 15.6534 19.9092 7.28484 18.7521 7.20802Z"
            fill="white"
          />
        </svg>
      ),
      name: "Medium",
      id: "@Trovelabs_Blogs",
      link: "/",
    },
    {
      image: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.875 3.14209C4.59682 3.14209 2.75 4.98891 2.75 7.26709V15.5171C2.75 17.7953 4.59682 19.6421 6.875 19.6421H15.125C17.4032 19.6421 19.25 17.7953 19.25 15.5171V7.26709C19.25 4.98891 17.4032 3.14209 15.125 3.14209H6.875ZM11 8.39209C9.34314 8.39209 8 9.73523 8 11.3921C8 13.0489 9.34314 14.3921 11 14.3921C12.6568 14.3921 14 13.0489 14 11.3921C14 9.73523 12.6568 8.39209 11 8.39209ZM6.5 11.3921C6.5 8.90681 8.51472 6.89209 11 6.89209C13.4853 6.89209 15.5 8.90681 15.5 11.3921C15.5 13.8774 13.4853 15.8921 11 15.8921C8.51472 15.8921 6.5 13.8774 6.5 11.3921ZM15.5 5.39209C14.6715 5.39209 14 6.06366 14 6.89209C14 7.72052 14.6715 8.39209 15.5 8.39209C16.3285 8.39209 17 7.72052 17 6.89209C17 6.06366 16.3285 5.39209 15.5 5.39209Z"
            fill="white"
          />
        </svg>
      ),
      name: "Instagram",
      id: "@Trove_Labs",
      link: "/",
    },
  ];
  return (
    <footer className="container py-12 grid lg:grid-cols-2 gap-16">
      <div className="flex flex-col justify-between gap-8">
        <div className="space-y-4">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="194"
              height="45"
              viewBox="0 0 194 45"
              fill="none"
            >
              <path
                d="M16.8382 44.4123L16.8885 28.3467L9.75098 30.317C11.7448 34.6618 15.8229 43.4726 16.1848 43.9576C16.5467 44.4426 16.7712 44.4628 16.8382 44.4123Z"
                fill="url(#paint0_linear_2128_588)"
              />
              <path
                d="M17.5917 43.9555C17.2301 44.442 16.8683 44.4666 16.8013 44.4159L16.8516 28.145H25.3269C27.8048 29.4288 32.8812 32.047 33.3634 32.2497C33.8455 32.4524 33.3968 32.7395 33.1122 32.8578L22.8657 32.9591L17.5917 43.9555Z"
                fill="url(#paint1_linear_2128_588)"
              />
              <path
                d="M25.1032 27.6484L28.2722 29.2069C29.999 30.0562 31.8115 28.2155 30.9357 26.502L22.9007 10.7812C22.4498 9.89906 21.421 9.47994 20.482 9.79586L18.8738 10.3369C17.7376 10.7192 17.1906 12.0083 17.7053 13.0911L24.1795 26.7123C24.3731 27.1195 24.6986 27.4494 25.1032 27.6484Z"
                fill="url(#paint2_linear_2128_588)"
              />
              <path
                d="M0.50718 32.7696C0.809292 32.7696 8.96633 27.6322 8.96633 27.6322L16.8716 11.7212L26.6399 18.2552C26.6399 18.2552 17.7509 0 16.8213 0C15.8916 0 0.688447 29.8967 0.205067 31.1735C-0.278313 32.4504 0.205067 32.7696 0.50718 32.7696Z"
                fill="url(#paint3_linear_2128_588)"
              />
              <path
                d="M9.291 28.145L1.50781 32.9704H11.0094L19.9044 28.145H9.291Z"
                fill="url(#paint4_linear_2128_588)"
              />
              <path
                d="M51.8599 18.6023H46.665V15.958H60.4352V18.6023H55.2403V32.0534H51.8599V18.6023Z"
                fill="white"
              />
              <path
                d="M76.0939 26.7189V32.0534H72.7135V27.4317L71.2222 25.8912H65.8036V32.0534H62.4232V15.958H73.3349L75.9945 18.4413V23.3159L74.3043 24.9025L76.0939 26.7189ZM65.8036 23.3159H71.7939L72.6638 22.5111V19.384L71.7939 18.5793H65.8036V23.3159Z"
                fill="white"
              />
              <path
                d="M78.9475 29.4092V18.6023L81.8059 15.958H90.754L93.6124 18.6023V29.4092L90.754 32.0534H81.8059L78.9475 29.4092ZM88.9644 29.3862L90.232 28.2135V19.7979L88.9644 18.6252H83.5955L82.3279 19.7979V28.2135L83.5955 29.3862H88.9644Z"
                fill="white"
              />
              <path
                d="M94.8688 15.958H98.3486L102.674 28.3285H102.723L107.048 15.958H110.528L104.339 32.0534H101.058L94.8688 15.958Z"
                fill="white"
              />
              <path
                d="M112.402 15.958H124.979V18.6023H115.782V22.6721H124.258V25.2704H115.782V29.4092H124.979V32.0534H112.402V15.958Z"
                fill="white"
              />
              <path
                d="M134.248 15.958H137.628V29.4092H146.328V32.0534H134.248V15.958Z"
                fill="white"
              />
              <path
                d="M153.052 15.958H156.135L162.498 32.0534H159.068L157.651 28.4894H151.536L150.119 32.0534H146.689L153.052 15.958ZM156.905 25.9142L154.593 19.7979H154.544L152.307 25.9142H156.905Z"
                fill="white"
              />
              <path
                d="M164.25 15.958H175.161L177.647 18.2574V22.7641L176.653 23.7068L178.417 25.3623V29.5701L175.733 32.0534H164.25V15.958ZM173.421 22.6951L174.316 21.8673V19.384L173.446 18.5793H167.555V22.6951H173.421ZM174.018 29.4322L175.087 28.4435V26.1901L174.018 25.2014H167.555V29.4322H174.018Z"
                fill="white"
              />
              <path
                d="M180.528 29.5701V27.2708H183.859V28.6274L184.679 29.3862H189.824L190.669 28.6044V25.9372L189.849 25.1784H183.262L180.578 22.6951V18.4413L183.262 15.958H191.117L193.801 18.4413V20.7636H190.471V19.384L189.65 18.6252H184.729L183.909 19.384V21.7524L184.729 22.5111H191.316L194 24.9944V29.5241L191.266 32.0534H183.213L180.528 29.5701Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2128_588"
                  x1="12.3241"
                  y1="31.5734"
                  x2="16.8885"
                  y2="45.2484"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0681C5" />
                  <stop offset="1" stop-color="#0CCBF7" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2128_588"
                  x1="18.3964"
                  y1="29.1025"
                  x2="29.2032"
                  y2="43.3272"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#031020" />
                  <stop offset="1" stop-color="#0698CB" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2128_588"
                  x1="18.4318"
                  y1="12.3048"
                  x2="33.0366"
                  y2="31.8649"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#12293F" />
                  <stop offset="0.5091" stop-color="#00BAF6" />
                  <stop offset="1" stop-color="#23C8DE" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2128_588"
                  x1="15.3487"
                  y1="11.359"
                  x2="0.697907"
                  y2="32.7696"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#03D5F8" />
                  <stop offset="1" stop-color="#00DDF9" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_2128_588"
                  x1="19.9044"
                  y1="27.7834"
                  x2="1.50781"
                  y2="32.9704"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#25BDE2" />
                  <stop offset="1" stop-color="#0282BF" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <p>
            Join Trove Labs and experience a new era of innovation, efficiency,
            and endless possibilities. Your financial journey starts here!
          </p>
        </div>
        <div className="flex divide-x ">
          <p className="pr-2">© 2024 Trove Labs, All Rights Reserved</p>
          <Link href="/" className="px-2">
            Terms & Conditions
          </Link>
          <Link href="/" className="px-2">
            DOCs
          </Link>
        </div>
      </div>

      <div className=" pb-2">
        {links.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.10)]"
          >
            <div className="flex items-center gap-2">
              <item.image />
              <p>{item.name}</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-white/70">{item.id}</p>
              <MdArrowOutward />
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}