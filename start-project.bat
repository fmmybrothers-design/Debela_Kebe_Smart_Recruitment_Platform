@echo off
echo ============================================================
echo Smart Talent Discovery and Recruitment Management Platform
echo Author: Debela Kebede
echo ============================================================
echo.
echo Starting Node.js server...
echo.

REM Start the server
start "STDRMP Server" cmd /k "npm run dev"

REM Wait for server to start
timeout /t 3 /nobreak >nul

REM Open browser
start http://localhost:3000

echo.
echo Server is starting...
echo Browser will open automatically at http://localhost:3000
echo.
echo To stop the server, close the server window or press Ctrl+C
echo.
