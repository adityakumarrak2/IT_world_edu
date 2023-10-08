# FEND3
This contains the use of useReducer to avoid props drilling

App.js contains the App function which in turn contains all the structure for the website(like buttons and their functions)
FC.js contains the child component of App and has imported 'App' state & dispatch and has only exported the state to FCC.js
FCC.js contains the grandchildcomponent of app & child of FunComp has only imported 'state'


AC has both 'state' and 'dispatch' in function called 'App'
FC has 'state' as well as 'dispatch' imported from AC
while FCC only has imported 'state' from FC 