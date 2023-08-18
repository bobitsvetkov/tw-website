import { Box, Center, Heading, Text, SimpleGrid, useColorModeValue } from "@chakra-ui/react";


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
    const cardBg = useColorModeValue("white", "gray.700");
    const cardColor = useColorModeValue("gray.800", "white");
    return (
        <Box bg="gray.100" minHeight="100vh" p={6}>
            <Center mb={6}>
                <Heading>Your Game Logo Here</Heading>
            </Center>
            <SimpleGrid columns={3} spacing={6}>
                {seasons.map((s, index) => (
                    <Box key={index} bg={cardBg} color={cardColor} p={4} borderRadius="md" boxShadow="lg">
                        <Text fontWeight="bold" fontSize="xl" mb={2}>{s.season}</Text>
                        <Text>Winner: {s.winner}</Text>
                        <Text mt={2}>Runner-up: {s.runnerUp}</Text>
                        <Text mt={2}>Most Points in Group Stage: {s.mostPoints}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Champions;