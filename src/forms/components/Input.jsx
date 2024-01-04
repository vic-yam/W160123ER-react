import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { bool, func, object, string } from 'prop-types'

const Input = ({
    variant, type, name, data, label, required, error, handleChange, ...rest
}) => {
    return (
        <Grid item sx={12} {...rest}>
            <TextField
                variant={variant}
                label={makeFirstLetterCapital(label)}
                type={type}
                id={name}
                name={name}
                value={data[name] ? data[name] : ''}
                required={required}
                helperText={error}
                error={Boolean(error)}
                onChange={handleChange}
                fullWidth
                autoComplete='off'
            />
        </Grid>
    )
}

Input.propTypes = {
    name: string.isRequired,
    required: bool.isRequired,
    type: string.isRequired,
    error: string,
    handleChange: func.isRequired,
    variant: string,
    data: object.isRequired
}

Input.defaultProps = {
    variant: 'outlined',
    type: 'text',
    required: true
}

export default Input