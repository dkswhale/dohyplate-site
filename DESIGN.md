# 디자인 규칙

상태: 2026-11-04 "게임사 스타일"로 다시 만듦. 이전 "네모로직 문제지" 디자인은 사용자가 거절했다(글꼴, 게임과 다른 그림).

## 원칙

1. 게임 그림을 크게 쓴다. 레퍼런스: Devsisters, Rusty Lake, Dream Games(첫 화면을 게임 세계가 채운다).
2. 그림은 우리 게임 것만 쓴다. 장면·주민·벨티는 게임 데이터(`art.json`)로 그리고, 화면 사진은 최신 게임에서 찍는다. 다른 회사 그림이나 일반 아이콘을 쓰지 않는다.
3. 휴대폰에서 먼저 확인한다(폭 360px, 390px).

## 색 (게임 화면과 같다)

| 이름 | 값 | 쓰는 곳 |
|---|---|---|
| `--peach` | `#F6D2AE` + 흰 점 18px 간격 | 첫 화면, 게임 그림 영역(게임 판 바탕) |
| `--page` | `#FFF9F2` | 페이지 바탕 |
| `--belt` | `#2B3244` | 벨트, 주민 행렬 띠, 문의 띠, 휴대폰 테두리 |
| `--belt-dash` | `#59657F` | 벨트 점선 |
| `--yellow` | `#FFC93C`, 테두리 `#B07400` | 주 버튼, "출시 준비 중" 칩 |
| `--ink` | `#191F2C` | 글자 |

밝은 화면만 쓴다. 게임도 밝은 테마만 쓴다.

## 글꼴

Pretendard Variable(jsDelivr 동적 서브셋 CSS). 제목 800, 본문 400. 픽셀 글꼴은 쓰지 않는다.

## 부품

- 장면(`<canvas data-scene="그림 번호">`): `site.js`가 그린다. 벨트가 그림판을 돌고, 주민이 가장 바깥 큐브가 자기 색이면 지운다. 다 지우면 그림을 보여 주고 다음 그림으로 넘어간다. 큐브·캐릭터 그리는 법은 게임의 `src/ui/render.ts`·`sprites.ts`와 같다. 움직임 줄이기면 한 장면에 멈춘다.
- 주민 행렬(`data-parade`): 첫 화면 아래 벨트 띠. 주민 37명이 지나간다.
- 주민 목록(`data-residents`): 픽셀 벨트 페이지. 주민 37명과 이름.
- 게임 카드: 왼쪽 글, 오른쪽 살구색 영역에 휴대폰 3대(가운데가 위).
- 문서 페이지(문의, 개인정보처리방침): `.doc`, `.box`, `.table-scroll`. 본문 글은 바꾸지 않는다.

## 그림 다시 만들기

- `art.json`: pixel-belt 저장소에서 `npx tsx ../dohyplate-site/tools/export-art.mts ../dohyplate-site/art.json`을 실행한다. 장면 그림 목록은 그 파일의 `PICK`에 있다.
- `img/*.jpg`: pixel-belt에서 `SHOT_CHANNEL=chrome npm run shot`을 실행한다. `screenshots/`의 `play-dressed`, `map-chapter`, `gallery`를 780×1688 JPEG(품질 82)로 바꾼다.
