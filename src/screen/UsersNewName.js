import React from 'react';
import header_logo from "./images/fluent-logo-header.png";

function Panel() {
    return (
        <div id="screen-users-name" className="screen-style" style={{'display':" none;">
                    <p style={{text-align: center; 'marginTop':"11px; 'marginBottom':" 11px; 'color':"#448cc0;">
                        Enter a name for the new user
                    </p>

                    <input type="text" name="user-name" value="" maxlength="23" id="user-name-store" disabled className="user-input"/>

                    <div id="keyboard-top-letters">
                        <a href="." onClick="addKeyUser('1')">
                            <div className="keyboard-btn" style={{'marginLeft':"21px;">
                                <p>
                                    1
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('2')">
                            <div className="keyboard-btn">
                                <p>
                                    2
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('3')">
                            <div className="keyboard-btn">
                                <p>
                                    3
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('4')">
                            <div className="keyboard-btn">
                                <p>
                                    4
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('5')">
                            <div className="keyboard-btn">
                                <p>
                                    5
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('6')">
                            <div className="keyboard-btn">
                                <p>
                                    6
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('7')">
                            <div className="keyboard-btn">
                                <p>
                                    7
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('8')">
                            <div className="keyboard-btn">
                                <p>
                                    8
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('9')">
                            <div className="keyboard-btn">
                                <p>
                                    9
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('0')">
                            <div className="keyboard-btn">
                                <p>
                                    0
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('-')">
                            <div className="keyboard-btn">
                                <p>
                                    -
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('q')">
                            <div className="keyboard-btn" style={{'marginLeft':"51px;">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    q
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('w')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    w
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('e')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    e
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('r')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    r
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('t')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    t
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('y')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    y
                                </p> 
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('u')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    u
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('i')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    i
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('o')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    o
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('p')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    p
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('a')">
                            <div className="keyboard-btn" style={{'marginLeft':"82px;">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    a
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('s')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    s
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('d')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    d
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('f')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    f
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('g')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    g
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('h')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    h
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('j')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    j
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('k')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    k
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('l')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    l
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('\'')">
                            <div className="keyboard-btn">
                                <p>
                                    '
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="capatalizeKey()">
                            <div className="keyboard-btn" style={{'marginLeft':"21px; 'width':"83px;">
                                <img src="images/shift.png" className="keyboard-img" style={{'marginTop':"10px; 'marginLeft':"29px;">
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('z')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    z
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('x')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    x
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('c')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    c
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('v')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    v
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('b')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    b
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('n')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    n
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('m')">
                            <div className="keyboard-btn">
                                <p className="keyboard-letter" style={{text-transform: lowercase">
                                    m
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser(',')">
                            <div className="keyboard-btn">
                                <p>
                                    ,
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('.')">
                            <div className="keyboard-btn">
                                <p>
                                    .
                                </p>
                            </div>
                        </a>
                    </div>

                    <div id="keyboard-top-symbols" style={{'display':"none">
                        <a href="." onClick="addKeyUser('!')">
                            <div className="keyboard-btn" style={{'marginLeft':"18px;">
                                <p>
                                    !
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('@')">
                            <div className="keyboard-btn">
                                <p>
                                    @
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('#')">
                            <div className="keyboard-btn">
                                <p>
                                    #
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('$')">
                            <div className="keyboard-btn">
                                <p>
                                    $
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('%')">
                            <div className="keyboard-btn">
                                <p>
                                    %
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('^')">
                            <div className="keyboard-btn">
                                <p>
                                    ^
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('&')">
                            <div className="keyboard-btn">
                                <p>
                                    &
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('*')">
                            <div className="keyboard-btn">
                                <p>
                                    *
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('(')">
                            <div className="keyboard-btn">
                                <p>
                                    (
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser(')')">
                            <div className="keyboard-btn">
                                <p>
                                    )
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('_')">
                            <div className="keyboard-btn">
                                <p>
                                    _
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('~')">
                            <div className="keyboard-btn" style={{'marginLeft':"48px;">
                                <p>
                                    ~
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('-')">
                            <div className="keyboard-btn" style={{'marginLeft':"70px;">
                                <p>
                                    -
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('+')">
                            <div className="keyboard-btn">
                                <p>
                                    +
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('=')">
                            <div className="keyboard-btn">
                                <p>
                                    =
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('{')">
                            <div className="keyboard-btn">
                                <p>
                                    {
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('}')">
                            <div className="keyboard-btn">
                                <p>
                                    }
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('[')">
                            <div className="keyboard-btn">
                                <p>
                                    [
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser(']')">
                            <div className="keyboard-btn">
                                <p>
                                    ]
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('|')">
                            <div className="keyboard-btn">
                                <p>
                                    |
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser(';')">
                            <div className="keyboard-btn" style={{'marginLeft':"489px;">
                                <p>
                                    ;
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser(':')">
                            <div className="keyboard-btn">
                                <p>
                                    :
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('\'')">
                            <div className="keyboard-btn">
                                <p>
                                    '
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('<')">
                            <div className="keyboard-btn" style={{'marginLeft':"348px;">
                                <p>
                                    <
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('>')">
                            <div className="keyboard-btn">
                                <p>
                                    >
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('?')">
                            <div className="keyboard-btn">
                                <p>
                                    ?
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser(',')">
                            <div className="keyboard-btn">
                                <p>
                                    ,
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="addKeyUser('.')">
                            <div className="keyboard-btn">
                                <p>
                                    .
                                </p>
                            </div>
                        </a>

                        <a href="." onClick="switchToLetter()">
                            <div className="keyboard-btn" style={{'marginLeft':"48px; 'width':"83px; 'position':"absolute; 'marginTop':"222px;">
                                <p>
                                    abc
                                </p>
                            </div>
                        </a>
                    </div>

                    <a href="." onClick="switchToSymbol()">
                        <div className="keyboard-btn" style={{'marginLeft':"48px; 'width':"83px;">
                            <p>
                                @ #
                            </p>
                        </div>
                    </a>

                    <a href="." onClick="emptyKeyUser()">
                        <div className="keyboard-btn" style={{'width':"90px;">
                            <p style={{'marginTop':"16px; 'fontSize':"15px;">
                                CLEAR
                            </p>
                        </div>
                    </a>

                    <a href="." onClick="addKeyUser(' ')">
                        <div className="keyboard-btn" style={{'marginLeft':"30px; 'width':"175px;">
                            
                        </div>
                    </a>

                    <a href="." onClick="backspaceKeyUser()">
                        <div className="keyboard-btn" style={{'width':"60px;">
                            <img src="images/backspace.png" className="keyboard-img" style={{'marginLeft':"10px; 'marginTop':"12px;">
                        </div>
                    </a>

                    <a href="." onClick="newUserName(document.getElementById('user-name-store').value)">
                        <div className="keyboard-btn" style={{'width':"106px; background-'color':"#d2dde6; 'backgroundImage':" none; 'marginLeft':"49px;" id="submit-user">
                            <p style={{'color':"white;">
                                Next
                            </p>
                        </div>
                    </a>
                </div>
    );
}