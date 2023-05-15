# 리액트 & 일렉트론 활용 앱 구축

---

### Demo : https://mxx-kor.github.io/react-practices/

### 개발 목표

> 개인이 활용하기 좋은 소규모 애플리케이션 구현을 통해 리액트 학습

<center>
    <img src="https://github.com/mxx-kor/react-practices/assets/82329983/e4921f19-d08c-4ce3-bd07-52c97f69ca10" width="300" height="300">
    <img src="https://github.com/mxx-kor/react-practices/assets/82329983/68e7d111-f393-4887-9c7d-b959e3a9c3fe" width="300" height="300">
    <img src="https://github.com/mxx-kor/react-practices/assets/82329983/66f564e8-190c-4836-a3d3-2f36d30dd3f9" width="300" height="300">
    <img src="https://github.com/mxx-kor/react-practices/assets/82329983/74d52ae6-40c1-4cf8-9fd7-0a471bbb8a4c" width="300" height="300">
    <img src="https://github.com/mxx-kor/react-practices/assets/82329983/08783fcd-e63f-485b-9e33-aeb5df778765" width="300" height="300">
    <img src="https://github.com/mxx-kor/react-practices/assets/82329983/b946b421-fd61-499c-bde4-95e52cd52848" width="300" height="300">
</center>

### 사용 기술

- React
- JavaScript
- electron
- styled-component

---

### 일렉트론(electron)

> gh-page로 배포한 뒤 gh-page URL을 활용하여 데스크톱앱을 실행하면 윈도우창을 통해 사용 가능하도록 함.

### 주요 기능

> Todo List

    - 로컬스토리지를 활용해 각 내용 저장 가능 (개인이 부가 기능 추가)
    - 벨로퍼트님의 강의에서 제공되는 투두리스트
    - 리액트의 개념 정리를 위해 진행함

> The coins

    - 암호화폐 정보를 API를 활용하여 표시.
    - 현재 환률 API를 활용, 비교적 정확한 KRW를 표시. (개인이 부가 기능 추가)
    - USD를 입력하면 그 돈으로 몇개의 코인을 구입할 수 있는지 계산.

> Green Effort

    - 깃허브의 잔디 심기와 같은 기능이 자기 개발에 효과적이라고 느껴 제작
    - Calendar 라이브러리를 활용 달력을 받아 표시할 수 있도록 함.
    - 로컬스토리지를 활용, 표시된 날들을 브라우저에 저장.

> Calculator

    - 간단한 계산기를 구현
    - Reducer를 활용해 다양한 Actions를 dispatch하여 기능
    - 버튼의 기능에 따라 컴포넌트로 정리, 다양한 조건 설정하여 오류 최소화
    
> Timer

    - 면접 스터디에 활용하기 위해 구현
    - 남은 시간을 state로 추가, reset을 통해 다양한 시간 설정 가능
    - setInterval, clearInterval 활용
    - 최소한의 상태값을 활용하기 위해 노력함

> Random-Order

    - 면접 스터디에 활용하기 위해 구현
    - 랜덤한 순서로 input 값들을 재구성
    - 동적으로 input 개수 조절
    - form의 element 접근을 활용하여 input value를 배열로 작성하지 않음 
