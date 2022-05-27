import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
    Button,
    List,
    ListItem,
    TextField,
    Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { Store } from 'utils/Store'; 
import { useRouter } from 'next/router';
import jsCookie from 'js-cookie';
import { getError } from 'utils/error'; 

const LoginScreen = () => {

    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const router = useRouter();
    const { redirect } = router.query;
    useEffect(() => {
      if (userInfo) {
        router.push(redirect || '/');
      }
    }, [router, userInfo, redirect]);
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();
  
    const { enqueueSnackbar } = useSnackbar();
    const submitHandler = async ({ email, password }) => {
      try {
        const { data } = await axios.post('/api/users/login', {
          email,
          password,
        });
        dispatch({ type: 'USER_LOGIN', payload: data });
        jsCookie.set('userInfo', JSON.stringify(data));
        router.push(redirect || '/');
      } catch (err) {
        enqueueSnackbar(getError(err), { variant: 'error' });
      }
    };

  return (
    <div className='mt-20'>

    <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
        <h1 className='mb-4 text-2xl'>Login</h1>

        
        <List>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  inputProps={{ type: 'email' }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === 'pattern'
                        ? 'Email is not valid'
                        : 'Email is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  label="Password"
                  inputProps={{ type: 'password' }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === 'minLength'
                        ? 'Password length is more than 5'
                        : 'Password is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
        <div className='mb-4'>
            No tenés cuenta? &nbsp;
            <Link href="/register">Registrarse</Link>
        </div>

        </List>


    </form>
    </div>
  )
}

export default LoginScreen