import './ContadorResponsive.css';
import { useState } from 'react';
import {
  Flex,
  Button,
  Text,
  useBreakpointValue,
  ScaleFade,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MdAdd, MdRemove } from 'react-icons/md';

const ContadorResponsive = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1 >= 0 ? count - 1 : 0);
  };

  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  const MotionButton = motion(Button);

  return (
    <Flex
      direction={flexDirection}
      align="center"
      justify="center"
      w="100%"
      mt={8}
      flexWrap="wrap"
    >
      <MotionButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleDecrement}
        m={2}
        colorScheme="red"
        leftIcon={<MdRemove />}
        borderRadius="full"
        px={3}
        py={2}
        fontSize={{ base: '20px', md: '24px' }}
      >
        Resta
      </MotionButton>
      <ScaleFade initialScale={0.9} in={true}>
        <Text fontSize={{ base: '2xl', md: '4xl' }}>{count}</Text>
      </ScaleFade>
      <MotionButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleIncrement}
        m={2}
        colorScheme="green"
        leftIcon={<MdAdd />}
        borderRadius="full"
        px={3}
        py={2}
        fontSize={{ base: '20px', md: '24px' }}
      >
        Suma
      </MotionButton>
    </Flex>
  );
};

export default ContadorResponsive;
