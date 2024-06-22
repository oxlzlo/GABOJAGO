import React, { useState, forwardRef } from 'react';
import { InputGroup, InputLeftElement, Input, InputProps } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatepickerStyleProps, CustomInputProps } from '../lib/types/Datepicker';

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ value, onClick, style, ...props }, ref) => (
  <Input
    height="5vh"
    paddingLeft="3vw"
    border="none"
    borderRadius="0"
    fontSize="1.6rem"
    placeholder="연도. 월. 일"
    ref={ref}
    value={value}
    onClick={onClick}
    type="text"
    readOnly
    _focusVisible={{ outline: 'none' }}
    css={{
      '::-webkit-calendar-picker-indicator': {
        display: 'none',
      },
      '::-webkit-inner-spin-button': {
        display: 'none',
      },
      '::-webkit-clear-button': {
        display: 'none',
      },
      ...style,
    }}
  />
));

function Datepicker({ style }: DatepickerStyleProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const formattedDate = selectedDate
    ? `${selectedDate.getFullYear()}.${String(selectedDate.getMonth() + 1).padStart(2, '0')}.${String(
        selectedDate.getDate(),
      ).padStart(2, '0')}`
    : '';

  return (
    <InputGroup width="13.5vw">
      <InputLeftElement
        height="100%"
        paddingLeft="1.5vw"
        pointerEvents="auto"
        children={<CalendarIcon color="gray" w={8} h={8} />}
        onClick={() => {
          const datepicker = document.getElementById('customDatepicker');
          if (datepicker) {
            datepicker.focus();
          }
        }}
      />
      <DatePicker
        id="customDatepicker"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy.MM.dd"
        customInput={<CustomInput value={formattedDate} onClick={() => {}} style={style} />}
      />
    </InputGroup>
  );
}

export default Datepicker;
