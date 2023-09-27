import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
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
    ModalFooter,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import factionChallenges from "../../data/factionsData";
import { FactionChallenges } from "../../common/types";

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
                <Modal isOpen={true} onClose={closeChallenge}>
                    <ModalOverlay />
                    <ModalContent bg="gray.700" color="white">
                        <ModalHeader textAlign="center">
                            {selectedChallenge.title}
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Center mt={-5}>
                                <Image
                                    src={selectedChallenge.image}
                                    alt={selectedChallenge.title}
                                    maxW="100px"
                                    maxH="100px"
                                />
                            </Center>
                            <Accordion allowToggle>
                                <AccordionItem mt={4}>
                                    {({ isExpanded }) => (
                                        <>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Winner
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" />
                                                ) : (
                                                    <AddIcon fontSize="12px" />
                                                )}
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                {isExpanded && <Text>{selectedChallenge.winner}</Text>}
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                                <AccordionItem>
                                    {({ isExpanded }) => (
                                        <>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Kills
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" />
                                                ) : (
                                                    <AddIcon fontSize="12px" />
                                                )}
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                {isExpanded && <Text>{selectedChallenge.kills}</Text>}
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                                <AccordionItem>
                                    {({ isExpanded }) => (
                                        <>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Chevrons
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" />
                                                ) : (
                                                    <AddIcon fontSize="12px" />
                                                )}
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                {isExpanded && (
                                                    <Text>{selectedChallenge.chevrons}</Text>
                                                )}
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                                <AccordionItem>
                                    {({ isExpanded }) => (
                                        <>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Description
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" />
                                                ) : (
                                                    <AddIcon fontSize="12px" />
                                                )}
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                {isExpanded && (
                                                    <Text>{selectedChallenge.description}</Text>
                                                )}
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                                <AccordionItem>
                                    {({ isExpanded }) => (
                                        <>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Past Challengers
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" />
                                                ) : (
                                                    <AddIcon fontSize="12px" />
                                                )}
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                {isExpanded && (
                                                    <Text>{selectedChallenge.historicalRecord}</Text>
                                                )}
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                            </Accordion>
                            <Center mt={4}>
                                <Link href={selectedChallenge.screenshotLink} isExternal>
                                    Screenshot Link
                                </Link>
                            </Center>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </Box>
    );
};

export default FactionChallengesPage;