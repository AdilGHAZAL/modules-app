import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

interface FormFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, value, onChange, placeholder, required = false }) => {
  return (
    <div className="flex flex-col mb-4">
      <Label htmlFor={label.toLowerCase()} text={label} />
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormField;
