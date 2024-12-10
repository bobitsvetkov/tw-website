import { Box, Icon, Text, Grid, LinkBox, Center, Heading, VStack, Button } from "@chakra-ui/react";
import { FaTwitch, FaYoutube } from "react-icons/fa";
import { useEffect } from 'react';

const Streamers: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const creators = [
        // Streamers
        {
            name: "MarketableSkills",
            platform: "twitch",
            description: "Old War-chief, leader of the rebellion. Been slayin would be oppressors since you were suckling at ur mommas teet."
        },
        {
            name: "Capn4is",
            platform: "twitch",
            description: "Honestly. I'd run as far as you can in the opposite direction if I were you."
        },
        {
            name: "jamham__",
            platform: "twitch",
            description: "Diving deep into the mechanics of Total War games and sharing my insights."
        },
        {
            name: "bubinni",
            platform: "twitch",
            description: "I am the Boobiest-Binni! The Great Khan of the mighty Bubi Horde! Join the ranks of the horde and lay waste to those non-horse-riding posers."
        },
        {
            name: "bossprophet123",
            platform: "twitch",
            description: "Marine Corps Veteran Goin to school for Game development. Join me for great gaming content."
        },
        // YouTubers
        {
            name: "@marketableskills5374",
            platform: "youtube",
            description: "Welcome to the shit show, ya beautiful misfits :)  Its mostly Rome 2 and the long dark up in here, but look for more content soon!!"
        },
        {
            name: "@capn4is187",
            platform: "youtube",
            description: "Honestly. I'd run as far as you can in the opposite direction if I were you."
        },
        {
            name: "@bobitw",
            platform: "youtube",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Territory_of_the_First_Bulgarian_Empire_-_9_th_century.png",
            description: "Hello there. I am an avid Total War player, but I will stream other stuff as well. I might talk a bit about politics/economy/education etc. Still most of my content will probably be focused on Total War."
        },
        {
            name: "@PixelatedApollo1",
            platform: "youtube",
            image: "https://yt3.googleusercontent.com/ytc/AOPolaRO4D4_4HLTEbLpjuYwUpEfsI237-AvnXh2qk5gow=s900-c-k-c0x00ffffff-no-rj",
            description: "Join with me, to witness some of the greatest battles throughout history.  Not just from our world, but from fantasy worlds like Middle Earth and Elder Scrolls.  Thanks to award winning series Total War, we can go back in time and watch some of the bloodiest battles with our own two eyes!  My name is Pixelated Apollo, and I hope you have your sword sharpened, and your Warhorse rested, because it's time for Battle!! "
        },
    ];

    return (
        <Box bg="gray.800" minHeight="100vh" color="white" p={4}>
            <Center mb={6}>
                <Heading color="white">Meet our Creators!</Heading>
            </Center>

            <Grid
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap={6}
            >
                {creators.map((creator, index) => (
                    <LinkBox
                        key={index}
                        as="article"
                        p={6}
                        borderRadius="xl"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{
                            boxShadow: "xl",
                            transform: "scale(1.05)",
                            background: 'gray.600',
                        }}
                    >
                        <VStack spacing={4}>
                            <Icon
                                as={creator.platform === "twitch" ? FaTwitch : FaYoutube}
                                boxSize={16}
                                color={creator.platform === "twitch" ? "purple.500" : "red.500"}
                            />
                            <Text fontSize="2xl" fontWeight="bold">
                                {creator.name}
                            </Text>
                            <Text fontSize="lg" color="gray.300">
                                {creator.description}
                            </Text>
                            <Button
                                as="a"
                                href={creator.platform === "twitch" ? `https://www.twitch.tv/${creator.name}` : `https://www.youtube.com/${creator.name}`}
                                target="_blank"
                                colorScheme="purple"
                                size="sm"
                            >
                                Visit Channel
                            </Button>
                        </VStack>
                    </LinkBox>
                ))}
            </Grid>
        </Box>
    );
};

export default Streamers;
