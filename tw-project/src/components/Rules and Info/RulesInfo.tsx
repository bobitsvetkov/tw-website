import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Box,
    Center,
    Heading,
    Text,
    Icon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    VStack,
    HStack,
    Divider,
} from "@chakra-ui/react";
import { FaFireAlt } from "react-icons/fa";
import { rules } from "./rulesList";

const RulesInfo: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <Box
            bgGradient="linear(to-b, gray.900, gray.800)"
            minHeight="100vh"
            p={8}
            color="gray.100"
            overflow="hidden"
        >
            {/* Hero Section */}
            <Center mb={8}>
                <VStack spacing={4} textAlign="center">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <HStack spacing={4}>
                            <Icon as={FaFireAlt} w={12} h={12} color="red.400" />
                            <Heading
                                as="h1"
                                size="2xl"
                                fontWeight="bold"
                                bgClip="text"
                                bgGradient="linear(to-r, red.300, orange.400)"
                                lineHeight="1.5"
                            >
                                Total War League: Siege Rules
                            </Heading>
                            <Icon as={FaFireAlt} w={12} h={12} color="red.400" />
                        </HStack>
                    </motion.div>
                    <Text fontSize="lg" color="gray.400" maxWidth="600px">
                        Welcome to the Total War League Siege! Below are the carefully crafted
                        rules to ensure a fair and fun experience for all players.
                    </Text>
                </VStack>
            </Center>

            {/* Accordion Rules Section */}
            <Box maxWidth="800px" mx="auto">
                <Accordion
                    allowToggle
                    onChange={(index) => setActiveIndex(index as number)}
                >
                    {rules.map((rule, index) => (
                        <AccordionItem
                            key={index}
                            border="none"
                            mb={4}
                            bg="gray.800"
                            borderRadius="lg"
                            boxShadow={
                                activeIndex === index
                                    ? "0 0 20px rgba(255, 100, 100, 0.6)"
                                    : "0 0 10px rgba(0, 0, 0, 0.3)"
                            }
                            transition="box-shadow 0.3s"
                        >
                            <h2>
                                <AccordionButton
                                    _hover={{ bg: "gray.700" }}
                                    _expanded={{
                                        bg: "red.500",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                    p={6}
                                    borderRadius="lg"
                                >
                                    <HStack spacing={4} flex="1" align="center">
                                        <Icon as={rule.icon} w={8} h={8} color="red.300" />
                                        <Text fontSize="lg">{rule.title}</Text>
                                    </HStack>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel
                                pb={4}
                                px={6}
                                fontSize="md"
                                color="gray.300"
                                lineHeight="1.8"
                            >
                                {rule.content}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>

            {/* Footer */}
            <Center mt={12}>
                <Divider borderColor="gray.600" w="80%" />
            </Center>
            <Center mt={4}>
                <Text fontSize="lg" color="red.300" fontWeight="semibold">
                    Good luck and have fun!
                </Text>
            </Center>
        </Box>
    );
};

export default RulesInfo;
