import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const ChakraUiTest = () => {
  return (
    <>
      <Box bg={'yellow'} p={4}>
        <h1>Hello, World!</h1>
      </Box>
      <Box>
        <Text color="var(--color-red)">test text</Text>
      </Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </>
  );
};

export default ChakraUiTest;
