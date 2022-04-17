@echo off
Title what
Color D4
Prompt what-
Pause
@echo on
Pause
setlocal
:PROMPT
SET /P AREYOUSURE=Are you sure (Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END

echo ... rest of file ...
start chrome.exe -incognito --app=http://www.youtube.com/watch?v=dQw4w9WgXcQ&t=0m1s


:END
endlocal
GOTO PROMPT
