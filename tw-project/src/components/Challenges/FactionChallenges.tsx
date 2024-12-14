import {
    Icon,
    Box,
    Text,
    Image,
    Heading,
    useBreakpointValue,
    Flex,
    Center,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import factionChallenges from "../../data/factionsData";
import { FactionChallenges } from "../../common/types";
import { FaTrophy, FaBacteria, FaBook  } from "react-icons/fa";

const FactionChallengesPage: React.FC = () => {
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 10 }) ?? 1;

    // Create rows for faction icons
    const rows = [];
    for (let i = 0; i < factionChallenges.length; i += columns) {
        const row = factionChallenges.slice(i, i + columns);
        rows.push(row);
    }

    const [selectedChallenge, setSelectedChallenge] =
        useState<FactionChallenges | null>(null);

    const openChallenge = (challenge: FactionChallenges) => {
        setSelectedChallenge(challenge);
    };

    const closeChallenge = () => {
        setSelectedChallenge(null);
    };

    return (
        <Box bg="gray.900" minHeight="100vh" p={6}>
            <Center mb={6}>
                <Heading color="white">Faction Challenges</Heading>
            </Center>
            {rows.map((row, rowIndex) => (
                <Flex key={rowIndex} justify="center" alignItems="center">
                    {row.map((challenge) => (
                        <Box
                            key={challenge.id}
                            p={4}
                            bg="gray.700"
                            rounded="lg"
                            m={2}
                            onClick={() => openChallenge(challenge)}
                        >
                            <Center>
                                <Image
                                    src={challenge.factionIcon}
                                    alt={challenge.title}
                                    maxW="100px"
                                    maxH="100px"
                                />
                            </Center>
                        </Box>
                    ))}
                </Flex>
            ))}
            {selectedChallenge && (
                <Modal isOpen={true} onClose={closeChallenge} size="lg" motionPreset="slideInBottom">
                    <ModalOverlay />
                    <ModalContent bg="gray.900" color="white" borderRadius="lg" boxShadow="2xl">
                        <ModalHeader textAlign="center" fontSize="2xl" fontWeight="extrabold">
                            {selectedChallenge.title}
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p={6} maxH="80vh" overflowY="auto">
                            {/* Image Section */}
                            <Center mb={6}>
                                <Image
                                    src={selectedChallenge.image}
                                    alt={selectedChallenge.title}
                                    maxW="120px"
                                    borderRadius="md"
                                    boxShadow="lg"
                                    transition="all 0.3s ease-in-out"
                                    _hover={{ transform: "scale(1.05)" }}
                                />
                            </Center>
                            {/* Winner Section */}
                            <Box mb={4} p={4} bg="gray.800" borderRadius="md" boxShadow="sm">
                                <Flex align="center">
                                    <Icon as={FaTrophy} boxSize={6} color="yellow.400" mr={3} />
                                    <Text fontSize="lg" fontWeight="bold" color="yellow.400">
                                        Winner
                                    </Text>
                                </Flex>
                                <Text mt={2}>{selectedChallenge.winner}</Text>
                            </Box>
                            <Divider my={4} borderColor="gray.600" />
                            {/* Statistics Section */}
                            <Box mb={4} p={4} bg="gray.800" borderRadius="md" boxShadow="sm">
                                <Flex align="center">
                                    <Icon as={FaBacteria} boxSize={6} color="blue.400" mr={3} />
                                    <Text fontSize="lg" fontWeight="bold" color="blue.400">
                                        Statistics
                                    </Text>
                                </Flex>
                                <Text mt={2}>Kills: {selectedChallenge.kills}</Text>
                                <Text>Chevrons: {selectedChallenge.chevrons}</Text>
                            </Box>
                            <Divider my={4} borderColor="gray.600" />
                            {/* Description Section */}
                            <Box mb={4} p={4} bg="gray.800" borderRadius="md" boxShadow="sm">
                                <Flex align="center">
                                    <Icon as={FaBook} boxSize={6} color="purple.400" mr={3} />
                                    <Text fontSize="lg" fontWeight="bold" color="purple.400">
                                        Description
                                    </Text>
                                </Flex>
                                <Text mt={2}>{selectedChallenge.description}</Text>
                            </Box>
                            <Divider my={4} borderColor="gray.600" />
                            {/* Historical Record Section */}
                            <Box mb={4} p={4} bg="gray.800" borderRadius="md" boxShadow="sm">
                                <Flex align="center">
                                    <Icon as={FaTrophy} boxSize={6} color="orange.400" mr={3} />
                                    <Text fontSize="lg" fontWeight="bold" color="orange.400">
                                        Past Challengers
                                    </Text>
                                </Flex>
                                <Text mt={2}>{selectedChallenge.historicalRecord}</Text>
                            </Box>
                            <Divider my={4} borderColor="gray.600" />
                            {/* Screenshot Link Section */}
                            <Center mt={4}>
                                <Link
                                    href={selectedChallenge.screenshotLink}
                                    isExternal
                                    fontSize="lg"
                                    color="teal.300"
                                >
                                    View Screenshot
                                </Link>
                            </Center>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </Box>
    );
};

export default FactionChallengesPage;