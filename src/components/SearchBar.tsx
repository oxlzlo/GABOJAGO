import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Text, position } from '@chakra-ui/react';
import emotionStyled from '@emotion/styled';
import React from 'react';
import SearchIcon from '@/assets/search.svg?react';

const SearchBar = () => {
  return (
    <div
      className="searchBar"
      style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '0', left: '0' }}>
      <Flex justify="center" align="center">
        <Box width="130rem" height="6.7rem">
          <Flex justifyContent="space-between" align="center">
            <InputGroup width="43rem">
              <InputLeftElement width="3.6rem" height="3.6rem">
                <SearchIcon />
              </InputLeftElement>
              <Input
                height="6.7rem"
                padding="0 5rem"
                border=".1rem solid var(--color-main)"
                borderRadius=".8rem"
                backgroundColor="white"
                fontSize="2rem"
                placeholder="어디로 가실건가요?"
                _focusVisible={{ outline: 'none' }}
              />
            </InputGroup>

            <InputGroup
              width="40rem"
              height="6.7rem"
              border=".1rem solid var(--color-main)"
              borderRadius=".8rem"
              backgroundColor="white">
              <Flex align="center">
                <Input
                  width="20rem"
                  height="5rem"
                  fontSize="1.6rem"
                  border="none"
                  borderRadius="0"
                  borderRight=".1rem solid var(--color-main)"
                  type="date"
                  _focusVisible={{ outline: 'none' }}
                />
                <Input
                  width="20rem"
                  height="5rem"
                  fontSize="1.6rem"
                  border="none"
                  type="date"
                  _focusVisible={{ outline: 'none' }}
                />
              </Flex>
            </InputGroup>

            {/* <Input
              width="20rem"
              height="6.7rem"
              fontSize="1.6rem"
              border=".1rem solid var(--color-main)"
              borderRight="none"
              borderRadius=".8rem 0 0 .8rem"
              backgroundColor="white"
              type="date"
              _focusVisible={{ outline: 'none' }}
            />
            <Text
              height="6.7rem"
              fontSize="4em"
              fontWeight="30"
              backgroundColor="white"
              borderTop=".1rem solid var(--color-main)"
              borderBottom=".1rem solid var(--color-main)"
              color="main">
              |
            </Text>
            <Input
              width="20rem"
              height="6.7rem"
              fontSize="1.6rem"
              border=".1rem solid var(--color-main)"
              borderLeft="none"
              borderRadius="0 .8rem .8rem 0"
              type="date"
              _focusVisible={{ outline: 'none' }}
              backgroundColor="white"
            /> */}

            <Input
              width="26rem"
              height="6.7rem"
              padding="0 5rem"
              border=".1rem solid var(--color-main)"
              borderRadius=".8rem"
              backgroundColor="white"
              fontSize="1.6rem"
              placeholder="성인 2명"
              _focusVisible={{ outline: 'none' }}
            />
            <Button
              width="18rem"
              height="6.7rem"
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
