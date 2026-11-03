---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["en/index.html","pixel-belt/index.html","en/pixel-belt/index.html","support/index.html","en/support/index.html","pixel-belt/privacy/index.html","en/pixel-belt/privacy/index.html"]
---

# 도이플레이트 사이트 (전체 8페이지)

- 모드: 회사 소개·게임 페이지는 Persuade, 개인정보처리방침·문의는 Read. 같은 세계를 쓴다.
- 방문자: 플레이어(휴대폰, 게임 안 링크). 할 일: 게임 확인, 정책·문의 찾기. 심사자는 바닥글 판권란에서 회사 정보를 찾는다.
- 제약: 사실만(스토어 링크·수치 없음), 주소 없음, 정책 본문은 그대로, 한·영 같은 구조.
- 기억에 남을 순간: 첫 화면 오른쪽 격자가 힌트대로 스스로 칠해지며 도이플레이트 표식이 된다.

## Direction contract

THESIS: 회사 사이트가 한 장의 네모로직 문제지다. 게임 회사 사이트의 기본형(대표 그림 배너 + 게임 카드 줄)을 거부하고, 풀린 칸이 회사를 그린다.

OWN-WORLD: 흰 종이(#FFFFFF)에 옅은 모눈(#EEF1F5), 굵은 남색 테두리 격자(#191F2C), 칠한 칸은 노랑 #FFC93C와 남색, 빈 칸은 회색 X. 제목·숫자 힌트·라벨은 픽셀 글꼴 Galmuri11 Bold, 본문은 시스템 산세리프(픽셀 벨트 게임과 같은 글꼴 묶음). 모서리는 직각, 그림자 없음. 버튼과 메뉴는 격자 칸.

STORY: 방문자는 "픽셀 퍼즐을 만드는 회사"임을 첫 화면에서 안다. 게임 목록은 문제 번호(No.1 픽셀 벨트 진하게, No.2 퇴근 탈출 덜 풀린 옅은 그림)로 읽힌다. 판권란에서 회사 정보를 확인하고, 픽셀 벨트 보기나 메일 문의를 누른다.

FIRST VIEWPORT: 위에 표식+DOHYPLATE와 칸 모양 메뉴. 왼쪽 열(약 45%)에 Galmuri 제목 세 줄, 한 줄 소개, 노랑 칸 버튼 "픽셀 벨트 보기"와 "문의하기". 오른쪽에 15×15 격자와 위·왼쪽 숫자 힌트, 0.9초 안에 줄 단위로 칠해짐. 휴대폰에서는 격자가 제목 아래로 화면 폭 가득.

FORM: 네모로직 퍼즐 잡지 문제지, 내 목록 3번째(주사위 배정). seed:83fd7cf7e85b5982. 덧붙인 규율: 모든 요소는 칸 단위 정렬(노선도), 안 칠한 칸도 디자인(7세그먼트), 최신 게임이 가장 진함(먹물), 게임마다 번호·상태 띠(피클 병 라벨).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 열린 결정

- 픽셀 벨트 페이지의 격자는 벨티(8×8, 게임 팔레트) 그림으로 풀린다.
