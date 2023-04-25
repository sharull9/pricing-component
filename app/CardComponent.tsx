import React from "react";

type Props = {
  size?: String;
  title?: String;
  buttonText?: String;
  price?: Number | any;
};

export default function CardComponent({
  size,
  title,
  buttonText,
  price,
}: Props) {
  return (
    <div
      className={`${size == "small" ? "text-clr-600" : null} ${
        size == "large" ? "text-clr-200" : null
      } text-center`}
    >
      <div>
        <h2>{title} Basic</h2>
      </div>
      <div>
        <p className="text-4xl">
          <span className="text-base">$</span>
          {price}999.00
        </p>
      </div>
      <div
        className={`${size == "small" ? "text-clr-600" : null} ${
          size == "large" ? "text-clr-200" : null
        } text-center list-none`}
      >
        <li className="border-b border-b-clr-600">500gb storage</li>
        <li>2 users allowed</li>
        <li>send up to 3 gb</li>
      </div>
      <button
        className={`${size == "small" ? "bg-gradientClr text-white" : null} ${
          size == "large" ? "bg-white text-gradientTwo" : null
        } block w-full rounded-[4px] tracking-wider text-xs py-2 `}
      >
        {buttonText}LEARN MORE
      </button>
    </div>
  );
}
