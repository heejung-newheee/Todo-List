# Create React App - Todo List
React 개인 과제 23.06.12 ~ 23.06.16

# 프로젝트 소개
리액트 훅 요소(state)를 이용한 이벤트 관리/컴포넌트 분리 스터디를 위한 To Do List App만들기.
할일 목록을 추가하고 목록을 삭제/상태변경을 할 수 있습니다.
localstorage를 사용해서 추가/수정/삭제/새로고침 시 데이터가 유지됩니다.

배포 사이트 [바로가기](https://todo-list-mu-green-11.vercel.app/)

# 기술스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

# 구현기능
  - UI 구현
  - Todo 추가
  - Todo 삭제
  - Todo 완료 상태 변경 (완료 ↔ 진행)
  - localstorage로 화면값 유지

# 컴포넌트
  - Layout : 페이지 전체 컨텐츠를 감싸고 있는 레이아웃 컴포넌트
  - Header : 페이지마다 반복될 수 있는 타이틀(header) 컴포넌트 
  - InputForm : 유저의 입력값을 받아 할일 목록을 추가하는 컴포넌트
  - Main : 할일 목록 리스트 Working/Done 영역이 있는 컨텐츠 영역 컴포넌트
  - TaskItems : 할일 목록의 각 항목, 상태 변경/삭제가 가능한 목록 아이템 컴포넌트

![image](https://github.com/heejung-newheee/Todo-List/assets/126348461/4b0355cf-c2b5-4f82-ae6a-768cc5621631)
