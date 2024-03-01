cd sync_rounded

REM 初回は clone
REM git clone https://github.com/yasusho/linmarn_font_project

git pull origin master

xcopy linmarn_font_project\rounded\ all_glyphs\ /s /e /y

node filter_files.js

cd ..