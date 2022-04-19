@echo off
Title what
Color D2
Prompt what-
Pause
Pause
setlocal
:PROMPT
SET /P AREYOUSURE=Are you sure (Y/[N])?
IF /I "%AREYOUSURE%" EQU "N" GOTO PROMPT
IF /I NOT "%AREYOUSURE%" EQU "Y" GOTO END

echo ... rest of file ...
start chrome.exe -incognito --app=http://www.youtube.com/watch?v=dQw4w9WgXcQ&t=0m1s

GOTO PROMPT
:END
endlocal
