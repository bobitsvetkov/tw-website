import { Box, Text, Grid, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTrophy, FaGamepad, FaArrowCircleRight, FaStore, FaChartLine, FaAward, FaDollarSign, FaDonate, FaBookOpen } from "react-icons/fa";
import logoImage from "../assets/logoImage.png";
import Rome from "../assets/Rome.jpg";



const sections = [
    { title: "Champions", icon: FaTrophy, text: "Check out the best players", link: "/champions" },
    { title: "Streamers", icon: FaGamepad, text: "Meet our Streamers", link: "/streamers" },
    { title: "Rules and Info", icon: FaArrowCircleRight, text: "Learn the rules and get info", link: "/rules-info" },
    { title: "Merchandise", icon: FaStore, text: "Get Official Merchandise", link: "https://streamlabs.com/marketableskills/merch", external: true },
    { title: "Elo Ranking", icon: FaChartLine, text: "Check the top teams!", link: "/elo" },
    { title: "Player Ranking", icon: FaChartLine, text: "Check the top players!", link: "/ranking" },
    { title: "Prizes", icon: FaAward, text: "Discover prizes and awards", link: "/prizes" },
    { title: "Support Us", icon: FaDollarSign, text: "Support the creator of this website", link: "https://www.paypal.com/paypalme/bobitsv", external: true },
    { title: "MarketableSkills Support", icon: FaDonate, text: "Support MarketableSkills", link: "https://streamlabs.com/marketableskills/tip", external: true },
    { title: "Rome 2 Guides", icon: FaBookOpen, text: "Explore helpful guides", link: "/guides" },
    { title: "Unit Challenges", icon: FaGamepad, text: "Take on exciting challenges", link: "/challenges/units" },
    { title: "Faction Challenges", icon: FaGamepad, text: "Take on exciting challenges", link: "/challenges/factions" },
];

const Home: React.FC = () => {
    return (
        <Box
            minH="100vh"
            bgImage={`url(${Rome})`}
            bgSize="cover"
            bgPosition="center"
            color="white"
            position="relative"
        >
            {/* Dark Overlay */}
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.5)"
                zIndex={1}
            />

            {/* Header with Logo Image and Join Us Button */}
            <Box
                w="100%"
                bg="rgba(0, 0, 0, 0.3)"
                p={4}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                position="relative"
                zIndex={2}
            >
                <Box>
                    <img src={logoImage} alt="Logo" style={{ width: "150px" }} />
                </Box>
                <Box>
                    <a
                        href="https://discord.gg/marketableskills-821065002394845275"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#6B46C1",
                            color: "white",
                            borderRadius: "8px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            transition: "background-color 0.3s ease, transform 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#553C9A")}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#6B46C1")}
                    >
                        Join Us!
                    </a>
                </Box>
            </Box>

            {/* Main Grid Section */}
            <Box position="relative" zIndex={2}>
                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
                    gap={6}
                    mt={8}
                    p={4}
                    bg="rgba(0, 0, 0, 0.1)"
                    borderRadius="lg"
                    boxShadow="md"
                >
                    {sections.map((section, index) => (
                        <Link key={index} to={section.link} target={section.external ? "_blank" : "_self"}>
                            <Box
                                p={4}
                                borderRadius="lg"
                                textAlign="center"
                                bg="rgba(50, 50, 50, 0.3)"
                                _hover={{
                                    transform: "translateY(-5px)",
                                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                                }}
                                transition="transform 0.3s ease"
                            >
                                <Icon as={section.icon} boxSize={14} mb={4} color="purple.300" />
                                <Text fontSize="lg" fontWeight="bold" mb={2}>
                                    {section.title}
                                </Text>
                                <Text fontSize="sm">{section.text}</Text>
                            </Box>
                        </Link>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Home;
