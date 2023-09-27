import { Box, Text, Image, Heading, useBreakpointValue, Flex, Center, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import React, { useState } from "react";
import { UnitChallenges } from "../../common/types";
import unitChallenges from "../../data/unitsData";

const UnitChallengePage: React.FC = () => {
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 10 }) ?? 1;

    // Create matrix for faction icons
    const rows = [];
    for (let i = 0; i < unitChallenges.length; i += columns) {
        const row = unitChallenges.slice(i, i + columns);
        rows.push(row);
    }

    const [selectedChallenge, setSelectedChallenge] = useState<UnitChallenges | null>(null);

    const openChallenge = (challenge: UnitChallenges) => {
        setSelectedChallenge(challenge);
    };

    const closeChallenge = () => {
        setSelectedChallenge(null);
    };

    return (
        <Box bg="gray.900" minHeight="100vh" p={6}>
            <Center mb={6}>
                <Heading color="white">Unit Challenges</Heading>
            </Center>
            {rows.map((row, rowIndex) => (
                <Flex key={rowIndex} justify="center" alignItems="center">
                    {row.map((challenge) => (
                        <Box key={challenge.id} p={4} bg="gray.700" rounded="lg" m={2} onClick={() => openChallenge(challenge)}>
                            <Center>
                                <Image src={challenge.unitIcon} alt={challenge.title} maxW="100px" maxH="100px" />
                            </Center>
                        </Box>
                    ))}
                </Flex>
            ))}
            {selectedChallenge && (
                <Modal isOpen={true} onClose={closeChallenge}>
                    <ModalOverlay />
                    <ModalContent bg="gray.700" color="white">
                        <ModalHeader textAlign="center">{selectedChallenge.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Center>
                                <Image src={selectedChallenge.image} alt={selectedChallenge.title} maxW="100px" maxH="100px" />
                            </Center>
                            <Text mt={4}>Winner: {selectedChallenge.winner}</Text>
                            <Text>Chevrons: {selectedChallenge.chevrons}</Text>
                            <Text>Kills: {selectedChallenge.kills}</Text>
                            <Text>Description: {selectedChallenge.description}</Text>
                            <Text>Past Challengers: {selectedChallenge.historicalRecord}</Text>
                            <Center mt={4}>
                                <Link href={selectedChallenge.screenshotLink} isExternal>
                                    Screenshot Link
                                </Link>
                            </Center>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </Box>
    );
};

export default UnitChallengePage;