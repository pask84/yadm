# Yet Another Drum Machine (YADM)

The "Yet Another Drum Machine" (YADM) is a dynamic and user-friendly drum machine application, written in JavaScript. It allows users to create their own unique drum patterns.

## Live Demo
You can check out the live demo of YADM [here](https://www.pasqualelangella.com/en/2014/05/24/drum-machine-html5-experiment/).

## Project Structure

The project contains the following key files and directories:

### HTML
- **index.html**: The main HTML file for the project. It sets up the basic structure and includes the necessary scripts and stylesheets.

### CSS
- **css/main.css**: The main CSS file for styling the project. It contains the styles for the overall layout and design of the drum machine.

### JavaScript
- **js/main.js**: The main JavaScript file that initializes the Phaser game and manages the core game functionality. It includes the loading bar UI to show the loading progress of assets.
- **js/loopPanel.js**: Manages the loop panel functionality within the drum machine.
- **js/mainMenu.js**: Handles the main menu functionality.
- **js/pads.js**: Manages the pads functionality, allowing users to interact with the drum pads.
- **js/presets.js**: Contains preset configurations for the drum machine.

### Images
- **images/UI pack Space/**: Contains images and spritesheets for the UI pack used in the drum machine.
  - **Spritesheet/uipackSpace_sheet.xml**: An XML file for a spritesheet, likely used for game or UI graphics.
  - **Vector/uipackSpace_vector.svg**: An SVG file for vector graphics.
  - **license.txt**: The license for the UI pack.

### License
- **LICENSE**: The license file which contains the terms under which the code can be used or distributed.

## Functionality

### Pads
The pads are interactive elements that can be clicked to produce different drum sounds. The pads are configured in a grid layout and can be customized with different sounds and colors.

### Main Menu
The main menu provides access to different functionalities of the drum machine, including loading presets and accessing the loop panel.

### Loop Panel
The loop panel allows users to create and manage loops. Users can add different sounds to the loop and control the playback.

### Presets
The drum machine comes with several presets that can be loaded to quickly get started with different drum patterns.

## How to Run
To run the project locally, simply open the `index.html` file in your web browser. Ensure that all the necessary files and directories are in place.

## Dependencies
The project uses the following external libraries:
- **Phaser**: A fast, free, and fun open-source HTML5 game framework.