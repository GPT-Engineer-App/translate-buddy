import React from "react";
import { Select } from "@chakra-ui/react";

const CountryCodeSelect = ({ selectedCode, onCodeChange }) => {
  return (
    <Select onChange={onCodeChange} value={selectedCode} w="100px" placeholder="+1">
      <option value="+1">+1</option>
      <option value="+44">+44</option>
      <option value="+91">+91</option>
      <option value="+81">+81</option>
      <option value="+49">+49</option>
      <option value="+33">+33</option>
      <option value="+86">+86</option>
    </Select>
  );
};

export default CountryCodeSelect;
