import { useFormikContext } from "formik";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const RevenueSlider = ({ name }) => {
  const { values, setFieldValue } = useFormikContext();
  const value = Number(values?.[name] ?? 0);
  const min = 0;
  const max = 100000;
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="mx-auto w-full max-w-[900px]">
      <div className="mb-4 flex justify-center">
        <output
          className="rounded-[6px] bg-primary-dark px-8 py-3 text-[24px] leading-8 text-white md:text-[30px]"
          htmlFor={name}
        >
          {currencyFormatter.format(value)}
        </output>
      </div>
      <input
        id={name}
        name={name}
        type="range"
        min={min}
        max={max}
        step="100"
        value={value}
        onChange={(event) => setFieldValue(name, Number(event.target.value))}
        className="h-3 w-full cursor-pointer appearance-none rounded-full bg-transparent accent-primary-dark"
        style={{
          background: `linear-gradient(to right, #0065ff 0%, #0065ff ${percent}%, #d9d9d9 ${percent}%, #d9d9d9 100%)`,
        }}
      />
    </div>
  );
};

export default RevenueSlider;
