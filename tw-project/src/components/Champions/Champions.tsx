import { Box, Center, Text, SimpleGrid, useColorModeValue, Icon, Image } from "@chakra-ui/react";
import { FaTrophy } from 'react-icons/fa';
import logoImage from '../assets/logoImage.png'

function Champions() {
    const seasons = [
        {
            season: "Season 1",
            winner: "Rising Kings (FightMe and jjj)",
            runnerUp: "Random X (Hermes and Bloody, Sub: Zero Chilling)",
            mostPoints: "Rising Kings (Fight Me and jjj: 3.3 PPG)"
        },
        {
            season: "Season 2",
            winner: "Rising Kings (FightMe and jjj, Sub: Pepjin)",
            runnerUp: "PedroPlebDestroyers (Everos and Ross Worthy, Sub: Pedro)",
            mostPoints: "Random X (Hermes and Bloody, Sub: Zero Chilling: 2.2 PPG)"
        },
        {
            season: "Season 3",
            winner: "Grass Touchers (WhosMrBubbles and xAizenTTV, Sub: Saturate)",
            runnerUp: "Parthia's Finest (Kirky and Donald, Sub: BigBees)",
            mostPoints: "SweetTeaLovers (Moist Blueberry and msheat, Sub: captain: 2.0 PPG)"
        },
        {
            season: "Season 4",
            winner: "Grass Touchers (WhosMrBubbles and xAizenTTV, Sub: Saturate)",
            runnerUp: "Parthia's Finest (Kirky and Donald, Sub: BigBees)",
            mostPoints: "SweetTeaLovers (Moist Blueberry and msheat, Sub: captain: 2.0 PPG)"
        },
        {
            season: "Season 5",
            winner: "Gorilla Warfare (Hyena and Dare, Sub: jjj)",
            runnerUp: "Bubble Bees (BigBees and WhosMrBubbles, Sub: Saturate)",
            mostPoints: "Tie (Donald's Legion and Bubble Bees: 3.4 PPG)"
        },
        {
            season: "Season 6",
            winner: "Rising Kings (FightMe and JackJack, Sub: Rooibos)",
            runnerUp: "Camel Riders (MarketableSkills and Costanza, Sub: Androo02)",
            mostPoints: "Perkele (Mia and Hagehi, Sub: AgentPanda: 3.8 PPG)"
        },
        {
            season: "Season 7",
            winner: "Rice Enjoyers (Nice-Rice and titledsum, Sub: Anthony Duran)",
            runnerUp: "Gorilla Tactics (Hyena and Bubinni, Sub: jjj)",
            mostPoints: "Comrades in Arms (Chairman Mao and boopathi: 4.2 PPG)"
        },
        // {
        //     season: "Season 8",
        //     winner: "Grass Touchers (WhosMrBubbles and xAizenTTV, Sub: Saturate)",
        //     runnerUp: "Parthia's Finest (Kirky and Donald, Sub: BigBees)",
        //     mostPoints: "SweetTeaLovers (Moist Blueberry and msheat, Sub: captain: 2.0 PPG)"
        // },
    ];
    const cardBg = useColorModeValue("linear(to-br, teal.500, green.300)", "gray.700");
    const cardColor = useColorModeValue("white", "white");
    return (
        <Box bg="gray.100" minHeight="100vh" p={6}>
            <Center mb={6}>
                <Box w="107.7%" h="300px" overflow="hidden">
                    <Image src={logoImage} alt="Rome 2 Total War Logo" w="100%" h="100%" objectFit="cover" />
                </Box>
            </Center>
            <SimpleGrid columns={3} spacing={10}>
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
                            <Icon as={FaTrophy} w={10} h={10} />
                        </Center>
                        <Text fontWeight="bold" fontSize="xl" mb={2} textAlign="center">{s.season}</Text>
                        <Text fontWeight="semibold">Winner: {s.winner}</Text>
                        <Text mt={2}>Runner-up: {s.runnerUp}</Text>
                        <Text mt={2}>Most Points in Group Stage: {s.mostPoints}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Champions;