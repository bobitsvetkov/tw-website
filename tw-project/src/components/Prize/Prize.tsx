import { Box, Center, Heading, Text, List, ListItem, Flex } from "@chakra-ui/react";
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
                <List mb={5} pl={5} styleType="none">
                    <ListItem>Lord of the Meme lords: awarded to the greatest TWL meme creator.</ListItem>
                    <ListItem>Meme lord: Awarded to our top 2 meme creators.</ListItem>
                    <ListItem>Highest K/D simp: Fighter with the Best K/D across the Group Stage.</ListItem>
                    <ListItem>Playoff MVP: Fighter determined by Mod vote to be the Greatest playoff performer.</ListItem>
                    <ListItem>The AB badge: Did your General Unit die to gate oil or become glitched in the gatehouse? Rage quitting? This role is for you :)</ListItem>
                    <ListItem>The Petard: Awarded to the fighter with the most…uh….interesting comps and strategies.</ListItem>
                    <ListItem>Champion of the Losers: Discord role for that oh so coveted 3rd place.</ListItem>
                    <ListItem>6th man of the year: Best sub.</ListItem>
                    <ListItem>Biggest Backpack: for the hardest carrying teammate.</ListItem>
                    <ListItem>Best lagger: for Mango or maybe crusader.</ListItem>
                    <ListItem>Group Stage MVP: Fighter determined by Mod vote to be the best Group Stage performer.</ListItem>
                </List>

                <Heading mb={2} size="lg" color="green.400">💰 Prize Pool:</Heading>
                <Text mb={2}>
                    A total of $500 will be split amongst the top 3 places:
                    <List mt={3} pl={5} styleType="none">
                        <ListItem>1st Place: $300</ListItem>
                        <ListItem>2nd Place: $150</ListItem>
                        <ListItem>3rd Place: $50</ListItem>
                    </List>
                </Text>

                <Text mt={5} fontSize="xl" fontWeight="bold" color="red.500">Good luck and may the best team win! 🎉</Text>
            </Box>
        </Flex>
    );
}

export default Prizes;