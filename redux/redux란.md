# Redux
> [생활코딩의 react-redux(2022 개정판)](https://youtu.be/yjuwpf7VH74)

> [redux 공식 홈페이지](https://ko.redux.js.org/)

## 개요
redux는 상태관리 라이브러리로서 대표적으로 
컴포넌트안의 컴포넌트가 많아서 중복되는 props를 일일히 컴포넌트에 다 넣어야 하는 번거로움을 해소한다.

## 스토어 구성
스토어`store`는 앱에 필요한 상태`state`와 액션`actions`, 리듀서`reducer`를 제공한다. 

### createStore 와 reducer
1. `createStore`를 `reducer` 함수를 매개변수로 받는다. 
2. `reducer` 함수는 스토어 첫번째 매개변수로 현재상태`currentState`를 받고, 두번째 매개변수로는 어떤게 변경할지 정해주는 액션`action`을 받는다.

## Provider  
- 상태를 어떤 컴포넌트들에게 제공할 것인가? (울타리를 정의함)
- 상태를 건내줄 컴포넌트들을 `<Provider />` 로 감싼다. 
- 반드시 `store` props를 주어야 한다. 

## useSelector
- 스토어의 상태값을 반환해주는 역할을 한다. 
- 상태값이 바뀐경우, 바뀐 스토어의 상태값을 가져와 컴포넌트를 렌더링한다. 

## useDispatch
- 리듀서의 액션을 호출시킨다. 
- 이때 액션은 `useDispatch`를 이용해 받아온 값을 스토어에 저장한다. 