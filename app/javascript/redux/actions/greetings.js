import { createAsyncThunk } from '@reduxjs/toolkit';

// set action constants
export const FETCH_GREETING = 'fetch_greeting';

// set api url
const url = 'http://localhost:3000/api/message';

export const fetchGreeting = createAsyncThunk(FETCH_GREETING, async () => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
});