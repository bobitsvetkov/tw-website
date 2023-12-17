import { Box, Center, Text, SimpleGrid, Icon, Heading, useBreakpointValue} from "@chakra-ui/react";
import { FaTrophy } from 'react-icons/fa';
import { useEffect } from 'react';
import { seasons } from "./championsData";
const Champions: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const cardBg = "gray.700"; // Lighter shade of gray for the card
    const cardColor = "white"; // White text color
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
    return (
        <Box bg="gray.900" minHeight="100vh" p={6}>  {/* Darker shade of gray for the background */}
            <Center mb={6}>
                <Heading color={cardColor}>Historical Results</Heading>
            </Center>
            <SimpleGrid columns={columns} spacing={10}>
                {seasons.map((s, index) => (
                    <Box
                        key={index}
                        bg={cardBg}
                        color={cardColor}
                        p={6}
                        borderRadius="md"
                        boxShadow="2xl"
                        _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
                        transition="all 0.3s"
                    >
                        <Center mb={4}>
                            <Icon as={FaTrophy} w={10} h={10} color={cardColor} />
                        </Center>
                        <Text fontWeight="bold" fontSize="xl" mb={2} textAlign="center">{s.season}</Text>
                        <Text fontWeight="semibold">Winner: {s.winner}</Text>
                        <Text mt={2}>Runner-up: {s.runnerUp}</Text>
                        <Text mt={2}>Most Points in Group Stage: {s.mostPoints}</Text>
                        {s.thirdPlace && <Text mt={2}>Best Loser (Third Place): {s.thirdPlace}</Text>}
                        {s.topKD && <Text mt={2}>Best KD ratio: {s.topKD}</Text>}
                        {s.mostChevrons && <Text mt={2}>Most Chevrons per game: {s.mostChevrons}</Text>}
                        <a href={s.finalsLink} target="_blank" rel="noopener noreferrer">
                            <Text mt={2} color="blue.400" _hover={{ textDecoration: 'underline' }}>Watch the finals</Text>
                        </a>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Champions;