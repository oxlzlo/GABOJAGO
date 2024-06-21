import { Box, Button, Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import emotionStyled from '@emotion/styled';
import React, { useState, useRef, useEffect } from 'react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import People from '../assets/people.svg?react';
import Datepicker from './Datepicker';

const SearchBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [peopleCount, setPeopleCount] = useState(2);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const incrementPeopleCount = () => {
    setPeopleCount((prevCount) => prevCount + 1);
  };

  const decrementPeopleCount = () => {
    setPeopleCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="searchBar"
      style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '0', left: '0' }}>
      <Flex justify="center" align="center">
        <Box width="90.3vw" height="6.5vh">
          <Flex justifyContent="space-between" align="center">
            <InputGroup width="29.9vw">
              <InputLeftElement
                width="3vw"
                height="6.5vh"
                paddingLeft=".5vw"
                children={<SearchIcon color="gray" w={9} h={9} />}
              />
              <Input
                height="6.5vh"
                padding="0 5.5rem"
                border=".1rem solid var(--color-main)"
                borderRadius=".8rem"
                backgroundColor="white"
                fontSize="2rem"
                placeholder="어디로 가실건가요?"
                _focusVisible={{ outline: 'none' }}
              />
            </InputGroup>

            <InputGroup
              width="27.8vw"
              height="6.5vh"
              border=".1rem solid var(--color-main)"
              borderRadius=".8rem"
              backgroundColor="white">
              <Flex align="center">
                <Datepicker style={{ borderRight: '.1rem solid var(--color-main)' }} />
                <Datepicker />
              </Flex>
            </InputGroup>

            <InputGroup width="18.1vw" position="relative" ref={dropdownRef}>
              <InputLeftElement width="3vw" height="6.5vh" paddingLeft=".5vw">
                <People />
              </InputLeftElement>
              <Input
                width="18.1vw"
                height="6.5vh"
                padding="0 3.5vw"
                border=".1rem solid var(--color-main)"
                borderRadius=".8rem"
                backgroundColor="white"
                fontSize="1.6rem"
                placeholder={`성인 ${peopleCount}명`}
                _focusVisible={{ outline: 'none' }}
              />
              <InputRightElement
                children={
                  <ChevronDownIcon
                    w={10}
                    h={10}
                    color="gray"
                    marginTop="3.5vh"
                    marginRight="1vw"
                    cursor="pointer"
                    onClick={toggleDropdown}
                  />
                }
              />
              {showDropdown && (
                <Box
                  position="absolute"
                  top="100%"
                  right="0"
                  width="80%"
                  border=".1rem solid var(--color-main)"
                  borderRadius=".8rem"
                  backgroundColor="white"
                  zIndex="10"
                  padding="1vh 1vw"
                  height="8vh">
                  <Flex height="100%" justify="space-between" align="center" fontSize="1.5rem">
                    <Button onClick={decrementPeopleCount} fontSize="2rem" fontWeight="200">
                      -
                    </Button>
                    <Box>성인 {peopleCount}명</Box>
                    <Button onClick={incrementPeopleCount} fontSize="2rem" fontWeight="200">
                      +
                    </Button>
                  </Flex>
                </Box>
              )}
            </InputGroup>

            <Button
              width="12.5vw"
              height="6.5vh"
              fontSize="3rem"
              borderRadius=".8rem"
              backgroundColor="main"
              color="white"
              _hover={{ bg: 'background', border: '.1rem solid var(--color-main)', color: 'main' }}>
              Search
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default SearchBar;

const InputBox = emotionStyled.input`
  height: 100%;
  border: .1rem solid var(--color-main);
  background-color: white;
`;
