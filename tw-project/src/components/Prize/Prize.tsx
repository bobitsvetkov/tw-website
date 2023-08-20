import { Box, Heading, Text, List, Flex, Divider, ListItem } from "@chakra-ui/react";
import { useEffect } from 'react';

function Prizes() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Flex direction="column" alignItems="center" p={6} minHeight="100vh" width="100vw" bg="gray.800">
            <Box width="100%" textAlign="center" p={4} borderRadius="md" boxShadow="lg" border="none">
                <Heading mb={4} color="blue.500" size="2xl">TOTAL WAR LEAGUE: SIEGE SEASONAL AWARDS</Heading>

                <Heading mb={2} size="lg" color="blue.400">🏆 Special Discord and Stream Roles:</Heading>
                <List mb={5} spacing={2} styleType="none">
                    {[
                        "Lord of the Meme lords: awarded to the greatest TWL meme creator.",
                        "Meme lord: Awarded to our top 2 meme creators.",
                        "Highest K/D simp: Fighter with the Best K/D across the Group Stage",
                        "Playoff MVP: Fighter determined by Mod vote to be the Greatest playoff performer.",
                        "The AB badge: Awarded for biggest fail in the season.",
                        "The Petard: Awarded to the fighter with the most…uh….interesting comps and strategies",
                        "Champion of the Losers: 3rd place finisher.",
                        "6th man of the year: Best sub.",
                        "Biggest Backpack: for the hardest carrying teammate.",
                        "Best lagger: For the player that lags or drops the most during a season.",
                        "Group Stage MVP: Fighter determined by Mod vote to be the best Group Stage performer."
                    ].map((item, index) => (
                        <ListItem key={index} textAlign="center">
                            {item}
                        </ListItem>
                    ))}
                </List>

                <Heading mb={2} size="lg" color="green.400">💰 Prize Pool:</Heading>
                <Text mb={2}>A total of $1000 will be split amongst the winners!</Text>
                <List mb={5} spacing={2} styleType="none">
                    {[
                        "1st Place: $500",
                        "2nd Place: $200",
                        "3rd Place: $100",
                    ].map((item, index) => (
                        <ListItem key={index} textAlign="center">
                            {item}
                        </ListItem>
                    ))}
                </List>

                <Divider my={4} />

                <List mb={5} spacing={2} styleType="none">
                    {[
                        "Top of the group: $30",
                        "Highest K/D: $20",
                        "Most chevrons per game: $20",
                        "Lord of the Meme lords: $15",
                    ].map((item, index) => (
                        <ListItem key={index} textAlign="center">
                            {item}
                        </ListItem>
                    ))}
                </List>

                <Text mt={5} fontSize="xl" fontWeight="bold" color="red.500">Good luck and may the best team win! 🎉</Text>
            </Box>
        </Flex>
    );
}

export default Prizes;




