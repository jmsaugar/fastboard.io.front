import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name         : 'board',
  initialState : {
    joined    : false,
    boardName : undefined,
    users     : {
      me     : undefined,
      others : [],
    },
  },
  reducers : {
    setJoined : (state, action) => (
      {
        ...state,
        joined : action.payload,
      }
    ),
    setBoardName : (state, action) => (
      action.payload
        ? {
          ...state,
          boardName : action.payload,
        }
        : state
    ),
    setMyUserName : (state, action) => (
      action.payload
        ? {
          ...state,
          users : {
            ...state.users,
            me : action.payload,
          },
        }
        : state
    ),
    setUserName : (state, action) => (
      action.payload
        ? {
          ...state,
          users : {
            ...state.users,
            others : state.users.map((user) => ({
              ...user,
              name : user.id === action.payload.id ? action.payload.name : user.name,
            })),
          },
        }
        : state
    ),
    setUsers : (state, action) => (
      action.payload
        ? {
          ...state,
          users : {
            ...state.users,
            others : action.payload,
          },
        }
        : state
    ),
    addUser : (state, action) => (
      action.payload
        ? {
          ...state,
          users : {
            ...state.users,
            others : [
              ...state.users.others,
              action.payload,
            ],
          },
        }
        : state
    ),
    removeUser : (state, action) => (
      action.payload
        ? {
          ...state,
          users : {
            ...state.users,
            others : state.users.others.filter(({ id }) => action.payload.id !== id),
          },
        }
        : state
    ),
  },
});

export const {
  setJoined,
  setBoardName,
  setMyUserName,
  setUserName,
  setUsers,
  addUser,
  removeUser,
} = boardSlice.actions;

export default boardSlice;
