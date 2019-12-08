import React from 'react';
import { Link } from 'react-router-dom';

function HackPage() {
    return (
        <div className="info-container">
            <div className="info-container-scroll" style={{'zIndex':"9999", 'position':"absolute", 'backgroundColor':"white"}}>
                <table style={{'border':"1px solid black", 'marginTop':"10px", 'marginLeft':"10px", 'marginBottom':"10px"}}>
                    <thead>
                        <tr>
                            <th style={{'textAlign':"left", 'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Date:
                            </th>

                            <th style={{'textAlign':"left", 'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Changes:
                            </th>

                            <th style={{'textAlign':"left", 'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Working On:
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                9/28/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Finished adding images and links to the settings menu screen, added side bar, buttons, and images on the installer menu screen, got uploaded on sever with much help from Steven, 
                                created and linked this page for keeping track of progress.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Haze effect on the settings page is broke, not exactly sure why, looking into fixing it. Getting real links to seperate pages set up for the installer menu. The keypads for the 
                                installer and settings menu currently do not work with the keyboard keypresses but I should have this working soon. The Silent exit and entry delay also doesn't return to gray when 
                                unchecked, still working on this one too. Weather and time on the homepage are being looked into, I will do more with this when I start looking into ADC modifications to what the 
                                panel can do/show.
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/1/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Made a basic style format for the settings sections and have started implimenting it into the users page. Got a function to add a new user and a scrolling page if too long. Made pages 
                                for naming users and adding unique codes.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Haze effect needs to be added to users screen. Still working on setttings haze being broke. Edit button for users also does not work yet. May start seperating out the pages to 
                                seperate html pages to reduce bulk of main page, but will have to look at that nearer to completion. 
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/2/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Worked on keyboard page for users, got all the buttons made for it. Updated the add user functions. Fixed a bug with the language page looking weird.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Need to make the buttons actually functional on the keyboard page. Pretty much everything else that was listed from above notes is still broken or not done yet. More to come tomorrow.
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/3/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Finished the keyboard and getting the keypad working. Basically it, took a longer time to do than right unfortunately.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Keypad needs to have it updated to look good. Need to make a page to confirm keycode. Need to update submit keycode button to require all four digits to be in. Will finish more 
                                tomorrow.
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/4/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Finished just about everything with adding a new user. User codes will also work to disarm the panel and get into settings etc. Got the max 99 users limit set. Got everything looking 
                                nice and good.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Need to work on editing users. Need to adjust how I track users and their access to systems by making my current global user code array made up of arrays to track that. Also need to 
                                set up some JS to make sure you can't add the same code more than once.
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/5/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Users are just about finished. I updated them be a 2d array based on code, name and permissions. Updated how I store and pull the users on the users screen. Started on the edit 
                                users screen. Set up list of priorities so I can focus on getting the program set up in order to make everything go faster. Since the edit users page doesn't work I have made it so
                                new users have system access without setting it up because that part isn't finished yet.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                I need to work on the edit users page, I have added all the base information but need to set up to pull correct info to display. Also need to set up master edit page and duress edit 
                                page. I also need to rework the verify  users page to accept any 4 digit code but send you back to first enter user code if they don't match to have you try again. Those should be the 
                                last things left on the users. Next step is getting the states of the panel set up.
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/9/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Added some CSS to prevent highlighting anything. Finally got the radio tower icon in master system settings to load properly. Worked more on the edit users page so it doesn't look awful anymore. Added scroll to edit users page. Made JS page to start on panel state but didn't get far enough to start on that.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Need to get Steven to help me out with some JS that isn't working for when adding in the command. Also need to add screens to update user code and keycode. Need to work on the bottom of the screen as well to look better too.
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/16/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                I think I got some work done but can't remember. I've been working on this bug for too long. Trying to figure out a way around the button running twice on the edit users activity slider but when I added a div tag, the color updators I had decided to stop.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                A lot still needs to be done, edit users page not finished, edit user code and name pages not started yet. At this juncture, progress is slow. May come back to this later and get a head start on panel states.
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/22/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Updated all images to be stored locally. Started work on Nav bar.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Nav bar is my main focus right now then back on to the spinning circle on the arm stay and away screens.
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/23/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Worked more on the Nav side bar and updated the header and footer. Worked more on the circular progress bar with Richard but may need to scrap it because I am unable to resize the circle.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Working on progress bar and arming page and arming status. Working on Nav bar, header and footer. 
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/24/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Worked on this page a little bit, still doesn't look great but not my main focus right now. Just had to make it readible, not that anyones reading it but for the sake of my sanity. Updated links in installer toolbox to not go anywhere as those pages aren't created yet.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Found a nice little issue where if you click the wrong spot on the arm stay/arm away buttons it will activate the others. Also if you click it again it will run two instances of the circle. Need to look into these further.
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                10/26/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Worked on arming pages, lots of bugs and style issues right now, just ignore and assume I'll get to it XD. Any other bugs let me know.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                Lots of bugs working on them shush
                            </td>
                        </tr>

                        <tr>
                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                11/27/2019 Jared J.
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                I have translated the pages into working with React now to shorten the length of my index page. I have improved somewhat on the arming screens but have lost the function for my spinning arming circle. 
                            </td>

                            <td style={{'border':"1px solid black", 'padding':"15px", 'backgroundColor':"lightgray"}}>
                                A couple of pages left to translate. Still working on so much. Long ways to go.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <footer className="changelog-footer" style={{'bottom':"0", 'width':"100%", 'height':"120px", 'position':"sticky", 'backgroundColor':"white", 'paddingTop':"10px", 'paddingBottom':"10px", 'marginLeft':"10px"}}>
                    <Link to="/">
                        <p style={{'marginBottom':"10px"}}>
                                Click this to return to the emulator.
                        </p>
                    </Link>

                    <p style={{'marginBottom':"10px"}}>
                        I am working on getting better images for the panel but I currently don't have the time to work on creating/getting accurate images at this moment. It will be implimented later near the end 
                        of the project.
                    </p>

                    You can reach me through teamwork chat as @jared or by email jajohnson@fluenthome.com if you have any questions, comments or ways to improve the program. I'd love to get some feedback.

                    <br/>

                    Last Updated: 10/26/2019 9:02:01PM
                </footer>
            </div>
        </div>
    );
}

export default HackPage;