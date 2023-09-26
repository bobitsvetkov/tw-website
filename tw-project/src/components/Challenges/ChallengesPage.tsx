import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const ChallengesPage = () => {
    const cardImageStyle = {
        width: "100%",
        height: "400px",
        objectFit: "cover",
        position: "relative",
    } as React.CSSProperties;

    const cardContainerStyle = {
        flex: "1",
        margin: "1rem",
        position: "relative",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    } as React.CSSProperties;

    const cardGroupStyle = {
        flexWrap: "wrap",
    } as React.CSSProperties;

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
        >
            <Heading as="h2" size="lg" mb={4} textAlign="center">
                Challenges
            </Heading>
            <Flex style={cardGroupStyle}>
                {/* Card for Unit Challenges */}
                <Box style={cardContainerStyle}>
                    <Link to="/challenges/units">
                        <Image
                            src="https://cdn.discordapp.com/attachments/788828998410960926/1156258544786624525/Roman_Testudo_Demo.jpg?ex=6514512f&is=6512ffaf&hm=9a8359f30d9721cbece9c7563cc1d16a8304f9ff2b551d891c61acd9ec7db198&"
                            alt="Unit Challenges"
                            style={cardImageStyle}
                        />
                        <Text fontSize="1rem" color="white" mt="0.5rem">
                            These challenges are more focused on individual units rather than factions themselves. Have fun while you go through these fun challenges!
                        </Text>
                    </Link>
                </Box>

                {/* Card for Faction Challenges */}
                <Box style={cardContainerStyle}>
                    <Link to="/challenges/factions">
                        <Image
                            src="https://wiki.totalwar.com/images/3/3e/Factions-banner-2.jpg"
                            alt="Faction Challenges"
                            style={cardImageStyle}
                        />
                        <Text fontSize="1rem" color="white" mt="0.5rem">
                            These challenges are for the more hardcore fans of Rome 2 Total War. Prove your superior knowledge and skill by achieving these faction-specific challenges!
                        </Text>
                    </Link>
                </Box>
            </Flex>
        </Flex>
    );
};

export default ChallengesPage;
