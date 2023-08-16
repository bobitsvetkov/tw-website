import { Box, Center, Heading, Image, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoImage from '../assets/logoImage.png'

function Home() {
    return (
        <>
            <Box w="255%" h="300px" overflow="hidden">
                <Image src={logoImage} alt="Rome 2 Total War Logo" w="100%" h="100%" objectFit="cover" />
            </Box>

            <VStack spacing={6} mt={6}>
                <Link to="/champions">
                    <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" textAlign="center">
                        <Image src="https://i.pinimg.com/originals/51/59/9e/51599ed60e4974fb4a49447e18a6dc63.jpg" alt="Champions" boxSize="300px" mx="auto" />
                        <Text mt={2}>Check out best players</Text>
                    </Box>
                </Link>

                <Link to="/twitch-streamers">
                    <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" textAlign="center">
                        <Image src="https://cdn.m7g.twitch.tv/ba46b4e5e395b11efd34/assets/uploads/blog_og-image.jpg?w=1200&h=630&fm=jpg&auto=format" alt="Twitch Streamers" boxSize="300px" mx="auto" />
                        <Text mt={2}>Meet our Twitch streamers</Text>
                    </Box>
                </Link>

                <Link to="/rules-info">
                    <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" textAlign="center">
                        <Image src="https://img.freepik.com/premium-vector/rules-people-great-design-any-purposes-flat-vector-illustration-character_123447-3954.jpg" alt="Rules and Info" boxSize="300px" mx="auto" />
                        <Text mt={2}>Learn the rules and get info</Text>
                    </Box>
                </Link>
            </VStack>
        </>
    );
}

export default Home;