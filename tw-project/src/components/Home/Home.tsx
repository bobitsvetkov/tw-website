import { Box, Image, Text, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoImage from '../assets/logoImage.png'

function Home() {
    return (
        <>
            <Box w="107.7%" h="300px" overflow="hidden">
                <Image src={logoImage} alt="Rome 2 Total War Logo" w="100%" h="100%" objectFit="cover" />
            </Box>

            <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={6}>
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

                <a href="https://streamlabs.com/marketableskills/merch" target="_blank" rel="noopener noreferrer">
                    <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" textAlign="center">
                        <Image src="https://panels.twitch.tv/panel-659960022-image-944d9733-f922-4ed0-96c6-5dcc25da5ad3" alt="Merch" boxSize="300px" mx="auto" />
                        <Text mt={2}>Get Official Merchandise</Text>
                    </Box>
                </a>

                <Link to="/youtubers">
                    <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" textAlign="center">
                        <Image src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc" alt="Youtubers" boxSize="300px" mx="auto" />
                        <Text mt={2}>Meet our Youtubers</Text>
                    </Box>
                </Link>

                <Link to="/events">
                    <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" textAlign="center">
                        <Image src="https://via.placeholder.com/300" alt="Events" boxSize="300px" mx="auto" />
                        <Text mt={2}>Upcoming Events</Text>
                    </Box>
                </Link>

                <a href="https://discord.gg/K9GU6VzrmK" target="_blank" rel="noopener noreferrer">
                    <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" textAlign="center">
                        <Image src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRCHTTX1RAopljdoYpOaNfVf5nBNvbwGfyR5n4DAs0DsOwxSO9puiT_GgKqinHT8HsW8VYeiiuU1IG3jY69EhnsQ--&format=source" alt="Community" boxSize="300px" mx="auto" />
                        <Text mt={2}>Join our Community</Text>
                    </Box>
                </a>

                <Link to="/guides">
                    <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md" textAlign="center">
                        <Image src="https://via.placeholder.com/300" alt="Guides" boxSize="300px" mx="auto" />
                        <Text mt={2}>Game Guides & Tips</Text>
                    </Box>
                </Link>
            </Grid>
        </>
    );
}

export default Home;