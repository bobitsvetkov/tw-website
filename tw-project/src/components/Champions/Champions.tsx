import { Box, Center, Text, SimpleGrid, Icon, Heading, useBreakpointValue} from "@chakra-ui/react";
import { FaTrophy } from 'react-icons/fa';
import { useEffect } from 'react';
const Champions: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const seasons = [
        {
            season: "Season 1",
            winner: "Rising Kings (FightMe and jjj)",
            runnerUp: "Random X (Hermes and Bloody, Sub: Zero Chilling)",
            mostPoints: "Rising Kings (Fight Me and jjj: 3.3 PPG)",
            finalsLink: "https://www.youtube.com/watch?v=dfYzAPUO9IE"
        },
        {
            season: "Season 2",
            winner: "Rising Kings (FightMe and jjj, Sub: Pepjin)",
            runnerUp: "PedroPlebDestroyers (Everos and Ross Worthy, Sub: Pedro)",
            mostPoints: "Random X (Hermes and Bloody, Sub: Zero Chilling: 2.2 PPG)",
            finalsLink: "https://www.youtube.com/watch?v=uSVtZxNMprA" //placeholder link
        },
        {
            season: "Season 3",
            winner: "Grass Touchers (WhosMrBubbles and xAizenTTV, Sub: Saturate)",
            runnerUp: "Parthia's Finest (Kirky and Donald, Sub: BigBees)",
            mostPoints: "SweetTeaLovers (Moist Blueberry and msheat, Sub: captain: 2.0 PPG)",
            finalsLink: "https://www.youtube.com/watch?v=dyQL2Wgmdys"
        },
        {
            season: "Season 4",
            winner: "Parthia's Finest (Kirky and jbarbs, Sub: Donald)",
            runnerUp: "Gorilla Warfare(Hyena and Dare, Sub: Boles)",
            mostPoints: "Gorilla Warfare (Hyena and Dare, Sub: Boles: 3.8 PPG)",
            thirdPlace: "Champions of Roma (MO and Lemerex)",
            topKD:"1. jbarbs (1.46) 2. Hyena (1.36) 3. Kirky (1.22)",
            mostChevrons: "1. Hyena (10.9) 2. jbarbs (10.7) 3. Kirky (9.9)",
            finalsLink: "https://www.youtube.com/watch?v=3788R1n4Xng"
        },
        {
            season: "Season 5",
            winner: "Gorilla Warfare (Hyena and Dare, Sub: jjj)",
            runnerUp: "Bubble Bees (BigBees and WhosMrBubbles, Sub: Saturate)",
            mostPoints: "Tie (Donald's Legion and Bubble Bees: 3.4 PPG)",
            thirdPlace: "Donald's Legion (Donald and The Centurion, Sub: Everos)",
            topKD: "1. BigBees (1.33) 2. Donald (1.26) 3. MO (1.25)",
            mostChevrons: "1. MO and Nungle (10.0) 2. FightMe and Donald (9.92) 3. BigBees (9.73)",
            finalsLink: "https://www.youtube.com/watch?v=uSVtZxNMprA" //placeholder link
        },
        {
            season: "Season 6",
            winner: "Rising Kings (FightMe and JackJack, Sub: Rooibos)",
            runnerUp: "Camel Riders (MarketableSkills and Costanza, Sub: Androo02)",
            mostPoints: "Perkele (Mia and Hagehi, Sub: AgentPanda: 3.8 PPG)",
            thirdPlace: "Perkele (Mia and Hagehi, Sub: AgentPanda)",
            topKD: "1. Bubinni (1.28) 2. Mia (1.27) 3. Donald (1.18)",
            mostChevrons: "1. Hoax(9.88) 2. Nungle(9.45) 3. rifou(9.29)",
            finalsLink: "https://www.youtube.com/watch?v=IcCu8cWUZz8"
        },
        {
            season: "Season 7",
            winner: "Rice Enjoyers (Nice-Rice and titledsum, Sub: Anthony Duran)",
            runnerUp: "Gorilla Tactics (Hyena and Bubinni, Sub: jjj)",
            mostPoints: "Comrades in Arms (Chairman Mao and boopathi: 4.2 PPG)",
            thirdPlace: "Peppa Pig Fan Club (Pedro and Nungle)",
            topKD: "1. Bubinni (1.36) 2. Hyena (1.21) 3. jbarbs (1.20)",
            mostChevrons: "1. rifou (10.67) 2. Bubinni (10.55) 3. Rogal Dorn (10.00)",
            finalsLink: "https://www.youtube.com/watch?v=VaFPdz1XObQ"
        },
        // {
        //     season: "Season 8",
        //     winner: "Grass Touchers (WhosMrBubbles and xAizenTTV, Sub: Saturate)",
        //     runnerUp: "Parthia's Finest (Kirky and Donald, Sub: BigBees)",
        //     mostPoints: "SweetTeaLovers (Moist Blueberry and msheat, Sub: captain: 2.0 PPG)"
        // },
    ];
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