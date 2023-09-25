import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const ChallengesPage = () => {
    const cardImageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "relative", // Required for absolute positioning of text
    } as React.CSSProperties;

    const cardContainerStyle = {
        flex: "1",
        margin: "1rem",
        position: "relative", // Required for absolute positioning of text
        textAlign: "center",
    } as React.CSSProperties;

    const labelTextStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "white",
        zIndex: 1, // Ensure the text is above the image
    } as React.CSSProperties;

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Heading as="h2" size="lg" mb={4} textAlign="center">
                Challenges
            </Heading>
            <Flex>
                {/* Card for Unit Challenges */}
                <Box style={cardContainerStyle}>
                    <Link to="/challenges/unit">
                        <img
                            src="https://steamuserimages-a.akamaihd.net/ugc/52113253155625215/C7226637303B329659C36ED63C5BA4334BC50330/?imw=512&imh=320&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" // Replace with the URL of the unit image
                            alt="Unit Challenges"
                            style={cardImageStyle}
                        />
                        <Text style={labelTextStyle}>Units</Text>
                        <Text
                            fontSize="1rem"
                            color="white"
                            mt="0.5rem"
                        >
                            These challenges are for the more casual players or for players who crave fun challenges!
                        </Text>
                    </Link>
                </Box>

                {/* Card for Faction Challenges */}
                <Box style={cardContainerStyle}>
                    <Link to="/challenges/faction">
                        <img
                            src="https://www.gamesear.com/images/2018/7/total-war-rome-2-rise-of-the-republic-siege-battle-screenshot.jpg"
                            alt="Faction Challenges"
                            style={cardImageStyle}
                        />
                        <Text style={labelTextStyle}>Factions</Text>
                        <Text
                            fontSize="1rem"
                            color="white"
                            mt="0.5rem"
                        >
                            These challenges are for the more hardcore fans of Rome 2 Total War. Prove your superior knowledge and skill by achieving these hard-to-achieve challenges!
                        </Text>
                    </Link>
                </Box>
            </Flex>
        </Flex>
    );
};

export default ChallengesPage;