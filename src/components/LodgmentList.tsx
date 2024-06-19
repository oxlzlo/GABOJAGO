// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Grid,
//   Image,
//   Stack,
//   Heading,
//   Text,
//   Divider,
//   ButtonGroup,
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
// } from '@chakra-ui/react';
// import { Lodgement } from '@/lib/types/lodgement';
// import { getLodgment } from '@/api/fetchLodgment';

// const LodgmentList = () => {
//   const [lodgments, setLodgments] = useState<Lodgement[]>([]);

//   useEffect(() => {
//     const fetchLodgments = async () => {
//       const data = await getLodgment();
//       setLodgments(data);
//     };
//     fetchLodgments();
//   }, []);

//   return (
//     <Grid templateColumns="repeat(4, 1fr)" gap="1.5rem">
//       {lodgments.map((lodgment, index) => (
//         <div
//           style={{
//             border: '1px solid #e2e8f0',
//           }}>
//           <Card
//             key={lodgment.id}
//             width="100%"
//             height="50%"
//             borderRadius=".5rem"
//             transition="all 0.4s"
//             _hover={{ transform: 'scale(1.05)' }}>
//             <Image src={lodgment.image} alt={lodgment.name} borderRadius=".5rem" width="100%" height="100%" />
//             <CardBody>
//               <Stack mt="6" spacing="3">
//                 <Heading size="md">{lodgment.name}</Heading>
//                 <Text>{lodgment.comment}</Text>
//                 <Text color="blue.600" fontSize="2xl">
//                   <p>{lodgment.address}</p>
//                 </Text>
//               </Stack>
//             </CardBody>
//           </Card>
//         </div>
//       ))}
//     </Grid>
//   );
// };

// export default LodgmentList;

import { getLodgment } from '@/api/fetchLodgment';
import { Lodgement } from '@/lib/types/lodgement';
import { Box, Container, Grid, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const LodgmentList = () => {
  const [lodgments, setLodgments] = useState<Lodgement[]>([]);

  useEffect(() => {
    const fetchLodgments = async () => {
      const data = await getLodgment();
      setLodgments(data);
    };
    fetchLodgments();
  }, []);

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="1.5rem">
        {lodgments.map((lodgment) => (
          <Box
            key={lodgment.id}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="auto"
            height="auto"
            border="1px solid #e2e8f0"
            borderRadius="1rem"
            gap="1.5rem"
            _hover={{
              cursor: 'pointer',
              boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }}>
            <Image src={lodgment.image} alt={lodgment.name} width="100%" height="20rem" borderRadius="1rem 1rem 0 0" />
            <Box paddingLeft="1rem" display="flex" flexDirection="column" gap=".5rem">
              <Text fontSize="2rem" fontWeight="600">
                {lodgment.name}
              </Text>
              <Text fontSize="1.5rem">{lodgment.address}</Text>
              <Text fontSize="1.5rem">{lodgment.telephone}</Text>
              <Text fontSize="1.8rem">{lodgment.comment}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default LodgmentList;
