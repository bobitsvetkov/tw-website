import { Box, Image, Text, Grid, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHeart, FaPaypal } from 'react-icons/fa';
import logoImage from '../assets/logoImage.png'
import { FaBroadcastTower, FaVideo } from 'react-icons/fa';
import FactionTierCard from "../Faction Tier List/TierCard";
import DLCCard from "../DLC/DLCCard";
const Home: React.FC = () => {
    return (
        <>
            <Box w="100%" h="300px" overflow="hidden">
                <Image src={logoImage} alt="Rome 2 Total War Logo" w="100%" h="100%" objectFit="cover" />
            </Box>

            <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
                gap={6}
                mt={6}
            >
                <Link to="/champions">
                    <Box
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Image src="https://i.pinimg.com/originals/51/59/9e/51599ed60e4974fb4a49447e18a6dc63.jpg" alt="Champions" boxSize="300px" mx="auto" mb={4} />
                        <Text mt={2}>Check out best players</Text>
                    </Box>
                </Link>

                <Link to="/twitch-streamers">
                    <Box
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Image src="https://cdn.m7g.twitch.tv/ba46b4e5e395b11efd34/assets/uploads/blog_og-image.jpg?w=1200&h=630&fm=jpg&auto=format" alt="Twitch Streamers" boxSize="300px" mx="auto" mb={4} />
                        <Text mt={2}>Meet our Twitch streamers</Text>
                    </Box>
                </Link>

                <Link to="/rules-info">
                    <Box
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Image src="https://img.freepik.com/premium-vector/rules-people-great-design-any-purposes-flat-vector-illustration-character_123447-3954.jpg" alt="Rules and Info" boxSize="300px" mx="auto" mb={4} />
                        <Text mt={2}>Learn the rules and get info</Text>
                    </Box>
                </Link>

                <a href="https://streamlabs.com/marketableskills/merch" target="_blank" rel="noopener noreferrer">
                    <Box
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Image src="https://panels.twitch.tv/panel-659960022-image-944d9733-f922-4ed0-96c6-5dcc25da5ad3" alt="Merch" boxSize="300px" mx="auto" mb={4} />
                        <Text mt={2}>Get Official Merchandise</Text>
                    </Box>
                </a>

                <Link to="/youtubers">
                    <Box
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Image src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc" alt="Youtubers" boxSize="300px" mx="auto" mb={4} />
                        <Text mt={2}>Meet our Youtubers</Text>
                    </Box>
                </Link>

                <a href="https://docs.google.com/spreadsheets/d/1SZISO_t2vM2TPl4i6PPdHs2WF_A5AgBNM_dhXBPe-78/edit#gid=160152427" target="_blank" rel="noopener noreferrer">
                    <Box
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Image src="https://i.ytimg.com/vi/Kqvff-tWDbI/maxresdefault.jpg" alt="Statistics" boxSize="300px" mx="auto" mb={4} />
                        <Text mt={2}>TWLS Standings</Text>
                    </Box>
                </a>

                <a href="https://discord.gg/K9GU6VzrmK" target="_blank" rel="noopener noreferrer">
                    <Box
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Image src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRCHTTX1RAopljdoYpOaNfVf5nBNvbwGfyR5n4DAs0DsOwxSO9puiT_GgKqinHT8HsW8VYeiiuU1IG3jY69EhnsQ--&format=source" alt="Community" boxSize="300px" mx="auto" mb={4} />
                        <Text mt={2}>Join our Community</Text>
                    </Box>
                </a>

                <Link to="/prizes">
                    <Box
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Image src="https://assetsio.reedpopcdn.com/rome-total-war-ii-screenshot.png?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" alt="Prizes" boxSize="300px" mx="auto" mb={4} />
                        <Text mt={2}>Prizes and Awards</Text>
                    </Box>
                </Link>

                <a href="https://www.paypal.com/paypalme/bobitsv" target="_blank" rel="noopener noreferrer">
                    <Box
                        p={4}
                        h="370px"
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Icon as={FaHeart} w={10} h={10} mb={2} />
                        <Text fontWeight="bold" fontSize="xl" mb={2}>Support the continuous development of the site!</Text>
                        <Text mb={2}>Help support the continuous development of this site. Your generosity keeps us going!</Text>
                        <Icon as={FaPaypal} w={8} h={8} mt={4} />
                        <Text mt={2}>Donate with PayPal</Text>
                    </Box>
                </a>

                <a href="https://streamlabs.com/marketableskills/tip" target="_blank" rel="noopener noreferrer">
                    <Box
                        p={4}
                        borderRadius="md"
                        h="370px"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Icon as={FaBroadcastTower} w={10} h={10} mb={2} />
                        <Text fontWeight="bold" fontSize="xl" mb={2}>Support MarketableSkills!</Text>
                        <Text mb={2}>Love the content? Show your appreciation and keep the streams coming!</Text>
                        <Text fontSize="sm" mb={2}>MarketableSkills is dedicated to bringing you top-notch content every week. Donations help improve the stream quality, and support the continuous hard work!</Text>
                        <Icon as={FaVideo} w={8} h={8} mt={2} /> {/* This is the icon change for Streamlabs */}
                        <Text mt={2}>Donate to MarketableSkills with Streamlabs</Text>
                    </Box>
                </a>
                <Link to="/guides">
                    <Box
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Image src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2019/03/11103129/carthage-1024x576.jpg" alt="Youtubers" boxSize="300px" mx="auto" mb={4} />
                        <Text mt={2}>Rome 2 Guides</Text>
                    </Box>
                </Link>
                <Link to="/challenges">
                    <Box
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Image src="https://i.imgur.com/C3u4BD0.jpg" alt="Prizes" boxSize="300px" mx="auto" mb={4} />
                        <Text mt={2}>Challenges</Text>
                    </Box>
                </Link>
                    <FactionTierCard />
                    <DLCCard />

            </Grid>
        </>
    );
}

export default Home;