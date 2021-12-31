# 두번째 연습
- +버튼을 누르면 박스가 추가되고 x버튼을 누르면 박스가 삭제된다.
- `const div = document.createElement('div');`를 함수 밖에서 선언했더니, 버튼이 한번만 작동해서 (버튼을 계속 눌러도 div가 하나만 생성되었다.) 검색을 해봐도 해답을 못찾아서 혹시?! 하고 element를 생성하고 추가하는 것 모두 함수 안으로 넣었더니 해결되었다.
- 위의 문제를 해결했더니 삭제하는 함수에서 에러가 났다. 상수를 함수 코드 블럭 안에서 선언해서 삭제 함수에서는 생성된 div를 불러올 수가 없었다. 그래서 생성된 div element를 DOM으로 연결해서 에러를 해결했다.
- 완성

