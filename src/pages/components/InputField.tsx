import React from "react";

type Props = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

export default function InputField({
  label,
  onChange,
  placeholder,
  value,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="rounded-lg border px-2 py-2 outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
