const DarkModeReducer = (state, action)=>{
    switch (action.type){
        case "LIGHT":{
            return{
               darkMode: false,
            };
        }

        case "DARK": {
            return{
                darkMode: true,
            };
        }

        case "TOGGLE":{
            return{
                darkMOde:!state.darkMode,
            };
        }

        default:
            return state;
    }
};

export default DarkModeReducer;