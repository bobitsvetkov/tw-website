import { Box, Image, Text, Grid, LinkBox, LinkOverlay, Center, Heading } from "@chakra-ui/react";
function Streamers() {
    const streamers = [
        {
            name: "MarketableSkills",
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/2c0a20e0-c769-4e89-b8fd-69ad86f5547a-profile_image-300x300.png",
            description: "Old War-chief, leader of the rebellion. Been slayin would be oppressors since you were suckling at ur mommas teet."
        },
        {
            name: "Capn4is",
            image: "https://pbs.twimg.com/profile_images/1024555257211146241/5nkcKtJu_400x400.jpg",
            description: "Honestly. I'd run as far as you can in the opposite direction if I were you."
        },
        {
            name: "bobitw",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Territory_of_the_First_Bulgarian_Empire_-_9_th_century.png",
            description: "Hello there. I am an avid Total War player, but I will stream other stuff as well. I might talk a bit about politics/economy/education etc. Still most of my content will probably be focused on Total War."
        },
        {
            name: "jamham__",
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/7d57fd39-5577-4ae2-badf-71557c5add19-profile_image-70x70.png",
            description: "Diving deep into the mechanics of Total War games and sharing my insights."
        },
        {
            name: "bubinni",
            image: "https://yt3.googleusercontent.com/ILcVSIKD-5TTAbZNqfvm1JJT2ssjPvrW6XQG0S55X7kUhjg58wCzWzvy_pjdMy2wX3lqRxEM=s176-c-k-c0x00ffffff-no-rj",
            description: "I am the Boobiest-Binni! The Great Khan of the mighty Bubi Horde! Join the ranks of the horde and lay waste to those non-horse-riding posers. CHARGE, MY LANCERS! CHARGE! MAY YOU BE THUNDER AND CHAOS!"
        },
        {
            name: "bossprophet123",
            image: "https://yt3.googleusercontent.com/Solcuu4ZuAfaa39E090xSqc8p4D0Ip7nAio_Z7CyZpbbzx8-0GsOISXp5AiYPtAVHL2Ci3VIEQ=s176-c-k-c0x00ffffff-no-rj",
            description: "Marine Corps Veteran Goin to school for Game development. Join me for great gaming content. I normally play Total war Rome 2 & NCAA 14, but I play multiple different and join me during my gaming marathons and suggest new games for me to try."
        },
        {
            name: "arcticgollem",
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/5c76b8fc-624c-4d14-9599-afe89085de89-profile_image-70x70.png",
            description: "20 Years Old looking to play some good old Rome 2!"
        },
    ];

    return (
        <Box bg="gray.800" minHeight="100vh" color="white" p={4}>
            <Center mb={6}>
                <Heading color="white">Meet our Streamers!</Heading>
            </Center>

            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {streamers.map((streamer, index) => (
                    <LinkBox
                        key={index}
                        as="article"
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
                    >
                        <Image src={streamer.image} alt={streamer.name} boxSize="200px" mx="auto" mb={4} />
                        <Text mb={4}>{streamer.description}</Text>
                        <LinkOverlay href={`https://www.twitch.tv/${streamer.name}`} isExternal fontWeight="bold">
                            Watch on Twitch
                        </LinkOverlay>
                    </LinkBox>
                ))}
            </Grid>
        </Box>
    );
}

export default Streamers;