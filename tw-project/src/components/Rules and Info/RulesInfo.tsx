import { Box, Center, Heading, Text, ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";

function RulesInfo() {
    return (
        <Box p={6}>
            <Center mb={6}>
                <Heading>TOTAL WAR LEAGUE: SIEGE RULES</Heading>
            </Center>

            <Text mb={5}>Basic rules:</Text>
            <UnorderedList mb={5} pl={5}>
                <ListItem>Settlement size: Variable</ListItem>
                <ListItem>Funds: Large</ListItem>
                <ListItem>Season: Spring</ListItem>
                <ListItem>Time of Day: Day</ListItem>
                <ListItem>Weather: Dry</ListItem>
                <ListItem>Difficulty: Normal</ListItem>
                <ListItem>Time Limit: 60 Minutes</ListItem>
                <ListItem>Unit Size: Ultra</ListItem>
            </UnorderedList>

            <OrderedList mb={5} spacing={3}>
                <ListItem>
                    Objective:
                    <Text mt={1}>
                        Acquire points to win, team success is based on points. Points are collected by winning matches, by faction selection and by participation. Teams can also lose points.
                    </Text>
                </ListItem>

                <ListItem>
                    Max unit types:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>1 artillery piece per player on attack. Max 1 of each artillery type (ballista/onager and scorpion) per team on attack. On defense, only 1 artillery can be brought per team (only scorpions may be used inside the settlement).</ListItem>
                        <ListItem>2 pikes per player</ListItem>
                        <ListItem>4 missile units (slinger, archers, archer cav) + 1 “javie” unit (peltast, javelinmen, agrianian, javie cav or horse archer) per player</ListItem>
                        <ListItem>7 of the same unit per player (i.e. can`t bring 8 thorax swordsmen)</ListItem>
                        <ListItem>2 eles/chariots per team</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    No pike stacking:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Pike units may not be arranged inside another unit or within the length of the deployed pike.</ListItem>
                        <ListItem>If, intentional or unintentional, pike stacking is observed during league play it must be remedied immediately. Failure to do so will result in a loss or penalty.</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    Pull Through:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Pull through infractions: first instance - penalty at mods discretion, second instance -1, third occurrence results in forfeit for that battle.</ListItem>
                        <ListItem>Units pulling or pushing through other units is not permitted.</ListItem>
                        <ListItem>However, there are some exceptions: elephants/chariots can pull through any unit that isn't already in Shieldwall, hoplite wall, shield screen, and square formations.</ListItem>
                        <ListItem>Cav can pull through archers, pleb/slave units, and loose formation units.</ListItem>
                        <ListItem>Cav may also pull through unbraced units if the charge knocks down more than 50% of the men in the unit.</ListItem>
                        <ListItem>Infantry may not pull through archers or any other unit with the exception of routed units. Not wavering, Routed.</ListItem>
                        <ListItem>Cav cannot pull through other cav.</ListItem>
                        <ListItem>Pulling through intentionally to win despite the penalties is a forfeit.</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    No camping the VP:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Victory point camping is placing all of/a majority of one's units at the choke points leading to the final capture point on the map.</ListItem>
                        <ListItem>Finale choke points are map specific, clarification can be sought before games. There will be videos made showing the final choke points for each map.</ListItem>
                        <ListItem>No more than 5 units may be inside the last set of choke points before the VP.</ListItem>
                        <ListItem>It is acceptable to briefly funnel troops through the VP to fight at the front.</ListItem>
                        <ListItem>Penalties for VP camping vary from 1 to a forfeit depending on how bad it is and how the team responds to being told to get out of the VP.</ListItem>
                        <ListItem>VP Camping rules do not apply to small size maps.</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    NO deployables. If any are on the battlefield, it is a disqualification.
                </ListItem>

                <ListItem>
                    Other Exploits:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>No siege towers, tortoises, galleys, or battering rams inside the settlement.</ListItem>
                        <ListItem>No Beserk Elephant exploit.</ListItem>
                        <ListItem>No tort/wall exploit.</ListItem>
                        <ListItem>No infinite charge bonus exploit.</ListItem>
                        <ListItem>No glitching torts or greek city siege towers into barb settlements.</ListItem>
                        <ListItem>No other exploits. Ask a moderator if you are unsure if something is an exploit.</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    Artillery:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>One artillery piece per player on attack (only one ballista/onager per team) Only one artillery per team is allowed on defense.</ListItem>
                        <ListItem>Shotgunning (shooting enemies at close range) artillery is allowed.</ListItem>
                        <ListItem>ONLY scorpions are allowed inside the settlement.</ListItem>
                        <ListItem>NO wall artillery.</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    Grand Campaign factions ONLY:
                    <Text mt={1}>
                        NO glitching in units. It is highly recommended that all players on each team owns all DLC`s that give access to Grand Campaign factions. It is not mandatory to have them all, but no accommodations will be made for teams that have players who do not own all the GC factions. If a team refuses to buy a DLC when they must, they will forfeit their remaining games.
                    </Text>
                </ListItem>

                <ListItem>
                    The same faction CANNOT be used by both teams in the same battle. For example, the attackers and defenders cannot both pick Carthage.
                </ListItem>

                <ListItem>
                    Settlements and order:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Teams will flip a coin. Winner of the toss picks to attack or defend first. Coin toss call and attack or defend first is to be done in the twl-faction-picks channel on the discord server.</ListItem>
                        <ListItem>Maps are assigned for each match. Check the schedule for the map to use for each matchup.</ListItem>
                        <ListItem>If the wrong settlement is used, both teams will get a -1 penalty.</ListItem>
                        <ListItem>The attacking team picks the first faction. Then teams alternate faction picks. Faction picks must be done in the twl-faction-picks channel on the discord server.</ListItem>
                        <ListItem>You must be loaded into the first battle no more than 10 minutes past the agreed start time for the match. Team(s) that are late will receive a -1 penalty.</ListItem>
                        <ListItem>Both attack and defense are played on the same map.</ListItem>
                        <ListItem>Moving entire army once the 60 sec countdown begins is considered a forfeit.</ListItem>
                        <ListItem>Moving units within the last 10 sec of the count down timer will be reviewed and may result in a point deduction. Minor tweaking does not count towards this rule.</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    Teams consist of two “main” players plus one sub in case one of the “main” players isn`t available. This sub must be registered before the season begins, and they are the only player that may sub for the team throughout the duration of the season.
                </ListItem>

                <ListItem>
                    Factions are “Use em and lose em” — once used, teams may not reuse factions unless they use up every faction.
                </ListItem>

                <ListItem>
                    Disconnecting Forfeits:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>If you drop the first time with more than 75% of your army left and/or less than 20 minutes have passed in the battle, teams restart.</ListItem>
                        <ListItem>Consecutive drops by a team (more than twice) is a forfeit.</ListItem>
                        <ListItem>If one player drops after the first 20 mins of the battle or after either teammate has less than 75% of their army left, teams must play on.</ListItem>
                        <ListItem>Suspected rage quit is a forfeit and a -1 point penalty. No restart. Excessive toxicity is a forfeit and could lead to removal from the league.</ListItem>
                        <ListItem>In all circumstances, factions and army comps must remain the same.</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    Rules for not arriving on matches on time:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>If both teams agreed on a time and there is proof of it, you are expected to show up.</ListItem>
                        <ListItem>Teams need to wait at least 15 min for their opponent to show up. They may wait up to 30 min. If a team arrives over 15 minutes late but less than 30, they will receive a -1 point penalty.</ListItem>
                        <ListItem>After the time limit, the attack of the team that showed up will be a forfeit victory. The second battle will be rescheduled.</ListItem>
                        <ListItem>In the rescheduled battle, the “winners” from the forfeit are by default the defenders.</ListItem>
                        <ListItem>If 24 hrs notice or more is given then no forfeit occurs. A penalty of -1 or more may be enforced against the team that needed to reschedule.</ListItem>
                    </UnorderedList>
                </ListItem>
                <ListItem>
                    No-show Forfeits:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>In the event of a forfeit the `winner` gets +1 pts and picks two factions that will count as used. The `winning team` will get the points from that selection. Max 3 pts/battle forfeited.</ListItem>
                        <ListItem>The `loser` will get a -2 points penalty and have two factions chosen per battle forfeited at random from the wheel to count as used. The wheel selection will be live streamed.</ListItem>
                        <ListItem>This applies to both attack and defense for a maximum of 4 factions/team. A total of maximum -4 pts for forfeiting and maximum +6 points for `winning`.</ListItem>
                    </UnorderedList>
                </ListItem>
                <ListItem>
                    Lag:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Game super laggy? If teams agree, then the game can be rehosted. Same comps/factions.</ListItem>
                        <ListItem>Teams may also reschedule and use their sub to try and circumvent lag issues if 1 game sec is more than 3sec IRL.</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    League Structure:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Teams must play at least one and no more than 2 matchups per week. Failure to do so results in a -1pt penalty.</ListItem>
                        <ListItem>Games can be played anytime that teams can arrange. Streaming arrangements can be made with the discord moderators and participating streamers.</ListItem>
                        <ListItem>Each Group plays a round robin so each team plays all the other teams in their group once.</ListItem>
                        <ListItem>The top team by points in each group advances to the playoff round.</ListItem>
                        <ListItem>Playoff position: Group winners will be the 1-5 seeds in order of points. Group runner-ups will be the 6-10 seeds. Then, two third place teams with the most points will be the 11 and 12 seeds.</ListItem>
                        <ListItem>In the event of a tie, Group play record determines the winner. If tied in points, win%, and head to head record, a land battle will be fought.</ListItem>
                        <ListItem>Land battles will be fought using rules from TWL.</ListItem>
                        <ListItem>Factions used in land battles WILL NOT count towards your faction track. However, you can only use factions that you have not already used before in siege battles.</ListItem>
                        <ListItem>A team with NO wins or negative points is ineligible for playoffs.</ListItem>
                    </UnorderedList>
                </ListItem>
                <ListItem>
                    Playoff structure:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Only factions which were unused during the Group stage are allowed in the playoffs.</ListItem>
                        <ListItem>Each team will play an attack and a defense.</ListItem>
                        <ListItem>Points determine the winning team. Tie will result in a land battle.</ListItem>
                        <ListItem>Points do not carry over from Group play to playoffs.</ListItem>
                        <ListItem>Points acquired during playoffs do not carry over from round to round.</ListItem>
                        <ListItem>Playoff maps will be assigned for each round and can be found on the schedule.</ListItem>
                        <ListItem>Playoff scheduling is final, unless 24hrs notice is given. Failure to attend games at scheduled times results in forfeit.</ListItem>
                    </UnorderedList>
                </ListItem>
                <ListItem>
                    Points and Penalties:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Win matches to obtain points: Defensive victory = +2 pts, Attacking victory = +3 pts.</ListItem>
                        <ListItem>Not playing at least 1 match-up (2 battles) per week = -1 pt.</ListItem>
                        <ListItem>Getting map selection wrong = -1 pt for both teams.</ListItem>
                        <ListItem>Using the same faction twice = -1 and an additional faction will be forfeited at random.</ListItem>
                        <ListItem>Late to scheduled matches (15 mins) = -1 pts.</ListItem>
                        <ListItem>Additional points are obtained through your team's faction selection (see faction tier list in discord) </ListItem>
                        <ListItem>Play all your group stage matches = +2 pts (teams with forfeit losses are ineligible for this)</ListItem>
                        <ListItem>One army bringing more than 7 of the same unit = -1 pt for each extra unit</ListItem>
                        <ListItem> Other rule infractions may be subject to point penalties as well at the discretion of the moderators.</ListItem>
                        <ListItem>Pull through infractions: first instance - penalty at mods discretion, second instance -1, third occurrence results in forfeit.</ListItem>
                        <ListItem>Conceding or leaving a battle before before it ends naturally (considered a rage quit) = -1 point. Recurring instances of this will result in being kicked from the league and blacklisted.</ListItem>
                    </UnorderedList>
                </ListItem>
                <ListItem>
                    Getting banned/blacklisted from future seasons:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Excessive toxicity.</ListItem>
                        <ListItem>Forfeiting more than 2 matchups in one season.</ListItem>
                        <ListItem>Signing up and failing to participate.</ListItem>
                        <ListItem>Leaving before the end of the match more than once.</ListItem>
                        <ListItem>Breaking any other rules.</ListItem>
                        <ListItem>In order to be reinstated in the league, the player or team must write a public apology in discord, to be reviewed by the high council.</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    Disqualification:
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Suspected foul play will result in disqualification.</ListItem>
                        <ListItem>Purposely "throwing" for any reason results in a 2 point penalty and possibly other repercussions.</ListItem>
                        <ListItem>Throwing to "help" another team = loss for both teams.</ListItem>
                        <ListItem>Making false accusations about rule infractions = 2 point penalty.</ListItem>
                        <ListItem>Rule breaking accusations must be substantiated with evidence: screen shots, timestamp, and location on the battlefield.</ListItem>
                        <ListItem>Purposely forfeiting to deny your opponent the chance to get more than 3 points from a battle is also grounds for disqualification.</ListItem>
                    </UnorderedList>
                </ListItem>

                <ListItem>
                    If a game is played with no moderator and isn`t streamed, replays for both battles and the screenshots of the results for all players must be submitted to one of the moderators otherwise the game did not happen as far as we’re concerned.
                </ListItem>

                <ListItem>
                    Players must be in one of the voice channels (VC`s) on the MarketableSkills discord server during all TWL matches.
                </ListItem>

                <ListItem>
                    Any and all disputes will be considered by the High Council. Verdicts are final.
                </ListItem>

            </OrderedList>
            <Center>
            <Text mt={5} mb={2} fontSize="lg" fontWeight="bold">Have a good fucking time!</Text>
            </Center>
        </Box>
    );
}

export default RulesInfo;