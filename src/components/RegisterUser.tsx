import React from 'react'
import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import useAppDispatch from '../hooks/useAppDispatch'
import { createNewUser } from '../redux/reducers/usersReducer'
import useAppSelector from '../hooks/useAppSelector'

const RegisterUser = () => {
    const users = useAppSelector(state => state.usersReducers)
    console.log(users)
    const dispatch = useAppDispatch()
    const addUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(createNewUser({
            id: 1,
            email: 'hamid@gmail.com',
            password: 'string',
            name: 'hamid',
            role: 'admin'
        }))
    }
    return (
        <form>
            <Box display='flex' flexDirection='column' maxWidth={400} alignItems="center" justifyContent='center' margin='auto' marginTop={5} padding={2} borderRadius={4} boxShadow={'5px 5px 10px #ccc'} sx={{
                ":hover": {
                    boxShadow: '10px 10px 20px #ccc',
                }
            }}>
                <Typography variant='h4' padding={3} textAlign='center'>Register</Typography>
                <InputLabel>Name:</InputLabel>
                <TextField type='text' margin='dense' variant='outlined' label='Name' required />
                <TextField type='email' margin='dense' variant='outlined' label='Email' required />
                <TextField type='password' margin='dense' variant='outlined' label='Password' required />
                <TextField type='password' margin='normal' variant='outlined' label='Confirm Passoword' required />
                <Box>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{ textAlign: 'center', paddingTop: '20px' }}>Choose Your Role:</FormLabel>
                        <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }} aria-label="role" name="admin">
                            <FormControlLabel value="admin" control={<Radio />} label="admin" />
                            <FormControlLabel value="customer" control={<Radio />} label="customer" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Button onClick={addUser} sx={{ margin: '20px', borderRadius: '5px' }} variant='contained' color='warning'>SIGNUP</Button>
            </Box>
        </form>
    )
}

export default RegisterUser

function useForm(): { register: any } {
    throw new Error('Function not implemented.')
}
