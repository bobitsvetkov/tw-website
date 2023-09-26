import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const ChallengesPage = () => {
    const cardImageStyle = {
        width: "100%",
        maxHeight: "300px",
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
                    <Link to="/challenges/unit">
                        <Image
                            src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/total-war-rome-ii/c/c8/RomanTetstudo.jpg"
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
                    <Link to="/challenges/faction">
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
