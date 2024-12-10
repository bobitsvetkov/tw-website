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

interface Team {
  "Team Name": string;
  "Elo Rating": number;
  "Logo": string;
  Rank: number;
}

const EloRatingList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
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

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamsRef = ref(database, "elo_rating/teams");
        const snapshot = await get(teamsRef);
        if (snapshot.exists()) {
          const teamsData = snapshot.val();
          const sortedTeams = Object.values(teamsData as { [key: string]: Team })
            .sort((a, b) => b["Elo Rating"] - a["Elo Rating"])
            .map((team, index) => ({
              ...team,
              Rank: index + 1,
            }));
          setTeams(sortedTeams);
          setFilteredTeams(sortedTeams);
        }
      } catch (error) {
        console.error("Error fetching Elo ratings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredTeams(
      teams.filter((team) =>
        team["Team Name"].toLowerCase().includes(query)
      )
    );
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeams = filteredTeams.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredTeams.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner
          size="xl"
          thickness="4px"
          speed="0.65s"
          color="blue.500"
          emptyColor="gray.200"
        />
      </Center>
    );
  }

  return (
    <Box p={6} bg="gray.900" minHeight="100vh" color="white">
      <Center mb={8}>
        <Heading
          size="2xl"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          Top Team Elo Rankings
        </Heading>
      </Center>

      {/* Search bar */}
      <Center mb={6}>
        <InputGroup maxWidth="400px">
          <Input
            placeholder="Search for a team..."
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
              bg="transparent"
              _hover={{ bg: "gray.700" }}
            />
          </InputRightElement>
        </InputGroup>
      </Center>

      {/* Teams Grid */}
      <Flex wrap="wrap" gap={6} justify="center" align="flex-start" mb={8}>
        {currentTeams.map((team) => (
          <Box
            key={team["Team Name"]}
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
                name={team["Team Name"]}
                src={team["Logo"]}
                size="xl"
                border="2px"
                borderColor="blue.500"
              />
              <Box>
                <Text
                  fontWeight="bold"
                  fontSize="xl"
                  bgGradient="linear(to-r, blue.300, purple.400)"
                  bgClip="text"
                >
                  {team["Team Name"]}
                </Text>
                <Text fontSize="lg" color="gray.400">
                  Elo Rating: {team["Elo Rating"].toFixed(2)}
                </Text>
              </Box>
            </HStack>
            <Text mt={2} textAlign="center" fontWeight="bold" color="green.400">
              Rank #{team.Rank}
            </Text>
          </Box>
        ))}
      </Flex>

      {/* Pagination controls */}
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

export default EloRatingList;
