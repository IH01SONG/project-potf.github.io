# 🚀 Async Assignment Challenge - 우주적 게시물 가져오기 🌌

## 📝 프로젝트 개요

이 프로젝트는 JavaScript의 비동기 처리, DOM 조작, 그리고 다양한 프로그래밍 개념들을 학습하기 위한 과제입니다. JSONPlaceholder API를 사용해서 게시물 데이터를 가져오고, 아름다운 우주적 테마의 UI로 표시합니다.

## 🎯 학습 목표

- `async/await`와 `fetch`를 사용한 비동기 처리
- `...rest` 매개변수 활용
- `for...of`와 `for...in` 반복문 사용
- DOM 조작과 이벤트 처리
- 에러 핸들링과 사용자 경험 개선
- 반응형 웹 디자인

## 🗂️ 파일 구조

```
async-assignment-challenge/
├── index_challenge.html     # 메인 HTML 파일 (우주적 테마)
├── async_assignment_challenge.js  # JavaScript 로직
├── style_challenge.css      # 추가 CSS 스타일링
└── README.md               # 프로젝트 설명서
```

## ✨ 주요 기능

### 🔍 입력 유효성 검사
- 1-100 범위의 숫자만 허용
- 쉼표로 구분된 여러 ID 입력 가능
- 빈 값이나 잘못된 형식 입력 시 에러 표시

### 🌐 비동기 데이터 가져오기
- JSONPlaceholder API 사용
- 여러 게시물 동시 요청 처리
- 네트워크 에러 및 HTTP 에러 핸들링

### 🎨 사용자 인터페이스
- 우주적 테마의 반응형 디자인
- 로딩 상태 표시
- 애니메이션 효과 (별똥별, 우주선 등)
- 호버 효과와 글로우 애니메이션

## 🚀 사용 방법

1. **프로젝트 실행**
   ```bash
   # 브라우저에서 index_challenge.html 파일 열기
   open index_challenge.html
   ```

2. **게시물 ID 입력**
   - 입력 필드에 1-100 범위의 숫자 입력
   - 여러 ID는 쉼표로 구분 (예: `1,2,3,10`)

3. **데이터 가져오기**
   - "🛸 게시물 가져오기 🛸" 버튼 클릭
   - 또는 Enter 키 입력

## 💻 기술적 요구사항 충족

### 변수 선언
- ✅ `var`: API_BASE_URL
- ✅ `let`: outputElement  
- ✅ `const`: MAX_POST_ID, 함수들

### 함수 구현
- ✅ **화살표 함수**: `fetchMultiplePosts` (+ `...rest` 매개변수)
- ✅ **함수 표현식**: `runChallenge`

### 반복문
- ✅ **for...of**: ID 배열 순회
- ✅ **for...in**: 결과 객체 순회

### 비동기 처리
- ✅ **fetch API**: HTTP 요청
- ✅ **async/await**: 비동기 함수 처리
- ✅ **try/catch**: 에러 처리

### DOM 조작
- ✅ **입력값 가져오기**: `document.getElementById("postIds").value`
- ✅ **출력 표시**: `document.getElementById("output").innerHTML`
- ✅ **버튼 제어**: `document.getElementById("fetchPosts").disabled`
- ✅ **스타일 적용**: `classList.add("error")`

## 🎮 사용 예시

### 성공적인 요청
```
입력: 1,2,3
출력:
post1: sunt aut facere reprehenderit provident...
post2: qui est esse...
post3: ea molestias quasi exercitationem...
```

### 에러 처리
```
입력: abc 또는 101
출력: 유효한 ID(1-100)를 입력하세요! (빨간색 에러 메시지)
```

## 🛠️ 개발자 도구

브라우저 콘솔에서 `debugChallenge()` 함수를 호출하여 현재 상태를 확인할 수 있습니다.

```javascript
debugChallenge();
// 🚀 Debug Info:
// API_BASE_URL: https://jsonplaceholder.typicode.com/posts/
// MAX_POST_ID: 100
// 현재 입력값: 1,2,3
```

## 🌟 특별한 기능들

- **Enter 키 지원**: 입력 후 Enter 키로도 실행 가능
- **중복 제거**: 동일한 ID 중복 입력 시 자동 제거
- **반응형 디자인**: 모바일 기기에서도 최적화된 UI
- **접근성**: 애니메이션 감소 설정 대응
- **우주적 애니메이션**: 별똥별, 우주선, 글로우 효과

## 📚 학습 포인트

이 프로젝트를 통해 다음을 학습할 수 있습니다:

1. **비동기 프로그래밍**: Promise와 async/await 패턴
2. **API 통신**: REST API 사용법과 에러 처리
3. **DOM 조작**: 동적 컨텐츠 생성과 이벤트 처리
4. **사용자 경험**: 로딩 상태, 에러 메시지, 피드백
5. **모던 JavaScript**: ES6+ 문법 활용
6. **CSS 애니메이션**: 키프레임과 트랜지션 활용

---

🌌 **Happy Coding in the Cosmos!** 🚀