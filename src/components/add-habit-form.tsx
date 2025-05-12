import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../store/habit-slice';
import type { AppDispatch } from '../store/store';

const AddHabitForm: React.FC = () => {
    const [name, SetName] = useState<string>("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily"); //by default it will be daily
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            dispatch(addHabit({name, frequency}));
            SetName("")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                    label="Habit Name"
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                    placeholder='Enter habit name'
                    fullWidth 
                />

                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select value={frequency} onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}>
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' color='primary' variant='contained'> Add Habit </Button>
            </Box>
        </form>
  )
}

export default AddHabitForm
