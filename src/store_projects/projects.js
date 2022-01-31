import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded: (projects, action) => {
            projects.push({
                id: action.payload.id,
                name: action.payload.name,
                inHand: false
            })
        },

        projectRemoved: (projects, action) => {
            //projects.filter((pro) => pro.id == action.payload.id)
            const index = projects.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                projects.splice(index, 1);
            }
        },

        projectInHand: (projects, action) => {
            const index = projects.findIndex(p => p.id === action.payload.id)
            projects[index].inHand = true;
        }
    }
})

export const getInHandProjects = state =>
    state.entities.projects.filter(p => p.inHand)

export const { projectAdded, projectInHand, projectRemoved } = slice.actions;
export default slice.reducer; 