import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getTasks = createAsyncThunk(
    'taskName/getTasks',
    async(token, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:5000/task/userTask', {
                method: 'GET',
                headers: {
                    'token':`Bearer ${token}`,
                    'Content-Type': 'application/json'
                  }
            })
            const data = await response.json();
            return data
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const createNewTask = createAsyncThunk(
    'taskName/createNewTask',
    async (newTaskProp, thunkAPI ) => {
        
        try {
            const response = await fetch('http://localhost:5000/task/new', {
                method: 'POST',
                headers: {
                    'token':`Bearer ${newTaskProp.tokenAccess}`,
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(newTaskProp)
        })
        if(!response.ok) {
            throw new Error('Failed to create new task')
        }
        const data = await response.json();
        
        return data
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const updatesTask = createAsyncThunk(
    'taskName/updatesTask',
    async (updatedTask, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:5000/task/${updatedTask._id}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedTask)
              })
              if(!response.ok){
                throw new Error('Failed to update task')
              }
              const data = await response.json()
              return data
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteTask = createAsyncThunk(
    'taskName/deleteTask',
    async (deletedTask, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:5000/task/${deletedTask}`, {
                method: 'DELETE',
                headers: {
                  "Content-Type": "application/json"
                },
                
              })
              if(!response.ok){
                throw new Error('Failed to update task')
              }
              return deletedTask
             
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)




const initialState = {
    taskName: [],
    loading: false, 
    error: null, 
    isChecked: false
}

const taskSlice = createSlice({
    name: 'taskName',
    initialState,
    reducers: {

        },
    
    extraReducers: (builder) => {
        //Handle fetch task
        builder
        .addCase(getTasks.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.isChecked= false;
        })
        .addCase(getTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.taskName = action.payload;
            state.isChecked= false;
        })
        .addCase(getTasks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        //Handle create new task
        builder
        .addCase(createNewTask.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.isChecked= false;
        })
        .addCase(createNewTask.fulfilled, (state, action) => {
            state.loading = false;
            state.taskName.push(action.payload);
            state.isChecked= false;
        })
        .addCase(createNewTask.rejected, (state, action) => {
            state.loading= false;
            state.error = action.payload;
            state.isChecked= false;
        });
        //Handle updateTask
        builder
        .addCase(updatesTask.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.isChecked= false;
        })
        .addCase(updatesTask.fulfilled, (state, action) => {
            state.loading = false;
            state.isChecked= false;
            const updatedTask = action.payload;
            state.taskName.map(task => task._id === updatedTask._id? 

                {...task, ...updatedTask} : task
            )
        })
        .addCase(updatesTask.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
            state.isChecked= false;
        })
     //DELETE TASK
     builder
     .addCase(deleteTask.pending, (state) => {
        state.loading= true;
        state.error = null;
        state.isChecked= true
     })
     .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading= false;
        state.isChecked= true;
        const deletedTask = action.payload
        state.taskName.filter(task => task._id !== deletedTask)
     })
     .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload;
        state.isChecked= false;
     })

    }
        
})


export default taskSlice.reducer