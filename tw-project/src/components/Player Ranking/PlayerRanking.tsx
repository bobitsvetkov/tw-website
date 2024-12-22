import React, { useEffect, useState } from "react";
import {
    Box,
    Heading,
    Text,
    HStack,
    Avatar,
    Center,
    Flex,
    Spinner,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ref, get } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

interface Player {
    Player: string;
    "K_D_ratio": number;
    "Chevrons_game": number;
    "Total_Chevrons": number;
    "Total_Kills": number;
    "Total_Losses": string;
    "Kills per Game": string;
    "Losses per Game": string;
    "Games_Played": number;
    "Games_Won": number;
    "Games_Lost": number;
    "Win_Percent": number;
    "DC's/Forfeits": number;
    "Seasons Played": number;
    "Playoff Appearances": number;
    "Playoff_Rate": string;
    "Third_Places": number;
    "Runner-ups": number;
    "Championships": number;
    "Top_3_Best_KD_Ratios": number;
    "Top_3_Most_Chevrons_Game": number;
    Rating: number;
    Rank: number;
}

const PlayerRankingList: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 20;

    const cardWidth = useBreakpointValue({
        base: "100%",
        sm: "280px",
        md: "300px",
        lg: "320px",
    });

    const calculatePlayerRating = (player: Player): number => {
        const gamesPlayed = player["Games_Played"] || 0;
        const winPercentage = Number(player["Win_Percent"] || "0") * 100;
        const playoffRate = (parseFloat(player["Playoff_Rate"]) || 0) * 100;
        const thirdPlace = player["Third_Places"] || 0;
        const secondPlace = player["Runner-ups"] || 0;
        const championships = player["Championships"] || 0;

        let rating =
            winPercentage * 5 +
            thirdPlace * 50 +
            secondPlace * 70 +
            championships * 150 +
            playoffRate * 3

        if (gamesPlayed < 21) {
            rating *= 0.01;
        }

        return Math.round(rating * 100) / 100;
    };

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const playersRef = ref(database, "player_stats");
                const snapshot = await get(playersRef);
                if (snapshot.exists()) {
                    const playersData = snapshot.val();
                    const sortedPlayers = Object.values(playersData as { [key: string]: Player })
                        .map((player) => ({
                            ...player,
                            Rating: calculatePlayerRating(player),
                        }))
                        .sort((a, b) => b.Rating - a.Rating)
                        .map((player, index) => ({
                            ...player,
                            Rank: index + 1,
                        }));
                    setPlayers(sortedPlayers);
                    setFilteredPlayers(sortedPlayers);
                }
            } catch (error) {
                console.error("Error fetching player data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredPlayers(
            players.filter((player) =>
                player.Player.toLowerCase().includes(query)
            )
        );
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPlayers = filteredPlayers.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredPlayers.length / itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    if (loading) {
        return (
            <Center height="100vh">
                <Spinner size="xl" thickness="4px" speed="0.65s" color="blue.500" emptyColor="gray.200" />
            </Center>
        );
    }

    return (
        <Box p={6} bg="gray.900" minHeight="100vh" color="white">
            <Center mb={4} w="full" px={4}>
                <Heading
                    size="2xl"
                    bgGradient="linear(to-r, blue.400, purple.500)"
                    bgClip="text"
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    lineHeight="base"
                >
                    Player Rankings
                </Heading>
            </Center>

            <Center mb={7}>
                <InputGroup maxWidth="400px">
                    <Input
                        placeholder="Search for a player"
                        value={searchQuery}
                        onChange={handleSearch}
                        bg="gray.800"
                        color="white"
                        border="1px"
                        borderColor="gray.600"
                    />
                    <InputRightElement>
                        <IconButton
                            aria-label="Search"
                            icon={<SearchIcon />}
                            onClick={() => { }}
                            bg="transparent"
                            _hover={{ bg: "gray.700" }}
                        />
                    </InputRightElement>
                </InputGroup>
            </Center>

            <Flex wrap="wrap" gap={6} justify="center" align="flex-start" mb={8}>
                {currentPlayers.map((player) => (
                    <Box
                        key={player.Player}
                        bg="gray.800"
                        p={6}
                        borderRadius="xl"
                        boxShadow="dark-lg"
                        width={cardWidth}
                        border="1px"
                        borderColor="gray.700"
                        _hover={{
                            bg: "gray.700",
                            transform: "translateY(-10px)",
                            transition: "all 0.3s ease",
                            boxShadow: "2xl",
                        }}
                        transition="all 0.3s ease"
                    >
                        <HStack spacing={4} mb={4}>
                            <Avatar
                                name={player.Player}
                                src={`/avatars/${player.Player}.png`}
                                size="xl"
                                border="2px"
                                borderColor="blue.500"
                            />
                            <Box>
                                <Text fontWeight="bold" fontSize="xl" bgGradient="linear(to-r, blue.300, purple.400)" bgClip="text">
                                    {player.Player}
                                </Text>
                                <Text fontSize="lg" color="gray.400">
                                    Rating: {player.Rating}
                                </Text>
                                <Text fontSize="lg" color="gray.400">
                                    Win %: {(Math.round(Number(player["Win_Percent"] || "0") * 100 * 100) / 100).toFixed(2)}
                                </Text>
                                <Text fontSize="sm" color="gray.500">
                                    K/D Ratio: {player["K_D_ratio"]}
                                </Text>
                            </Box>
                        </HStack>
                        <Text mt={2} textAlign="center" fontWeight="bold" color="green.400">
                            Rank #{player.Rank}
                        </Text>
                    </Box>
                ))}
            </Flex>

            <Center mt={8}>
                <HStack spacing={4}>
                    <Button onClick={goToPrevPage} isDisabled={currentPage === 1}>
                        Previous
                    </Button>
                    <Text color="white">{`Page ${currentPage} of ${totalPages}`}</Text>
                    <Button onClick={goToNextPage} isDisabled={currentPage === totalPages}>
                        Next
                    </Button>
                </HStack>
            </Center>
        </Box>
    );
};

export default PlayerRankingList;
