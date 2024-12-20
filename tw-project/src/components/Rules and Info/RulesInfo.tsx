import { Box, Center, Heading, Text, ListItem, OrderedList, UnorderedList, Divider, List } from "@chakra-ui/react";
import { useEffect } from 'react';
const RulesInfo: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box p={6}>
            <Center mb={6}>
                <Heading>TOTAL WAR LEAGUE: SIEGE RULES</Heading>
            </Center>

            <Text fontSize="xl" mb={4} fontWeight="semibold">Basic rules:</Text>
            <UnorderedList mb={6} spacing={2} pl={5}>
                <ListItem>Settlement size: Variable</ListItem>
                <ListItem>Funds: Large</ListItem>
                <ListItem>Season: Spring</ListItem>
                <ListItem>Time of Day: Day</ListItem>
                <ListItem>Weather: Dry</ListItem>
                <ListItem>Difficulty: Normal</ListItem>
                <ListItem>Time Limit: 60 Minutes</ListItem>
                <ListItem>Unit Size: Ultra</ListItem>
            </UnorderedList>
            <Divider mb={5} />
            <OrderedList spacing={6} pl={5}>
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Objective:</Text>
                    <Text mt={1}>
                        Acquire points to win, team success is based on points. Points are collected by winning matches, by faction selection and by participation. Teams can also lose points.
                    </Text>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Max unit types:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Attackers may bring 1 Giant ballista and 1 scorpion, defenders may bring 1 scorpion</ListItem>
                        <ListItem>2 pikes per player</ListItem>
                        <ListItem>4 missile units (slinger, archers) + 1 “javie” unit (peltast, javelinmen, agrianian, javie cav or horse archer) per player</ListItem>
                        <ListItem>8 of the same unit per player (i.e. can`t bring 9 thorax swordsmen)</ListItem>
                        <ListItem>2 eles/chariots per team</ListItem>
                        <ListItem>4 camel cataphracts per team (Royal Camel Archers, Camel Cataphracts (Parthia & Saba) and Ma`rib Camels)</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />

                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">No pike stacking:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Pike units may not be arranged inside another unit or within the length of the deployed pike.</ListItem>
                        <ListItem>If, intentional or unintentional, pike stacking is observed during league play it must be remedied immediately. Failure to do so will result in a loss or penalty.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Pull Through:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Units pulling or pushing through other units is not permitted.</ListItem>
                        <ListItem>However, there are some exceptions: elephants/chariots can pull through any unit that isn't already in Shieldwall, hoplite wall, shield screen, and square formations.</ListItem>
                        <ListItem>Cav can pull through archers, pleb/slave units, and loose formation units.</ListItem>
                        <ListItem>Cav may also pull through unbraced units if the charge knocks down more than 50% of the men in the unit.</ListItem>
                        <ListItem>Infantry may not pull through archers or any other unit with the exception of routed units. Not wavering, Routed.</ListItem>
                        <ListItem>Cav cannot pull through other cav.</ListItem>
                        <ListItem>Pulling through intentionally to win despite the penalties is a forfeit.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">No camping the VP:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Victory point camping is placing all of/a majority of one's units at the choke points leading to the final capture point on the map.</ListItem>
                        <ListItem>Finale choke points are map specific, clarification can be sought before games. There will be videos made showing the final choke points for each map.</ListItem>
                        <ListItem>No more than 5 units may be inside the last set of choke points before the VP.</ListItem>
                        <ListItem>It is acceptable to briefly funnel troops through the VP to fight at the front.</ListItem>
                        <ListItem>Penalties for VP camping vary from 1 to a forfeit depending on how bad it is and how the team responds to being told to get out of the VP.</ListItem>
                        <ListItem>VP Camping rules do not apply to small size maps.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">No Deployables: If any are on the battlefield, it is a disqualification.</Text>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Other Exploits:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>No siege towers, tortoises, or battering rams inside the settlement.</ListItem>
                        <ListItem>No Beserk Elephant exploit.</ListItem>
                        <ListItem>No tort/wall exploit.</ListItem>
                        <ListItem>No infinite charge bonus exploit.</ListItem>
                        <ListItem>No glitching torts or greek city siege towers into barb settlements.</ListItem>
                        <ListItem>No Galleys.</ListItem>
                        <ListItem>No other exploits. Ask a moderator if you are unsure if something is an exploit.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />

                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Artillery:</Text>
                    <UnorderedList mt={1} pl={5}>
                        {/* <ListItem>One artillery piece per player on attack (only one ballista/onager per team) Only one artillery per team is allowed on defense.</ListItem> */}
                        <ListItem>Attackers may bring 1 Giant ballista and 1 scorpion, defenders may bring 1 scorpion</ListItem>
                        <ListItem>Shotgunning (shooting enemies at close range) artillery is allowed.</ListItem>
                        <ListItem>ONLY scorpions are allowed inside the settlement.</ListItem>
                        <ListItem>NO wall artillery.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Grand Campaign  and Rise of the Republic factions ONLY:</Text>
                    <Text mt={1}>
                        NO glitching in units. It is highly recommended that all players on each team owns all DLC`s that give access to Grand Campaign factions. It is not mandatory to have them all, but no accommodations will be made for teams that have players who do not own all the GC factions. If a team refuses to buy a DLC when they must, they will forfeit their remaining games.
                    </Text>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">The same faction CANNOT be used by both teams in the same battle. For example, the attackers and defenders cannot both pick Carthage.</Text>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Settlements and order:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Teams will flip a coin. Winner of the toss picks to attack or defend first. Coin toss call and attack or defend first is to be done in the twl-faction-picks channel on the discord server.</ListItem>
                        <ListItem>Maps are assigned for each match. Check the schedule for the map to use for each matchup.</ListItem>
                        <ListItem>If the wrong settlement is used, both teams will get a -1 penalty.</ListItem>
                        <ListItem>The attacking team picks the first faction and last. Defending team picks second and third.
                            It doesn`t matter which teammate picks which faction (i.e. teammates can switch who`s playing what faction before the battle begins).
                            Faction picks must be done in the twl-faction-picks channel on the discord server.</ListItem>
                        <ListItem>You must be loaded into the first battle no more than 10 minutes past the agreed start time for the match. Team(s) that are late will receive a -1 penalty.</ListItem>
                        <ListItem>Both attack and defense are played on the same map.</ListItem>
                        <ListItem>Moving entire army once the 60 sec countdown begins is considered a forfeit (unsportsmanlike). </ListItem>
                        <ListItem>Moving units within the last 10 sec of the count down timer will be reviewed and may result in a point deduction. Minor tweaking does not count towards this rule.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Teams consist of three “main” players plus one sub in case one of the “main” players isn`t available. This sub must be registered before the season begins, and they are the only player that may sub for the team throughout the duration of the season.</Text>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Factions are “Use em and lose em” — once used, teams may not reuse factions unless they use up every faction.</Text>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Disconnecting Forfeits:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>If you drop the first time with more than 75% of your army left and/or less than 20 minutes have passed in the battle, teams restart.</ListItem>
                        <ListItem>Consecutive drops by a team (more than twice) is a forfeit.</ListItem>
                        <ListItem>If one player drops after the first 20 mins of the battle or after either teammate has less than 75% of their army left, teams must play on.</ListItem>
                        <ListItem>Suspected rage quit is a forfeit and a -1 point penalty. No restart. Excessive toxicity is a forfeit and could lead to removal from the league.</ListItem>
                        <ListItem>In all circumstances, factions and army comps must remain the same.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Rules for not arriving on matches on time:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>If both teams agreed on a time and there is proof of it, you are expected to show up.</ListItem>
                        <ListItem>Teams need to wait at least 10 minutes for their opponent to show up. They may wait up to 30 min. If a team arrives over 10 minutes late but less than 30, they will receive a -1 point penalty
                            (unless both teams and mod council agree players can wait for up to 30 minutes without penalty for the team that is being late).</ListItem>
                        <ListItem>After the time limit, the attack of the team that showed up will be a forfeit victory. The second battle will be rescheduled.</ListItem>
                        <ListItem>In the rescheduled battle, the “winners” from the forfeit are by default the defenders.</ListItem>
                        <ListItem>If 24 hrs notice or more is given then no forfeit occurs. A penalty of -1 or more may be enforced against the team that needed to reschedule.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">No-show Forfeits:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>In the event of a forfeit the `winner` gets +1 pts and picks two factions that will count as used. The `winning team` will get the points from that selection. Max 3 pts/battle forfeited.</ListItem>
                        <ListItem>The `loser` will get a -2 points penalty and have two factions chosen per battle forfeited at random from the wheel to count as used. The wheel selection will be live streamed.</ListItem>
                        <ListItem>This applies to both attack and defense for a maximum of 4 factions/team. A total of maximum -4 pts for forfeiting and maximum +6 points for `winning`.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Lag:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Game super laggy? If teams agree, then the game can be rehosted. Same comps/factions.</ListItem>
                        <ListItem>Teams may also reschedule and use their sub to try and circumvent lag issues if 1 game sec is more than 3sec IRL.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">League Structure:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Teams must play at least one and no more than 2 matchups per week. Failure to do so results in a -1pt penalty.</ListItem>
                        <ListItem>Games can be played anytime that teams can arrange. Streaming arrangements can be made with the discord moderators and participating streamers.</ListItem>
                        {/* <ListItem>Each Group plays a round robin so each team plays all the other teams in their group once.</ListItem> */}
                        {/* <ListItem>The top team by points in each group advances to the playoff round.</ListItem> */}
                        <ListItem>Pick phase goes: Att-Def-Def-Att-Def-Att. Attackers start with +3 and defenders with +2. The factions picked must add up to 0 or greater</ListItem>
                        <ListItem>If you get a capture point and WIN the match, you will get a faction back at random (Wheel spin).</ListItem>
                        <ListItem>All positive factions on the tier list can be used twice, except torts factions (ROR Syracuse, Sparta and Epirus) which can only be used once. Factions with double use cannot be used in the same matchup, the factions still use them and lose them.</ListItem>
                        <ListItem>The tournament will be organized in a Double Elimination format. There will be no Group Stage.</ListItem>
                        <ListItem>In this format in the finals the team which is still on the Winners Bracket will be able to choose to attack or defend first </ListItem>
                        {/* <ListItem>Playoff position: Group winners will be the 1-8 seeds in order of points. Group runner-ups will be the 9-16 seeds.</ListItem> */}
                        <ListItem>
                            In the event of a tie (pts) between two (or more) teams, the tiebreakers will be as follows:
                            <List styleType="decimal" ml={4}>
                                <ListItem>There's gonna be a pool of 5 maps</ListItem>
                                <ListItem>If one team defended with a total of +1 points and the other team defended with a total of 0 points, they both win their defense, the team that went +1 wins the tiebreaker</ListItem>
                                <ListItem>The team with the most chevrons on the first 2 games will get to choose whether they want to pick the map or choose Attack/Defense.</ListItem>
                                <ListItem> If they choose to pick the map, for instance, then the other team chooses Att/Def and vice versa.</ListItem>
                                <ListItem>The factions picked also must add up to 0 or greater. Factions used on the tie breaker will still count as used for your team, so be careful.</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>A team with NO wins or negative points is ineligible for playoffs.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                {/* <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Playoff structure:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Only factions which were unused during the Group stage are allowed in the playoffs.</ListItem>
                        <ListItem>Each team will play an attack and a defense.</ListItem>
                        <ListItem>Points determine the winning team.Teams cannot go for a tie.
                        The team that loses the first battle must go for at least one more point than than the team that won the first battle got.
                        </ListItem>
                        <ListItem>Points do not carry over from Group play to playoffs.</ListItem>
                        <ListItem>Points acquired during playoffs do not carry over from round to round.</ListItem>
                        <ListItem>Playoff maps will be assigned for each round and can be found on the schedule.</ListItem>
                        <ListItem>Playoff scheduling is final, unless 24hrs notice is given. Failure to attend games at scheduled times results in forfeit.</ListItem>
                    </UnorderedList>
                </ListItem> */}
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Points and Penalties:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Win matches to obtain points: Defensive victory = +2 pts, Attacking victory = +3 pts.</ListItem>
                        <ListItem>Not playing at least 1 match-up (2 battles) per week = -1 pt.</ListItem>
                        <ListItem>Getting map selection wrong = -1 pt for both teams.</ListItem>
                        <ListItem>Using the same faction twice = -1 and an additional faction will be forfeited at random.</ListItem>
                        <ListItem>Late to scheduled matches (10 mins) = -1 pts.</ListItem>
                        <ListItem>Additional points are obtained through your team's faction selection (see faction tier list in discord) </ListItem>
                        <ListItem>Play all your group stage matches = +2 pts (teams with forfeit losses are ineligible for this)</ListItem>
                        <ListItem>One army bringing more than 8 of the same unit = -1 pt for each extra unit</ListItem>
                        <ListItem> Other rule infractions may be subject to point penalties as well at the discretion of the moderators.</ListItem>
                        <ListItem>Pull through infractions: <List styleType="disc" ml={4}>
                            <ListItem>clearly intentional PT obtained by click-spamming = forfeit and -1.</ListItem>
                            <ListItem>unclear whether intentional or not = penalty to mod discretion.</ListItem>
                            <ListItem>clearly accidental PT beneficial to the pushing-through team = -1.</ListItem>
                            <ListItem>clearly accidental PT that didn't benefit the pushing-through team = no penalty.</ListItem>
                            <ListItem>Multiple instance of Pull through infarction may result in additional penalties, forfeit or DQ.</ListItem>
                        </List>
                        </ListItem>
                        <ListItem>Conceding or leaving a battle before before it ends naturally (considered a rage quit) = -1 point. Recurring instances of this will result in being kicked from the league and blacklisted.</ListItem>
                        <ListItem> Attackers are not permitted to run units away at the end of the game in order to influence K/D or to prolong the game unnecessarily, doing so may result in a -1 penalty.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Getting banned/blacklisted from future seasons:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Excessive toxicity.</ListItem>
                        <ListItem>Forfeiting more than 2 matchups in one season.</ListItem>
                        <ListItem>Signing up and failing to participate.</ListItem>
                        <ListItem>Leaving before the end of the match more than once.</ListItem>
                        <ListItem>Breaking any other rules.</ListItem>
                        <ListItem>In order to be reinstated in the league, the player or team must write a public apology in discord, to be reviewed by the high council.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Disqualification:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Suspected foul play will result in disqualification.</ListItem>
                        <ListItem>Purposely "throwing" for any reason results in a 2 point penalty and possibly other repercussions.</ListItem>
                        <ListItem>Throwing to "help" another team = loss for both teams.</ListItem>
                        <ListItem>Making false accusations about rule infractions = 2 point penalty.</ListItem>
                        <ListItem>Rule breaking accusations must be substantiated with evidence: screen shots, timestamp, and location on the battlefield.</ListItem>
                        <ListItem>Purposely forfeiting to deny your opponent the chance to get more than 3 points from a battle is also grounds for disqualification.</ListItem>
                        <ListItem>Spying on rival teams by joining their passworded lobby will result in the offending player being disqualified from the league.</ListItem>
                        <ListItem>“Leaking” rival team strats and faction selections to other teams will result in the offending player being disqualified from the league.</ListItem>

                    </UnorderedList>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">UnsportsmanLike Conduct:</Text>
                    <UnorderedList mt={1} pl={5}>
                        <ListItem>Instances of unsportsmanlike conduct will be put to a Mod/Referee vote. Penalty
                            will range from warning to DQ, depending on the severity of the transgression.
                        </ListItem>
                        <ListItem>For the sake of clarity here are some examples of unsportsmanlike conduct:</ListItem>
                        <List styleType="decimal" ml={4}>
                        <ListItem>Conceding defeat / leaving the battle early</ListItem>
                        <ListItem>Moving entire army once the 60 sec countdown begins</ListItem>
                        <ListItem>Prolonging drama (such as continuing to push drama long after mod council has made a decision)</ListItem>
                        <ListItem>Intentional Pushthrough</ListItem>
                        <ListItem>Leaking strat/factions/army comps</ListItem>
                        </List>
                    </UnorderedList>
                </ListItem>
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">If a game is played with no moderator and isn`t streamed, replays for both battles and the screenshots of the results for all players must be submitted to one of the moderators otherwise the game did not happen as far as we`re concerned.</Text>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Players must be in one of the voice channels (VC`s) on the MarketableSkills discord server during all TWL matches.</Text>
                </ListItem>
                <Divider my={4} />
                <ListItem>
                    <Text fontSize="lg" fontWeight="semibold">Any and all disputes will be considered by the High Council. Verdicts are final.</Text>
                </ListItem>
                <Divider my={4} />
            </OrderedList>
            <Center>
            <Text mt={5} mb={2} fontSize="lg" fontWeight="bold">Have a good fucking time!</Text>
            </Center>
        </Box>
    );
}

export default RulesInfo;