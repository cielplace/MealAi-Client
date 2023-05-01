# :smiley: Team08 Client Repository

8팀 클라이언트 저장소입니다.

포크 뜨세요!

## 📁 브랜치 관리

- `master`
    - 배포 가능한 상태만을 관리합니다.
    - 팀장님만 : `dev` >> `master`
- `dev`
    - 기능 개발을 위한 브랜치들을 병합하기 위해 사용합니다.
    - 모든 기능이 추가되고 버그가 수정되어 배포 가능한 안정적인 상태인 경우에만 `master`에 병합합니다.
- `feature`
    - `dev` 브랜치에서 새로운 기능에 대한 `feature` 브랜치를 분기합니다.
    - 새로운 기능에 대한 작업 수행이 끝나면 `dev` 브랜치로 병합합니다.
    - 더 이상 필요하지 않은 `feature` 브랜치는 삭제합니다.
    - 중앙 원격 저장소에 올리기(`push`) 전에 `pull` 땡겨와서 `merge conflict` 해결해줍니다.
    - `feature/기능요약` : `feature/login`
    ```
    git checkout -b feature/login develop
    /* 새로운 기능 작업 수행, add, commit, add, commit, ... */ 
    git checkout develop
    git merge --no-ff feature/login
    git branch -d feature/login
    git push origin develop
    ```

## 📸 커밋 규칙

- 예시: `feat: 로그인 기능 구현`
- `feat` : 새로운 기능 추가
- `fix` : 버그 수정
- `docs` : 문서 수정
- `style` : 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우
- `refactor` : 코드 리팩터링
- `test` : 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X)
- `chore` : 빌드 업무 수정, 패키지 매니저 수정(프로덕션 코드 변경 X)
- `design` : CSS 등 사용자 UI 디자인 변경
- `comment` : 필요한 주석 추가 및 변경
- `rename` : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- `remove` : 파일을 삭제하는 작업만 수행한 경우
- `!BREAKING CHANGE` : 커다란 API 변경의 경우
- `!HOTFIX` : 급하게 치명적인 버그를 고쳐야 하는 경우


## 💦 참고

[Git 브랜치의 종류](https://gmlwjd9405.github.io/2018/05/11/types-of-git-branch.html)

[자주 사용되는 Git 명령어](https://www.holaxprogramming.com/2018/11/01/git-commands/)

[프로젝트 fork 하는 법](https://salix97.tistory.com/223)
