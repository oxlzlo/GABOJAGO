import { Box, Button, Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import emotionStyled from '@emotion/styled';
import React from 'react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import People from '../assets/people.svg?react';
import Datepicker from './Datepicker';

const SearchBar = () => {
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

            <InputGroup width="18.1vw">
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
                placeholder="성인 2명"
                _focusVisible={{ outline: 'none' }}
              />
              <InputRightElement
                children={
                  <ChevronDownIcon w={10} h={10} color="gray" marginTop="3.5vh" marginRight="1vw" cursor="pointer" />
                }
              />
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
