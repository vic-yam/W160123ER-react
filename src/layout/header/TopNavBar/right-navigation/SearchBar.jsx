import FormControl from '@mui/material/FormControl'
import { Box } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'


const SearchBar = () => {
    return (
        <Box display="inline-flex">
            <FormControl variant='standard'>
                <OutlinedInput
                    
                    placeholder='Search'
                    size='small'
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    )
}

export default SearchBar;