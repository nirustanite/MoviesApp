# MoviesApp

# Table of Contents
1. [Functionality](#functionality)
2. [Features](#features)
3. [Installation](#installation)
4. [Setup of Android Emulator](#nndroid-emulator)
5. [Setup in Android Phone](#android-phone)
4. [Setup of the project](#setup-project)

<a name="functionality"></a>
### App Functionality

- The App displays popular Movies and Tv series. When a Movie is selected, teh app shows the details of the Movies.
- The App also includes a Search Functionality which allows to Search for Movies.

<a name="features"></a>
#### Home Page - Features
1. Display the latest TV
2. Display Poupular Movies
3. Display Popular TV
4. Search Movies 

#### Search Page - Features
1. Search bar 
2. List of data
3. Button for navigation to HomePage

#### Detail Page - Features
1. Image of the selected item
2. Title
3. Overview (A short Description)
4. Rating.

<a name="installation"></a>
### Installation and running the application.

<a name="android-emulator"></a>
#### Setup the android emulator.

1. Go to the link specified and perform all the instructions till setting up ANDROID_HOME
   
   (https://facebook.github.io/react-native/docs/getting-started)
   
2. Install Android Studio, open the AVD Manager.
3. Select the type of phone.
4. Download the version of Android. 
5. Click Finish. It opens a window. Select the play button displayed.
6. The emulator will open.

<a name="android-phone"></a>
#### Setup in android phone

1. Connect mobile phone with USB cable.
2. Check the box to transfer files.
3. Go to Settings => Developer Options => Enable USB Debugging.

<a name="setup-project"></a>
#### Setup of the project
1. Sign up and get the api key for the movie Database using the given link
 
   (https://www.themoviedb.org/account/signup)
   
2. Clone the application by using the following command

     ` git clone https://github.com/nirustanite/MoviesApp.git `
     
3. cd to the folder MoviesApp/MovieApp.
    
    ` cd MoviesApp/MovieApp `
    
4. Install dependencies using this command
  
     ` npm i `
  
5. Open the constants file and change the api_key with your API_KEY. Save the file

6. Type the command to install the app

      ` react-native run-android `
      
7. Type the command to start the app

      ` react-native start `
    
8. Now, the app can be used in the phone.

     
