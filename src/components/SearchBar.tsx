import { Box, Button, Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { SearchIcon, ChevronDownIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';
import People from '../assets/people.svg?react';
import Datepicker from './Datepicker';
import { DropdownRef, DateState, SearchBarProps } from '@/lib/types/searchBar';
import axios from 'axios';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef: DropdownRef = useRef<HTMLDivElement>(null);

  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState<DateState>(null);
  const [endDate, setEndDate] = useState<DateState>(null);
  const [guest, setGuest] = useState(2);

  const targetRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const incrementGuestCount = () => {
    setGuest((prevCount) => (prevCount < 30 ? prevCount + 1 : prevCount));
  };

  const decrementGuestCount = () => {
    setGuest((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleClickSearchBtn = async () => {
    const formattedDate = (date: DateState) => {
      if (!date) return null;
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const start = formattedDate(startDate);
    const end = formattedDate(endDate);

    const query = {
      keyword,
      start,
      end,
      guest,
    };

    const filteredQuery = Object.fromEntries(
      Object.entries(query).filter(([_, value]) => value != null && value !== ''),
    );

    try {
      const response = await axios.get(
        'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com/open-api/accommodation',
        { params: filteredQuery },
      );
      console.log(response);
      onSearch(response.data.data.content);
    } catch (error) {
      console.error('검색 필터링 오류', error);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleScroll = () => {
    if (targetRef.current) {
      if (window.scrollY >= 300) {
        targetRef.current.style.display = 'flex';
        targetRef.current.style.justifyContent = 'center';
        targetRef.current.style.alignItems = 'center';
        targetRef.current.style.position = 'fixed';
        targetRef.current.style.top = '4.4vh';
        targetRef.current.style.height = '9vh';
        targetRef.current.style.backgroundColor = 'var(--color-banner)';
        targetRef.current.style.zIndex = '100';
      } else {
        targetRef.current.style.position = 'absolute';
        targetRef.current.style.top = '50%';
        targetRef.current.style.transform = 'translateY(-50%)';
        targetRef.current.style.backgroundColor = 'initial';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      ref={targetRef}
      className="searchBar"
      style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '0', left: '0' }}>
      <Flex justify="center" align="center">
        <Box position="absolute" width="90.3vw" height="6.5vh">
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
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
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
                <Datepicker
                  value={startDate ? startDate.toISOString().split('T')[0] : ''}
                  onChange={(date) => setStartDate(date)}
                  style={{ paddingRight: '3vw', borderRight: '.1rem solid var(--color-main)' }}
                />
                <Datepicker
                  value={endDate ? endDate.toISOString().split('T')[0] : ''}
                  onChange={(date) => setEndDate(date)}
                />
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
                placeholder={`인원 ${guest}명`}
                _focusVisible={{ outline: 'none' }}
                value={`인원 ${guest}명`}
                readOnly
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
                    <Button onClick={decrementGuestCount} fontSize="2rem" fontWeight="200">
                      <MinusIcon w={6} h={6} color="gray" />
                    </Button>
                    <Box>인원 {guest}명</Box>
                    <Button onClick={incrementGuestCount} fontSize="2rem" fontWeight="200">
                      <AddIcon w={6} h={6} color="gray" />
                    </Button>
                  </Flex>
                </Box>
              )}
            </InputGroup>

            <Button
              width="12.5vw"
              height="6.5vh"
              borderRadius=".8rem"
              backgroundColor="main"
              fontSize="3rem"
              color="white"
              _hover={{ bg: 'background', border: '.1rem solid var(--color-main)', color: 'main' }}
              onClick={handleClickSearchBtn}>
              Search
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default SearchBar;
