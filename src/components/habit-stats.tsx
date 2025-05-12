import { LinearProgress, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHabits, type Habit } from '../store/habit-slice';
import type { AppDispatch, RootState } from '../store/store';

const HabitStats:React.FC = () => {
    const {habits, isLoading, error} = useSelector((state:RootState) => state.habits)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(fetchHabits());
    }, [dispatch])

    if (isLoading) {
        return <LinearProgress/>
    }

    if (error) {
        return <Typography color='error'>{error}</Typography>
    }

    const getTotalHabits = habits.length;

    const getCompletedToday = () => {
        const today = new Date().toISOString().split("T")[0];
        return habits.filter((habit:any) => habit.completedDates.includes(today)).length
    }



    const getLongestStreak = () => {
            const getStreak = (habits:Habit) => {
        let streak = 0
        const currentDate = new Date();

        while (true) {
            const dateString = currentDate.toISOString().split("T")[0];
            if (habits.completedDates.includes(dateString)) {
                streak++;
                currentDate.setDate(currentDate.getDate()-1)
            } else {
                break;
            }
        }
        return streak;
    };
        return Math.max(...habits.map(getStreak), 0)
    }
    
  return (
    <Paper elevation={2} sx={{p:2, mt:4}}>
        <Typography variant='h6' gutterBottom>
            Habits Statitics
        </Typography>
        <Typography variant='body1'>Total Habits:{habits.length}</Typography>
        <Typography variant='body1'>Completed Today:{getCompletedToday()}</Typography>
        <Typography variant='body1'>Lognest Streak: {getLongestStreak()}</Typography>
    </Paper>
  )
}

export default HabitStats
