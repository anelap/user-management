import { Box, Button, Paper, TextField, Toolbar } from "@mui/material";

import { Link } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";

const UsersToolbar = () => {
  const { searchQuery, setSearchQuery } = useSearchContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div>
      <Paper style={{ backgroundColor: "#d7d7d7" }}>
        <Toolbar>
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}>
            <TextField
              placeholder="Search users"
              size="small"
              sx={{ backgroundColor: "white", borderRadius: 1, width: "300px" }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Box>
          <Button
            variant="text"
            sx={{ marginLeft: "auto" }}
            to="/add"
            component={Link}>
            Create User
          </Button>
        </Toolbar>
      </Paper>
    </div>
  );
};

export default UsersToolbar;
