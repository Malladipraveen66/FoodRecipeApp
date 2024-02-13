import React,{useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import ListItemIcon from '@mui/material/ListItemIcon';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // MUI user icon

const top100People = [
  { name: 'John Smith', color: '#2196F3' }, // Blue
  { name: 'Jane Doe', color: '#4CAF50' },   // Green
  { name: 'Alice Johnson', color: '#FFC107' },  // Yellow
  { name: 'Bob Miller', color: '#FF5722' },   // Orange
  // Add more people with names and colors as needed
];


const CenteredAutocomplete = styled(Autocomplete)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%', // Adjust the width as needed
});

const ColoredAvatar = styled('div')(({ color }) => ({
  backgroundColor: color,
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'inline-block',
  marginRight: '8px',
}));

function Tags() {
const [users,setUsers] = useState([...top100People]);
  // Check if top100People is defined before rendering
  if (!top100People) {
    return null;
  }

const removeUserFromInput = (userName) =>{
    const filteredUsers = users.filter((user) => user.name !== userName );
    return setUsers([filteredUsers]);
}

console.log({users})

  return (
    <Stack spacing={3}>
      <CenteredAutocomplete
        multiple
        id="tags-standard"
        options={users}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select Users"
            placeholder="Add new user"
          />
        )}
        renderOption={(props, option) => (
          <li {...props} style={{ display: 'flex', alignItems: 'center' }}>
            <ListItemIcon>
              <ColoredAvatar color={option.color} />
            </ListItemIcon>
            {option.name}
          </li>
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <div style={{display:'flex',alignItems:'center'}}>
            <li key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
              <ListItemIcon>
                <ColoredAvatar color={option.color} />
              </ListItemIcon>
              {option.name}
              <span onClick={() => removeUserFromInput(option.name)} >&times;</span>
            </li>
            </div>
          ))
        }
      />
    
    </Stack>
  );
}
export default Tags