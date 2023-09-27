import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const ChallengesPage = () => {
    const cardImageStyle = {
        width: "100%",
        maxHeight: "400px",
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
                            src="https://cdn.discordapp.com/attachments/788828998410960926/1156268557949218876/Rome_2_Units.jpg?ex=65150342&is=6513b1c2&hm=ce7874b257ac593dee24fa7ecde2f8e63dc6e938b05581cb178718ebc1a4926c&"
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
                            src="https://cdn.discordapp.com/attachments/788828998410960926/1156268571819786362/Rome_2_Factions.jpg?ex=65150345&is=6513b1c5&hm=2a4958ad8ac4294ccb8bc6ad071a0f257f713e046a039e956d982fa714a4ebaf&"
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
