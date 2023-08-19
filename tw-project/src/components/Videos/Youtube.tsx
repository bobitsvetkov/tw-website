import React from 'react';
import { Box, Flex,} from "@chakra-ui/react";
import YouTube from 'react-youtube';

function VideoPage() {
    const videos = ["i4iIz7N8B58", "Qadoh8Utu1I", "MQ8-DYQN0bE",
    "aZJvzkAt-o0", "-3ZvzigPrSQ", "Mh1j26xxc78", "ZdByF_5N8Hs",
    "10M2vbXNzo8", "53IkBcM29SU", "SwMm53KPgpo", "Z4q-w2jLl64",
    "lguQn8qc78s"
];
    const opts = {
        height: '250',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <Flex wrap="wrap" justify="space-between" p={5}>
            {videos.map((videoId) => (
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} width={{ base: "100%", sm: "45%", md: "30%" }}>
                    <YouTube videoId={videoId} opts={opts} />
                </Box>
            ))}
        </Flex>
    );
}

export default VideoPage;