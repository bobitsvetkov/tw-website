import {
    Box,
    Text,
    Image,
    Heading,
    useBreakpointValue,
    SimpleGrid,
    Flex,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Divider,
    Icon,
} from "@chakra-ui/react";
import { FaTrophy, FaBook } from "react-icons/fa";
import { FaBacteria } from "react-icons/fa"; // Add icons for extra flair
import React, { useState } from "react";
import { UnitChallenges } from "../../common/types";
import unitChallenges from "../../data/unitsData";

const UnitChallengePage: React.FC = () => {
    const columns = useBreakpointValue({ base: 2, md: 3, lg: 5 }) ?? 2;

    const [selectedChallenge, setSelectedChallenge] =
        useState<UnitChallenges | null>(null);

    const openChallenge = (challenge: UnitChallenges) => {
        setSelectedChallenge(challenge);
    };

    const closeChallenge = () => {
        setSelectedChallenge(null);
    };

    return (
        <Box bg="gray.900" minHeight="100vh" p={6}>
            <Center mb={6}>
                <Heading color="white" fontSize="3xl" fontWeight="bold">
                    Unit Challenges
                </Heading>
            </Center>
            <SimpleGrid columns={columns} spacing={4}>
                {unitChallenges.map((challenge) => (
                    <Box
                        key={challenge.id}
                        p={4}
                        bg="gray.800"
                        rounded="lg"
                        boxShadow="lg"
                        cursor="pointer"
                        _hover={{
                            transform: "scale(1.05)",
                            boxShadow: "2xl",
                        }}
                        transition="all 0.2s ease-in-out"
                        onClick={() => openChallenge(challenge)}
                    >
                        <Center mb={3}>
                            <Image
                                src={challenge.unitIcon}
                                alt={challenge.title}
                                maxW="80px"
                                borderRadius="full"
                                boxShadow="xl"
                            />
                        </Center>
                        <Text textAlign="center" fontSize="lg" fontWeight="bold" color="white">
                            {challenge.title}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>

            {selectedChallenge && (
                <Modal isOpen={true} onClose={closeChallenge} size="lg" motionPreset="slideInBottom">
                    <ModalOverlay />
                    <ModalContent bg="gray.900" color="white" borderRadius="lg" boxShadow="2xl">
                        <ModalHeader textAlign="center" fontSize="2xl" fontWeight="extrabold">
                            {selectedChallenge.title}
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p={1} maxH="80vh" overflowY="auto">
                            {/* Image Section */}
                            <Center mb={5}>
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
                            {/* Overview Section */}
                            <Box mb={4} p={4} bg="gray.800" borderRadius="md" boxShadow="sm">
                                <Flex align="center">
                                    <Icon as={FaTrophy} boxSize={6} color="yellow.400" mr={3} />
                                    <Text fontSize="lg" fontWeight="bold" color="yellow.400">
                                        Overview
                                    </Text>
                                </Flex>
                                <Text mt={2}>Winner: {selectedChallenge.winner}</Text>
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
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </Box>
    );
};

export default UnitChallengePage;
