ถ้ายังไม่เคยล็อกอินทำการล็อกอินก่อน
git config --global user.email "boonchoo.rawat@gmail.com"
git config --global user.name "rawatboonchoo"
---------------------------------------------

git init                            
//สร้างไฟล์ที่เป็นนามสกุล .git

git add .                           
//เอาไฟล์ทั้งหมดขึ้น git || git add README.md

git commit -m "first commit" 
//-m คือ message เพื่อให้รู้ว่าทำงานถึงไหน

git branch -M main 
//กำหนดชื่อว่า main

git remote add origin https://github.com/rawatboonchoo/vue-js-learn.git  
//ต่อไปนี้เมื่อไหร่ก็ตามที่เราตั้งว่า origin เราก็จะเอาขึ้น githup ที่ https://github.com/rawatboonchoo/vue-js-learn.git

git push -u origin main 
//หมายถึงการเอาขึ้น githup ที่ชื่อ origin branch main
