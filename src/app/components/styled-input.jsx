"use client";
import React from "react";

const StyledInput = ({
  type = "text",
  label,
  value,
  onChange,
  onBlur,
  error = false,
  errorMessage = "",
  icon = false,
  rows = "7",
}) => {
  const servicesData = [
    { label: "PPC" },
    { label: "SEO" },
    { label: "App Development" },
    { label: "Web Design" },
  ];

  const sharedInputClasses = `w-full text-text-light rounded-[6px] bg-[#212121] px-[18px] text-[#211F24] text-[14px]
    transition-all outline-none appearance-none ease-in-out delay-600 duration-500 
    ${error ? "border-error-active focus:border-error-active" : ""}`;

  const labelContent = (
    <label
      htmlFor={label}
      className="block text-body-small leading-none text-text-light"
    >
      {label}
    </label>
  );

  return type === "textarea" ? (
    <div>
      {labelContent}
      <div className="flex flex-col">
        <textarea
          name={label}
          id={label}
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur} // Handle blur event for textarea
          className={`${sharedInputClasses} py-[14px] leading-5`}
        ></textarea>
      </div>
      {error && errorMessage && (
        <div className="mt-1 text-[12px] leading-[15px] text-[#F97066]">
          {errorMessage}
        </div>
      )}
    </div>
  ) : type === "search" ? (
    <div className="w-full">
      {labelContent}
      <input
        type={type}
        name={label}
        id={label}
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={onBlur} // Handle blur event for input
        className={`${sharedInputClasses} h-[48px] bg-[#FFF] pe-[44px] py-[8px] placeholder:text-[#727A8B] placeholder:text-[18px] text-[#727A8B] md:h-[68px] md:pe-[52px]`}
      />
      {/* <Search
        className={
          "absolute pointer-events-none right-[16px] top-[16px] md:top-[23px] md:right-[18px] w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
        }
        color={"#999"}
      /> */}
    </div>
  ) : type === "service" ? (
    <div>
      {labelContent}
      <div className="relative flex flex-col">
        <select
          name={label}
          id={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`${sharedInputClasses} h-[53px] py-2 pr-10`}
        >
          <option value="" disabled hidden></option>
          {servicesData.map((item, idx) => (
            <option key={idx} value={item.label} className="text-[14px]">
              {item.label}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute right-[14px] top-1/2 transform -translate-y-1/2">
          {/* <ChevronDown size={18} /> */}
        </div>
      </div>
      {error && errorMessage && (
        <div className="mt-1 text-[12px] leading-[15px] text-[#F97066]">
          {errorMessage}
        </div>
      )}
    </div>
  ) : (
    <div className="flex flex-col">
      {labelContent}
      <input
        type={type}
        name={label}
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`${sharedInputClasses} h-[53px] py-2`}
      />
      {icon && (
        <div className="absolute right-[18px] top-[18px]">
          {error ? (
            // <HelpCircle size={16} color="#D92D20" />
            <></>
          ) : (
            <></>
            // <InformationCircle size={16} />
          )}
        </div>
      )}

      {error && errorMessage && (
        <div className="mt-1 text-[12px] leading-[15px] text-[#F97066]">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default StyledInput;
