import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Heading,
  Text,
  Spinner,
  Input,
  Grid,
  Flex,
  Button,
} from "@chakra-ui/react";
import { filterMatches, addFavorite, removeFavorite } from "../redux/actions";

const FootballMatchList = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, footballMatches, filteredMatches } = useSelector(
    (state) => state.matches
  );
  const favorites = useSelector((state) => state.favorites);

  const handleFilter = (searchTerm) => {
    const filtered = footballMatches.filter((match) => {
      return (
        match.team1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.team2.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.round?.toLowerCase().includes(searchTerm.toLowerCase()) || // Check if venue exists
        match.competition?.toLowerCase().includes(searchTerm.toLowerCase()) || // Check if venue exists
        match.year?.toLowerCase().includes(searchTerm.toLowerCase()) // Check if date exists
      );
    });
    dispatch(filterMatches(filtered));
  };

  const handleFavorite = (match) => {
    if (favorites.includes(match.team1)) {
      dispatch(removeFavorite(match.team1));
    } else {
      dispatch(addFavorite(match));
    }
  };

  const renderMatches = () => {
    const matches =
      filteredMatches.length > 0 ? filteredMatches : footballMatches;
    console.log("Filtered Matches:", filteredMatches);
    return matches.map((match, i) => {
      return (
        <Box
          key={i + match.team1 + match.team2}
          textAlign={"center"}
          style={{
            width: "90%",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Heading as="h3" size="md">
            {match.competition}
          </Heading>
          <Heading as="h4" size="md">
            {match.round} - {match.year}
          </Heading>
          <Box>
            <Flex justifyContent="space-evenly">
              <Text>{match.team1}</Text>
              <Text>{match.team2}</Text>
            </Flex>
            <Flex justifyContent="space-evenly">
              <Text>{match.team1goals}</Text>
              <Text>{match.team2goals}</Text>
            </Flex>
          </Box>
          <Button
            onClick={() => handleFavorite(match)}
            style={{ width: "50%" }}
            borderRadius={10}
            padding={5}
            backgroundColor={"#4CAF50"}
            cursor={"pointer"}
          >
            Add to Favorites
          </Button>
        </Box>
      );
    });
  };

  return (
    <Box w={"100%"} p={4}>
      <Input
        onChange={(e) => handleFilter(e.target.value)}
        placeholder="Search Matches"
      />
      {isLoading && <Spinner />}
      {isError && <Text color="red.500">Error fetching matches</Text>}
      {footballMatches.length > 0 && (
        <Grid templateColumns="repeat(4, 1fr)" gap={10} w={"100%"} mt={4}>
          {renderMatches()}
        </Grid>
      )}
      {!footballMatches.length && !isLoading && <Text>No matches found.</Text>}
    </Box>
  );
};

export default FootballMatchList;
