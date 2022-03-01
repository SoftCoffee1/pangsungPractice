/*  1. 파이어베이스 8.6.5 설치 npm i firebase@8.6.5 
    
    2. 파이어베이스 프로젝트 만들고 index.js 파일에 콘솔 sdk 내용 입력
    3. npm install -g firebase-tools@9.23.1
    4. firebase login
    5. jQuery, bootstrap 설치 (bootstrap -> css 짜는 용도, jQuery 는 문법)
*/

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyALEgtSZiXrvHyxF1b1QWVV0If4idGfQOE",
    authDomain: "protoc-d8bec.firebaseapp.com",
    projectId: "protoc-d8bec",
    
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();