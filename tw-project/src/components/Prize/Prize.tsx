import { Box, Heading, Text, Flex, Grid, VStack } from "@chakra-ui/react";
import { FaTrophy, FaCoins } from "react-icons/fa";
import { useEffect } from 'react';

const Prizes: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Flex direction="column" alignItems="center" p={8} minHeight="100vh" width="100vw" bg="gray.800">
            {/* Hero Section */}
            <Box textAlign="center" mb={12}>
                <Heading color="gold" size="4xl" fontWeight="bold" textTransform="uppercase">
                    TOTAL WAR LEAGUE: SIEGE SEASONAL AWARDS
                </Heading>
                <Text color="gray.300" fontSize="xl" mt={4} fontStyle="italic">
                    Battle for glory and riches in TWLS!
                </Text>
            </Box>

            {/* Prize Pool Section */}
            <Box bg="gray.700" p={8} mb={8} borderRadius="lg" boxShadow="xl" width="100%" position="relative">
                <Heading size="lg" color="green.400" mb={6}>
                    💰 Prize Pool
                </Heading>
                <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={6}>
                    <Box textAlign="center" p={6} bg="gray.600" borderRadius="md" boxShadow="lg" _hover={{ bg: "green.600", transform: "scale(1.05)" }} transition="all 0.3s ease-in-out">
                        <FaCoins size={50} color="green.400" />
                        <Text color="white" fontSize="xl" mt={4} fontWeight="bold">1st Place: $500</Text>
                        <Text color="gray.300" mt={2}>Claim your victory and become the ultimate champion!</Text>
                    </Box>
                    <Box textAlign="center" p={6} bg="gray.600" borderRadius="md" boxShadow="lg" _hover={{ bg: "yellow.500", transform: "scale(1.05)" }} transition="all 0.3s ease-in-out">
                        <FaCoins size={50} color="yellow.400" />
                        <Text color="white" fontSize="xl" mt={4} fontWeight="bold">2nd Place: $200</Text>
                        <Text color="gray.300" mt={2}>For those who fought valiantly, but couldn't claim the throne.</Text>
                    </Box>
                    <Box textAlign="center" p={6} bg="gray.600" borderRadius="md" boxShadow="lg" _hover={{ bg: "red.600", transform: "scale(1.05)" }} transition="all 0.3s ease-in-out">
                        <FaCoins size={50} color="red.400" />
                        <Text color="white" fontSize="xl" mt={4} fontWeight="bold">3rd Place: $100</Text>
                        <Text color="gray.300" mt={2}>For the brave souls who fell just short of glory.</Text>
                    </Box>
                </Grid>
            </Box>

            {/* Special Roles Section */}
            <Box bg="gray.700" p={8} mb={8} borderRadius="lg" boxShadow="xl" width="100%">
                <Heading size="lg" color="blue.400" mb={6}>
                    🏆 Special Discord and Stream Roles
                </Heading>
                <VStack align="start" spacing={4}>
                    {[
                        { role: "Lord of the Meme Lords", description: "Awarded to the greatest TWL meme creator.", icon: <FaTrophy size={30} color="purple.400" /> },
                        { role: "Meme Lord", description: "Awarded to the top 2 meme creators.", icon: <FaTrophy size={30} color="purple.500" /> },
                        { role: "Highest K/D Simp", description: "Fighter with the best K/D across the Group Stage.", icon: <FaTrophy size={30} color="purple.600" /> },
                        { role: "Champion of the Losers", description: "3rd place finisher.", icon: <FaTrophy size={30} color="purple.700" /> },
                    ].map((role, index) => (
                        <Box key={index} bg="gray.600" p={6} borderRadius="md" width="100%" boxShadow="md">
                            <Flex align="center">
                                {role.icon}
                                <Text color="white" fontSize="lg" ml={4} fontWeight="bold">{role.role}</Text>
                            </Flex>
                            <Text color="gray.300" mt={2}>{role.description}</Text>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </Flex>
    );
};

export default Prizes;
