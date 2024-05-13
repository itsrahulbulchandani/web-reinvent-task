// src/components/FormInput.tsx
import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;  
}

const FormInput: React.FC<FormInputProps> = ({ label, type, value, onChange, children }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input type={type} className="form-control" value={value} onChange={onChange} />
      {children}
    </div>
  );
};

export default FormInput;
