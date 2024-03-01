REM 初回以外はエラー
git clone https://github.com/yasusho/linmarn_font_project

cd linmarn_font_project
git pull origin master
cd ..

xcopy linmarn_font_project\rounded\ all_glyphs\ /s /e /y

node filter_files.js

pause

exit
