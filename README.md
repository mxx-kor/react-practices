# 리액트 & 일렉트론 활용 앱 구축

---

### Demo : https://mxx-kor.github.io/react-practices/

### 개발 목표

> 벨로퍼트님과 노마트코더님의 강의를 통해 리액트를 이용해 개인이 사용하기 좋은 데스크톱앱 구축

### 사용 기술

- React
- JavaScript
- electron
- styled-component

---

### 일렉트론(electron)

> gh-page로 배포한 뒤 gh-page URL을 활용하여 데스크톱앱을 실행하면 윈도우창을 통해 사용 가능하도록 함.

![image](https://user-images.githubusercontent.com/82329983/163916101-6d3fa5aa-9e87-432f-bb6d-bd7bd10d9db4.png)

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
