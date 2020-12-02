import { createSlice } from '@reduxjs/toolkit';

import { defaultDrawingColor } from '#constants';

const boardSlice = createSlice({
  name         : 'board',
  initialState : {
    joined    : false,
    owner     : undefined,
    boardName : undefined,
    users     : {
      me     : undefined,
      others : [],
    },
    tools : {
      selected : undefined,
      colors   : {
        pencil      : defaultDrawingColor,
        pen         : defaultDrawingColor,
        highlighter : defaultDrawingColor,
        text        : defaultDrawingColor,
      },
    },
  },
  reducers : {
    setCreated : (state, action) => (
      action.payload
        ? {
          ...state,
          joined    : true,
          owner     : true,
          boardName : action.payload.boardName,
          users     : {
            me     : action.payload.userName,
            others : [],
          },
        }
        : state
    ),
    setJoined : (state, action) => (
      action.payload
        ? {
          ...state,
          joined    : true,
          owner     : false,
          boardName : action.payload.boardName,
          users     : {
            me     : action.payload.userName,
            others : action.payload.users,
          },
        }
        : state
    ),
    setUnjoined : (state) => ({
      ...state,
      joined    : false,
      owner     : undefined,
      boardName : undefined,
      users     : {
        me     : undefined,
        others : [],
      },
    }),
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
            others : state.users.others.map((user) => ({
              ...user,
              name : user.id === action.payload.id ? action.payload.name : user.name,
            })),
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
    setSelectedTool : (state, action) => (
      action.payload
        ? {
          ...state,
          tools : {
            ...state.tools,
            selected : action.payload,
          },
        } : state
    ),
    setToolColor : (state, action) => (
      action.payload
        ? {
          ...state,
          tools : {
            ...state.tools,
            colors : {
              ...state.tools.colors,
              [action.payload.tool] : action.payload.color,
            },
          },
        } : state
    ),
  },
});

export const {
  setCreated,
  setJoined,
  setUnjoined,
  setBoardName,
  setMyUserName,
  setUserName,
  setUsers,
  addUser,
  removeUser,
  setSelectedTool,
  setToolColor,
} = boardSlice.actions;

export default boardSlice;
