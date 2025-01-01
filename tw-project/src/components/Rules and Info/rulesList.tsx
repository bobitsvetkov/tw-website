import {
    Text, ListItem, UnorderedList,
} from "@chakra-ui/react";
import {
    FaClock, FaUserSlash,
    FaTwitch, FaMapMarkedAlt, FaGavel, FaUsers, FaBrain,
    FaFlagCheckered, FaExclamationTriangle, FaHeartBroken,
    FaBullhorn, FaRadiation, FaAmbulance, FaBookOpen,
    FaUsersCog, FaListUl, FaDollarSign, FaSitemap,
    FaDownload, FaExclamationCircle, FaScroll
} from "react-icons/fa";

export const rules = [
    {
        title: "Basic Rules",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>Settlement size: Variable</ListItem>
                <ListItem>Funds: Large</ListItem>
                <ListItem>Season: Spring</ListItem>
                <ListItem>Time of Day: Day</ListItem>
                <ListItem>Weather: Dry</ListItem>
                <ListItem>Difficulty: Normal</ListItem>
                <ListItem>Time Limit: 60 Minutes</ListItem>
                <ListItem>Unit Size: Ultra</ListItem>
            </UnorderedList>
        ),
        icon: FaBookOpen,
    },
    {
        title: "Objective",
        content: (
            <Text>
                Acquire points to win. Team success is based on points collected by
                winning matches, faction selection, and participation. Teams can also
                lose points.
            </Text>
        ),
        icon: FaFlagCheckered,
    },
    {
        title: "Max Unit Types",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>Attackers: 1 Giant Ballista and 1 Scorpion</ListItem>
                <ListItem>Defenders: 1 Scorpion</ListItem>
                <ListItem>2 Pikes per Player</ListItem>
                <ListItem>
                    4 Missile Units (Slingers, Archers) + 1 “Javie” Unit (Peltasts,
                    Javelinmen, Javie Cav, Horse Archers)
                </ListItem>
                <ListItem>8 of the same unit per Player</ListItem>
                <ListItem>2 Elephants or Chariots per Team</ListItem>
                <ListItem>4 Camel Cataphracts per Team  (Royal Camel Archers, Camel Cataphracts (Parthia & Saba) and Ma`rib Camels)</ListItem>
            </UnorderedList>
        ),
        icon: FaScroll,
    },
    {
        title: "No Pike Stacking",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    Pike units cannot be arranged inside another unit or within the
                    length of the deployed pike.
                </ListItem>
                <ListItem>
                    Any observed pike stacking must be remedied immediately. Failure to
                    do so results in a loss or penalty.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaBullhorn,
    },
    {
        title: "Pull Through",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    Units pulling or pushing through other units is not permitted.
                </ListItem>
                <ListItem>
                    Exceptions: Elephants/Chariots can pull through units not in
                    Shield Wall, Hoplite Wall, Shield Screen, or Square formations.
                </ListItem>
                <ListItem>
                    Cavalry can pull through archers, pleb/slave units, and loose
                    formation units.
                </ListItem>
                <ListItem>
                    Cavalry can't pull through other Cavalry units.
                </ListItem>
                <ListItem>
                    Infantry may only pull through routed units (not wavering).
                </ListItem>
                <ListItem>
                    Penalties vary from -1 to a forfeit. The exact penalty is up to the mods.
                </ListItem>
                <ListItem>
                    Pulling through intentionally to win despite the penalties is a forfeit.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaAmbulance,
    },
    {
        title: "No Camping the VP",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    Victory point camping means placing most units at choke points
                    leading to the final capture point on the map.
                </ListItem>
                <ListItem>
                    Finale choke points are map specific, clarification can be sought before games.
                    There will be videos made showing the final choke points for each map.
                </ListItem>
                <ListItem>
                    No more than 5 units can be inside the final choke points before the
                    VP.
                </ListItem>
                <ListItem>
                    It is acceptable to briefly funnel troops through the VP to fight at the front.
                </ListItem>
                <ListItem>Penalties range from a point deduction to a forfeit,
                    depending on how bad it is and how the team responds to being told to get out of the VP.</ListItem>
                <ListItem>
                    VP camping rules do not apply to small-size maps.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaHeartBroken,
    },
    {
        title: "No Deployables",
        content: (
            <Text>
                If deployables are found on the battlefield, it results in an automatic
                disqualification.
            </Text>
        ),
        icon: FaExclamationCircle,
    },
    {
        title: "Other Exploits",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>No siege towers, tortoises, or battering rams inside settlements.</ListItem>
                <ListItem>No Berserk Elephant exploit.</ListItem>
                <ListItem>No tortoise/wall exploit.</ListItem>
                <ListItem>No infinite charge bonus exploit.</ListItem>
                <ListItem>No glitching tortoises or siege towers into barbarian settlements.</ListItem>
                <ListItem>No Galleys.</ListItem>
                <ListItem>
                    Contact a moderator if unsure whether an action is an exploit.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaExclamationTriangle,
    },
    {
        title: "Artillery",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>Shotgunning artillery (close-range firing) is allowed.</ListItem>
                <ListItem>Only Scorpions are allowed inside settlements.</ListItem>
                <ListItem>No wall artillery.</ListItem>
            </UnorderedList>
        ),
        icon: FaRadiation,
    },
    {
        title: "Grand Campaign & DLC Rules",
        content: (
            <Text>
                No glitching units. It is recommended all players own DLCs providing
                access to the factions that are used in the tournament.
                It is not mandatory to have all DLCs,
                but no accommodations will be made for teams that have players who do not own all of the factions.
                If a team refuses to buy a DLC when they run out of factions, they will forfeit their remaining games.
            </Text>
        ),
        icon: FaDownload,
    },
    {
        title: "Faction Picking Rules",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    The same faction CANNOT be used by both teams in the same battle.
                    For example, the attackers and defenders cannot both pick Carthage.
                </ListItem>
                <ListItem>
                    Factions are “Use em and lose em” — once used, teams may not reuse factions unless they use up every faction.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaListUl,
    },
    {
        title: "Settlements and order",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    Teams will flip a coin. Winner of the toss picks to attack or defend first.
                    Coin toss call and attack or defend first is to be done in the twl-faction-picks channel
                    on the discord server.
                </ListItem>
                <ListItem>
                    Maps are assigned for each match. Check the schedule for the map to use for each matchup.
                </ListItem>
                <ListItem>
                    If the wrong settlement is used, both teams will get a -1 penalty.
                </ListItem>
                <ListItem>
                    The attacking team picks the first faction and last.
                    Defending team picks second and third.
                    It doesn`t matter which teammate picks which faction
                    (i.e. teammates can switch who`s playing what faction before the battle begins).
                    Faction picks must be done in the twl-faction-picks channel on the discord server.
                </ListItem>
                <ListItem>
                    You must be loaded into the first battle no more than 10 minutes past the agreed start time for the match.
                    Team(s) that are late will receive a -1 penalty.
                </ListItem>
                <ListItem>
                    Both attack and defense are played on the same map.
                </ListItem>
                <ListItem>
                    Moving entire army once the 60 sec countdown begins is considered a forfeit (unsportsmanlike).
                </ListItem>
                <ListItem>
                    Moving units within the last 10 sec of the count down timer will be reviewed
                    and may result in a point deduction.
                    Minor tweaking does not count towards this rule.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaMapMarkedAlt,
    },
    {
        title: "Team Composition Rule",
        content: (
            <Text>
                Teams consist of three “main” players plus one sub in case one of the “main” players
                isn`t available. This sub must be registered before the season begins,
                and they are the only player that may sub for the team throughout the duration of the season.
            </Text>
        ),
        icon: FaUsersCog,
    },
    {
        title: "Disconnecting Forfeits",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    Dropping with over 75% of your army remaining or within 20 minutes of
                    the battle restarts the match. This rule applies for first drop only.
                </ListItem>
                <ListItem>
                    More than two consecutive drops result in a forfeit.
                </ListItem>
                <ListItem>
                    Dropping after 20 minutes or when below 75% army forces the match must
                    continue.
                </ListItem>
                <ListItem>
                    Suspected rage quits result in a forfeit and penalty of -1 point and no restart.
                </ListItem>
                <ListItem>
                    Excessive toxicity is a forfeit and could lead to removal from the league.
                </ListItem>
                <ListItem>
                    In all circumstances, factions and army comps must remain the same.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaScroll,
    },
    {
        title: "Rules for not arriving on matches on time",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    If both teams agreed on a time and there is proof of it, you are expected to show up.
                </ListItem>
                <ListItem>
                    Teams need to wait at least 10 minutes for their opponent to show up.
                    They may wait up to 30 min. If a team arrives over 10 minutes late but less than 30,
                    they will receive a -1 point penalty
                    (unless both teams and mod council agree players can wait for up to 30 minutes
                    without penalty for the team that is being late).
                </ListItem>
                <ListItem>
                    After the time limit, the attack of the team that showed up will be a forfeit victory.
                    The second battle will be rescheduled.
                </ListItem>
                <ListItem>
                    In the rescheduled battle, the “winners” from the forfeit are by default the defenders.
                </ListItem>
                <ListItem>
                    If 24 hrs notice or more is given then no forfeit occurs.
                    A penalty of -1 or more may be enforced against the team that needed to reschedule.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaClock,
    },
    {
        title: "No-Show Forfeits",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    In the event of a forfeit the `winner` gets +1 pts and picks two factions that
                    will count as used. The `winning team` will get the points from that selection.
                    Max 3 pts/battle forfeited.
                </ListItem>
                <ListItem>
                    Losers get a -2 point penalty and have two factions randomly chosen
                    as "used."
                </ListItem>
                <ListItem>
                    This applies to both attack and defense for a maximum of 4 factions/team.
                    A total of maximum -4 pts for forfeiting and maximum +6 points for `winning`.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaClock,
    },
    {
        title: "Lag",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    Game super laggy? If teams agree, then the game can be rehosted. Same comps/factions.
                </ListItem>
                <ListItem>
                    Teams may also reschedule and use their sub to try and circumvent lag issues if
                    1 game sec is more than 3sec IRL.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaBrain,
    },
    {
        title: "League Structure",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    Teams must play at least one and no more than 2 matchups per week.
                    Failure to do so results in a -1pt penalty.
                </ListItem>
                <ListItem>
                    Games can be played anytime that teams can arrange.
                    Streaming arrangements can be made with the discord moderators and participating streamers.
                </ListItem>
                <ListItem>
                    Pick phase goes: Att-Def-Def-Att-Def-Att.
                    Attackers start with +3 and defenders with +2.
                    The factions picked must add up to 0 or greater
                </ListItem>
                <ListItem>
                    Games can be played anytime that teams can arrange.
                    Streaming arrangements can be made with the discord moderators and participating streamers.
                </ListItem>
                <ListItem>
                    A team with NO wins or negative points is ineligible for playoffs.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaSitemap,
    },
    {
        title: "Points",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    Win matches to obtain points: Defensive victory = +2 pts, Attacking victory = +3 pts.
                </ListItem>
                <ListItem>
                    Additional points are obtained through your team's faction selection (see faction tier list in discord)
                </ListItem>
                <ListItem>
                    Play all your group stage matches = +2 pts (teams with forfeit losses are ineligible for this)
                </ListItem>
                <ListItem>
                    One army bringing more than 8 of the same unit = -1 pt for each extra unit
                </ListItem>
                <ListItem>
                    If you get a capture point and WIN the match, you will get a faction back at random (Wheel spin).
                </ListItem>
            </UnorderedList>
        ),
        icon: FaDollarSign,
    },
    {
        title: "Penalties",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    Not playing at least 1 match-up (2 battles) per week = -1 pt.
                </ListItem>
                <ListItem>
                    Getting map selection wrong = -1 pt for both teams.
                </ListItem>
                <ListItem>
                    Using the same faction twice = -1 and an additional faction will be forfeited at random.
                </ListItem>
                <ListItem>
                    Late to scheduled matches (10 mins) = -1 pts.
                </ListItem>
                <ListItem>
                    Pull through infractions:
                    <UnorderedList spacing={2} pl={4} styleType="disc">
                        <ListItem>
                            Please refer to the "Pull Through" rule for infractions related to pulling through units.
                        </ListItem>
                    </UnorderedList>
                </ListItem>
                <ListItem>
                    Conceding or leaving a battle before it ends naturally (considered a rage quit) = -1 point. Recurring instances of this will result in being kicked from the league and blacklisted.
                </ListItem>
                <ListItem>
                    Attackers are not permitted to run units away at the end of the game in order to influence K/D or to prolong the game unnecessarily, doing so may result in a -1 penalty.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaDollarSign,
    },
    {
        title: "Getting banned/blacklisted from future seasons:",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    Excessive toxicity.
                </ListItem>
                <ListItem>
                    Forfeiting more than 2 matchups in one season.
                </ListItem>
                <ListItem>
                    Signing up and failing to participate.
                </ListItem>
                <ListItem>
                    Leaving before the end of the match more than once.
                </ListItem>
                <ListItem>
                    Breaking any other rules.
                </ListItem>
                <ListItem>
                    In order to be reinstated in the league,
                    the player or team must write a public apology in discord,
                    to be reviewed by the high council.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaUserSlash,
    },
    {
        title: "Unsportsmanlike Conduct and Disqualification",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>Suspected foul play will result in disqualification.
                    Any conduct that is considered unsportsmanlike conduct is also grounds for disqualification</ListItem>
                <ListItem>Purposely "throwing" for any reason results in a 2 point penalty.</ListItem>
                <ListItem>Examples of unsportsmanlike conduct include:
                    <UnorderedList>
                        <ListItem>Conceding defeat / leaving the battle early</ListItem>
                        <ListItem>Moving entire army once the 60 sec countdown begins</ListItem>
                        <ListItem>Prolonging drama</ListItem>
                        <ListItem>Intentional Pushthrough</ListItem>
                        <ListItem>Leaking strat/factions/army comps</ListItem>
                    </UnorderedList>
                </ListItem>
                <ListItem>Spying on rival teams or leaking strategies will result in disqualification.</ListItem>
                <ListItem>Making false accusations about rule infractions = 2 point penalty.</ListItem>
            </UnorderedList>
        ),
        icon: FaGavel,
    },
    {
        title: "Replays:",
        content: (
            <Text>
                If a game is played with no moderator and isn`t streamed,
                replays for both battles and the screenshots of the results
                for all players must be submitted to one of the moderators otherwise
                the game did not happen as far as we`re concerned.
            </Text>
        ),
        icon: FaTwitch,
    },
    {
        title: "Voice Chat:",
        content: (
            <Text>
                Players must be in one of the voice channels (VC`s) on the MarketableSkills discord server during all TWL matches.
            </Text>
        ),
        icon: FaUsers,
    },
    {
        title: "Tie Breaker Rules:",
        content: (
            <UnorderedList spacing={2} pl={4} styleType="disc">
                <ListItem>
                    There's gonna be a pool of 5 maps
                </ListItem>
                <ListItem>
                    If one team defended with a total of +1 points and the other team defended with
                    a total of 0 points, they both win their defense, the team that went +1 wins
                    the tiebreaker
                </ListItem>
                <ListItem>
                    The team with the most chevrons on the first 2 games
                    will get to choose whether they want to pick the map or choose Attack/Defense.
                </ListItem>
                <ListItem>
                    If they choose to pick the map, for instance, then the other team chooses Att/Def and vice versa.
                </ListItem>
                <ListItem>
                    The factions picked also must add up to 0 or greater.
                    Factions used on the tie breaker will still count as used for your team,
                    so be careful.
                </ListItem>
            </UnorderedList>
        ),
        icon: FaBrain,
    },
];