PHASE 0 - I am new to React and don't yet fully understand how it works. However my plan would be to first have RAW_GAMES be the master list. Then display title and genre, use favorite for a filter, and id to label each uniquely. Moving to visual maybe add a button to switch between games and then add styling.

PHASE 1 - Abstraction hides internal mechanics or complex code behind a simple interface. Instead of controlling each step .filter() and .map() hide this in the method. It's shorter this way and less room for mistakes.

PHASE 2 - Running the create command was pretty easy. The server only runs while the terminal stays open or it'll display a failed to connect message. node_modules holds loads of files that I did not write.

PHASE 3 - HTML will show content you type but JSX is inside JavaScript so it can use data like {game.title}. Props can work like arguments in a function passing a game into GameItem component letting me write it once and reuse to show every game.

PHASE 4 - logic.js still had the Phase 1 code without export so App.jsx could not use RAW_GAMES or getFavoriteGames. Vite showed a failure to resolve import because GameItem.jsx wasnt where App.jsx expected.

PHASE 5 - Forgetting a comma after the Hades line Vite will show an error.