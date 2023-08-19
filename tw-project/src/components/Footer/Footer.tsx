import { Box, Center, Text, Icon, Flex} from "@chakra-ui/react";
import { FaCrown, FaRegCopy } from "react-icons/fa";  // Adding a copyright icon
import { useState, useEffect } from 'react';

function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <Box
            bg="gray.900"
            color="white"
            mt={6}
            p={4}
            borderTop="3px solid"
            borderColor="blue.500"
            transition="background-color 0.3s"
            _hover={{ bg: "gray.800" }}
        >
            <Center>
                <Flex align="center" justify="center" direction="column">
                    <Flex align="center" mb={2}>
                        <Icon as={FaCrown} w={6} h={6} mr={2} />
                        <Text fontSize="lg">Special thanks to our GLORIOUS Emperor!</Text>
                    </Flex>

                    <Flex align="center" mt={2}>
                        <Icon as={FaRegCopy} w={4} h={4} mr={2} />  {/* Copyright icon */}
                        <Text>{currentYear} MarketableSkills. All Rights Reserved.</Text>
                    </Flex>
                </Flex>
            </Center>
        </Box>
    );
}

export default Footer;