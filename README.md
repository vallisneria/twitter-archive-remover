# twitter_archive_remover
트위터 아카이브를 이용해 트윗을 삭제하는 코드 (저장용)

## 사용 방법
공식 웹사이트 기준
1. ```설정 및 개인정보 > 계정 > 내 데이터 기록 파일을 다운로드하세요```로 들어가서 ```기록 파일 요청하기```를 클릭합니다. (메일 받는데 며칠 걸림)

1. 받은 메일에 들어 있는 압축 파일을 풀고 ```/data/tweet.js``` 파일만 따로 챙깁니다.

1. 해당 파일을 열어서 첫번째 줄을 아래와 같이 수정해 줍니다.
    ```js
    // 이렇게 되어있는 파일을
    window.YTD.tweet.part0 = [ {
    "tweet" : {
 
 
    // 이렇게 만들면 됩니다
    [ {
    "tweet" : {
    ```

1. 파일명을 ```tweet.js```에서 ```tweet.json```으로 변경해준 후 이 폴더에 넣습니다.

1. 가지고 있는 키를 아래 양식에 맞추어 입력해준 후 ```.env```파일로 저장해 이 폴더에 넣습니다.
    ```
    TWITTER_CONSUMER_KEY=
    TWITTER_CONSUMER_SECRET=
    TWITTER_ACCESS_TOKEN_KEY=
    TWITTER_ACCESS_TOKEN_SECRET=
    ```

1. 패키지를 설치해준 후(```npm install```), 코드를 실행합니다. (```npm start```)

## 기타
- 트윗 약 3만 5천개 정도를 지우는데 약 3시간 정도가 소요됨.
