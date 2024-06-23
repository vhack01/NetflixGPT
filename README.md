# Netflex GPT

## Steps

    - Create React App
    - Configured Tailwindcss
    - React Router Dom
    - Lucid react icon
    - Regex -> Form validation
    - Firebase Setup
    - Deploying on production
    - Create SignUp User
    - Login
    - Setup Redux Store
    - Implemented signout feature
    - Update profile
    - Fetch Movies from (TMDB Api)
    - Bug Fix : Redirect user to login (If not loggedIn)
    - Bug Fix : Redirect user to /browse (If user is loggedIn)
    - Unsubscribed to onAuthStateChange Callback
    - Register TMDB API & create an app to get "Access Token"
    - Get data from TMDB (Now Playing Movies) -> storing in ReduxStore(movieSlice)
    -

# API ENDPOINTS

    - Login
        - Username
        - Password
    - Signup
    - Browse (Only Authenticated user)
        - MainContainer
            - Trailor (in background)
            - Header
                - Logo
                - Navs
                - Search Movie
                - Notification
                - User icon (dropdown icon)
            - Movie Details
                - Movie name
                - Movie description
                - Button (Play / More Info)

        - SecondaryContainer
            - Movies List (Horizontal Scroll)
                - Suggestion List
                - Continue watching
                - Top 10 Movies

    - NetflixGPT
        - Searchbar
        - Movie Suggestion
