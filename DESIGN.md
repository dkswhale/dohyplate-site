---
name: 도이플레이트 DOHYPLATE
description: 회사 사이트 전체가 한 장의 네모로직 문제지다. 흰 종이, 옅은 모눈, 남색 격자, 노랑 칸.
colors:
  fill-yellow: "#ffc93c"
  ink: "#191f2c"
  paper: "#ffffff"
  grid: "#eef1f5"
  line: "#dce1ea"
  muted: "#535d70"
  x-mark: "#aab2c0"
  guide: "#7d8698"
  text-yellow: "#8a5a00"
  text-blue: "#3e63dd"
  text-brown: "#8a5c36"
  paper-dark: "#11141b"
  grid-dark: "#1a1f2a"
  ink-dark: "#e8ebf2"
  muted-dark: "#a5adbc"
  line-dark: "#2c3341"
  x-mark-dark: "#4d5566"
  guide-dark: "#6f788b"
  text-yellow-dark: "#ffc93c"
  text-blue-dark: "#93a9ff"
  text-brown-dark: "#d6a67c"
  brand-mark-yellow: "#f5b700"
  game-navy: "#2a2f45"
  game-white: "#e4e8f0"
  game-blue: "#3e63dd"
  game-brown: "#9a6b43"
typography:
  display:
    fontFamily: "Galmuri11, Apple SD Gothic Neo, sans-serif"
    fontSize: "66px"
    fontWeight: 700
    lineHeight: 1.27
    letterSpacing: "0"
  headline:
    fontFamily: "Galmuri11, Apple SD Gothic Neo, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "Galmuri11, Apple SD Gothic Neo, sans-serif"
    fontSize: "33px"
    fontWeight: 700
    lineHeight: 1.3
  label:
    fontFamily: "Galmuri11, Apple SD Gothic Neo, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1
  micro:
    fontFamily: "Galmuri11, Apple SD Gothic Neo, sans-serif"
    fontSize: "11px"
    fontWeight: 700
  body:
    fontFamily: "system-ui, -apple-system, Apple SD Gothic Neo, Pretendard, Malgun Gothic, Noto Sans KR, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  body-small:
    fontFamily: "system-ui, -apple-system, Apple SD Gothic Neo, Pretendard, Malgun Gothic, Noto Sans KR, sans-serif"
    fontSize: "15px"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  half-cell: "12px"
  cell: "24px"
  cell-1-5: "36px"
  cell-2: "48px"
  cell-3: "72px"
  cell-4: "96px"
components:
  button-primary:
    backgroundColor: "{colors.fill-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "60px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "60px"
  button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  nav-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "48px"
  nav-cell-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  status-tag:
    backgroundColor: "{colors.fill-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "36px"
  status-tag-soon:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0 12px"
    height: "36px"
  fact-chip:
    textColor: "{colors.muted}"
    typography: "{typography.body-small}"
    padding: "0 10px"
    height: "36px"
  mail-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "18px 24px"
  box:
    backgroundColor: "{colors.paper}"
    padding: "20px 24px"
---

# Design System: 도이플레이트 DOHYPLATE

## Overview

**Creative North Star: "네모로직 문제지"**

사이트 전체가 퍼즐 잡지의 문제지 한 장이다. 배경은 흰 종이에 24px 모눈이다. 구조는 굵은 남색 선이 나눈다. 강조는 노랑으로 칠한 칸이 맡는다. 게임 회사 사이트의 기본형(대표 그림 배너와 게임 카드 줄)은 쓰지 않는다. 대신 풀린 칸이 회사 표식과 게임 캐릭터를 그린다.

밀도는 낮다. 한 화면에는 제목 하나, 격자 하나, 행동 버튼 1~2개가 놓인다. 모서리는 모두 직각이다. 그림자는 없다. 깊이는 선의 굵기(1px, 2px, 3px)와 칸의 색으로 만든다. 첫 화면의 격자는 화면에 들어오면 대각선 방향으로 칸마다 칠해진다. 움직임 줄이기를 켜면 칠한 상태로 바로 보인다.

글자는 두 벌이다. 제목·숫자·라벨·버튼은 픽셀 글꼴 Galmuri11 Bold다. 본문은 시스템 산세리프다. 이 묶음은 픽셀 벨트 게임과 같다.

**Key Characteristics:**
- 24px 모눈이 모든 페이지 배경이고 정렬 기준이다.
- 구조 선은 3px `ink`, 작은 칸 선은 2px, 칸 사이 선은 1px `line`이다.
- 모서리 반경은 0px이다. 그림자는 없다.
- Galmuri11 크기는 11px의 배수(11, 22, 33, 44, 66)만 쓴다.
- 노랑 `fill-yellow`는 칠한 칸이다. 버튼 하나, 상태 칸, 단계 번호, 링크 밑줄에만 쓴다.
- 밝은 화면과 어두운 화면을 모두 지원한다. 게임 그림 색은 어두운 화면에서도 바꾸지 않는다.

## Colors

색은 문제지의 재료 네 가지다. 종이, 모눈, 남색 잉크, 노랑 칠이다.

### Primary
- **칠한 칸 노랑** (`fill-yellow`): 주 버튼, 상태 칸, 단계 번호 칸, 체크 칸, 링크 밑줄, 텍스트 선택 배경에 쓴다. 픽셀 벨트 로고 C와 같은 노랑이다. 어두운 화면에서도 값이 같다. 노랑 위 글자는 어두운 화면에서도 항상 `ink`(밝은 값)로 고정한다.
- **남색 잉크** (`ink`): 글자, 모든 테두리, 칠한 남색 칸, 현재 메뉴 칸 배경, 마우스를 올린 버튼 배경에 쓴다. 어두운 화면에서는 `ink-dark`로 바뀐다.

### Secondary
- **노랑 계열 글자** (`text-yellow`): 흰 종이 위 노랑 정보다. 문제 번호 "No.1"과 노랑 칸 힌트 숫자에 쓴다. 어두운 화면에서는 `text-yellow-dark`로 바뀐다.
- **파랑·갈색 글자** (`text-blue`, `text-brown`): 게임 그림의 파랑·갈색 칸 힌트 숫자에만 쓴다. 어두운 화면에서는 `-dark` 값으로 바뀐다.

### Neutral
- **종이** (`paper`): 페이지 바탕, 머리글·바닥글, 카드, 버튼 기본 배경이다. 어두운 화면은 `paper-dark`다.
- **모눈** (`grid`): 24px 배경 모눈 선, 힌트 줄 배경, 게임 그림 칸 배경, 표 머리 배경이다. 어두운 화면은 `grid-dark`다.
- **칸 선** (`line`): 격자 칸 사이 1px 선, 사실 칩 테두리, 판권란과 표의 1px 구분선이다. 어두운 화면은 `line-dark`다.
- **보조 글자** (`muted`): 소개 문장, 사실 칩, 판권란 항목 이름, 준비 중인 게임 제목이다. 어두운 화면은 `muted-dark`다.
- **X 표시** (`x-mark`): 빈 칸의 X, 준비 중 카드의 점선 테두리다. 어두운 화면은 `x-mark-dark`다.
- **5칸 기준선** (`guide`): 격자 5칸마다 긋는 2px 선이다. 노랑·남색·흰 칸 어디서나 보이는 값이다. 어두운 화면은 `guide-dark`다.

### Fixed colors
- **회사 표식 노랑** (`brand-mark-yellow`): 머리글 2×2 표식의 왼쪽 위·오른쪽 아래 칸에만 쓴다. 나머지 두 칸은 글자색이다.
- **게임 팔레트** (`game-navy`, `game-white`, `game-blue`, `game-brown`): 게임 그림(벨티) 칸 색이다. `puzzle.js`의 `PAL`이 정의한다.

### Named Rules
**The Fixed Game Palette Rule.** 게임 그림의 칸 색은 어두운 화면에서도 게임 팔레트 값 그대로 둔다. 힌트 숫자 색만 화면 모드를 따른다.

**The Ink On Yellow Rule.** 노랑 칸 위 글자는 화면 모드와 관계없이 `ink`(#191f2c)다.

## Typography

**Display Font:** Galmuri11 Bold (`/fonts/Galmuri11-Bold.woff2`, SIL OFL, 대체 Apple SD Gothic Neo)
**Body Font:** 시스템 산세리프 (system-ui, Apple SD Gothic Neo, Pretendard, Malgun Gothic, Noto Sans KR)

**Character:** 픽셀 글꼴이 문제지의 숫자와 제목을 맡는다. 시스템 글꼴이 긴 글을 맡는다.

### Hierarchy

| 역할 | 글꼴 | 데스크톱 | 560px 이하 | 쓰는 곳 |
|---|---|---|---|---|
| Display | Galmuri11 | 66px / 1.27 | 44px / 1.3 | 첫 화면·게임 페이지 h1 |
| Headline | Galmuri11 | 44px / 1.3 | 33px | 섹션 h2, 게임 카드 h3, 문서 h1 |
| Title | Galmuri11 | 33px / 1.3 | 22px (메일 칸) | 두 열 h2, 메일 칸 |
| Label | Galmuri11 | 22px / 1 | 22px | 버튼, 메뉴, 상태 칸, 힌트 숫자, 문서 h2·h3, 브랜드 |
| Micro | Galmuri11 | 11px | 11px | 격자 크기 표시(15×15), 판권란 항목 이름, 휴대폰 힌트 숫자 |
| Body | 시스템 | 17px / 1.7 | 16px | 본문. 소개 문장은 20px(휴대폰 17px), 최대 30em |
| Body small | 시스템 | 15px | 15px | 사실 칩, 바닥글, 표 |

- 본문은 `word-break: keep-all`이다. 한국어 단어가 줄 끝에서 잘리지 않는다.
- 제목 글자 간격은 0이다.

### Named Rules
**The Eleven Rule.** Galmuri11은 11px 픽셀 글꼴이다. 크기는 11의 배수(11, 22, 33, 44, 66px)만 쓴다. 다른 크기에서는 픽셀이 흐려진다.

**The No Eyebrow Rule.** 제목 위에 작은 분류 라벨을 두지 않는다. 게임의 분류와 상태는 제목 앞 번호("No.1")와 사실 칩 줄의 첫 칩(상태 칸)이 맡는다.

## Layout

- **모듈:** 한 칸은 `--cell` 24px이다. body 배경 모눈은 24px 간격이고, 화면 가운데 기준(`calc(50% + 12px)`)으로 맞춰 `.wrap` 가장자리와 겹친다.
- **컨테이너:** 최대 폭 1152px(48칸), 좌우 안쪽 여백 16px이다. 문서 페이지 본문은 최대 760px이다.
- **큰 간격:** 섹션과 첫 화면 간격은 12px의 배수다. 섹션 위아래 72px(휴대폰 48px), 첫 화면 위 72px·아래 96px, 첫 화면 두 열 사이 72px, 게임 카드 사이 24px이다.
- **작은 간격:** 칸 안쪽 여백은 8, 10, 12, 16, 24px을 쓴다.
- **구분:** 섹션마다 위에 3px `ink` 선을 긋는다. 페이지가 문제지의 칸들로 나뉜다.
- **첫 화면:** 왼쪽에 제목·소개·버튼, 오른쪽에 네모로직 격자다.
- **반응형:**

| 폭 | 바뀌는 것 |
|---|---|
| 960px 이하 | 첫 화면·게임 카드·바닥글·두 열이 한 열이 된다. 격자는 가운데 정렬. 게임 그림 칸 테두리가 왼쪽에서 위로 옮겨 간다 |
| 560px 이하 | 본문 16px. 제목 44px. 격자 칸 18px·힌트 11px(게임 페이지 격자는 30px·22px). 스크린샷 줄이 가로 스크롤(62% 폭, scroll-snap)이 된다. 스크린샷 테두리 2px |

### Named Rules
**The Cell Module Rule.** 새 요소의 크기와 간격은 24px 칸이나 그 절반(12px)의 배수로 잡는다. 버튼 높이 60px, 메뉴 칸 48px, 상태 칸 36px, 단계 번호 칸 48px이 이 규칙을 따른다.

## Elevation & Depth

이 시스템은 평면이다. 그림자는 하나도 없다. 깊이는 선 굵기와 칸 색으로 만든다. 3px `ink` 선이 구조(머리글, 섹션, 카드, 격자 바깥, 버튼)를 나눈다. 2px 선이 작은 칸(메뉴, 상태 칸, 문서 h2 위 선, 5칸 기준선)을 나눈다. 1px `line`이 칸 사이를 나눈다. 바탕보다 한 단계 들어간 곳은 `grid` 색으로 채운다.

### Named Rules
**The Flat Paper Rule.** `box-shadow`와 `text-shadow`를 쓰지 않는다. 종이 위의 잉크에는 그림자가 없다.

## Shapes

모든 모서리는 직각(0px)이다. 기본 형태는 정사각형 칸이다. 테두리 굵기는 세 단계다.

| 굵기 | 색 | 쓰는 곳 |
|---|---|---|
| 3px | `ink` | 머리글 아래, 섹션 위, 바닥글 위, 게임 카드, 격자 바깥, 버튼, 메일 칸, 상자, 표, 스크린샷, 아이콘 |
| 2px | `ink` | 메뉴 칸, 상태 칸, 체크 칸, 문서 h2 위 선, 판권란 위 선 |
| 2px | `guide` | 격자 5칸 기준선 |
| 1px | `line` | 격자 칸 사이, 힌트 줄, 판권란·표 구분선 |

- 아이콘은 11×11 픽셀 SVG(`shape-rendering="crispEdges"`)다. 화살표와 편지 두 개가 있다.
- 준비 중인 것은 점선(`dashed`) `x-mark` 테두리로 그린다. 덜 풀린 문제처럼 보인다.

### Named Rules
**The Five-Cell Guide Rule.** 네모로직 격자는 5칸마다 2px `guide` 선을 긋는다. 맨 끝 줄에는 긋지 않는다.

## Components

### Buttons
격자 칸 하나를 누르는 느낌이다.
- **Shape:** 직각, 3px `ink` 테두리, 높이 60px(휴대폰 56px), 좌우 24px(휴대폰 14px).
- **Primary:** `fill-yellow` 바탕에 `ink` 글자. 한 화면에 하나만 둔다.
- **Secondary:** `paper` 바탕에 `ink` 글자.
- **Hover:** 두 버튼 모두 `ink` 바탕, `paper` 글자로 뒤집힌다(0.15초 ease-out).
- **Active:** 눌린 칸처럼 납작해진다(`scale(1.03, .92)`, 0.06초). 놓으면 탄성 곡선(`cubic-bezier(.34, 1.56, .64, 1)`, 0.18초)으로 돌아온다. 움직임 줄이기에서는 끈다.
- **Focus:** 모든 요소에 3px `ink` 윤곽선, 3px 띄움.
- 오른쪽 화살표 아이콘은 22px다.

### Navigation
- 머리글은 모든 페이지에 같은 HTML로 들어간다. 왼쪽에 2×2 표식과 "DOHYPLATE"(22px), 오른쪽에 메뉴 칸이다.
- 메뉴는 붙은 칸 줄이다. 칸마다 2px `ink` 테두리, 겹치게 `margin-left: -2px`, 높이 48px(휴대폰 44px)이다.
- 메뉴 항목은 "게임", "문의", "EN"이다. 영어 페이지는 "KO"로 돌아간다.
- Hover는 `fill-yellow` 칸이다. 현재 페이지는 `ink` 칸에 `paper` 글자다.
- 머리글 아래에 3px `ink` 선이 있다. 첫 요소는 "본문으로 건너뛰기" 링크다(포커스하면 노랑 칸으로 보인다).

### Chips (상태 칸과 사실 칩)
- **상태 칸:** 사실 칩 줄의 첫 칸이다. `fill-yellow` 바탕, 2px `ink` 테두리, Galmuri 22px, 높이 36px다. 내용은 "출시 준비 중" 같은 상태다.
- **준비 중 상태 칸:** 투명 바탕, 2px 점선 `x-mark` 테두리, `muted` 글자.
- **사실 칩:** 2px `line` 테두리, 시스템 15px `muted` 글자, 높이 36px다. 지역 수, 그림 수, 출시 플랫폼을 쓴다.

### Cards / Containers
- **게임 카드:** 3px `ink` 테두리, `paper` 바탕, 직각, 두 열(정보 | 그림)이다. 정보 쪽 안쪽 여백 36px(휴대폰 24px)이다. 그림 쪽은 `grid` 바탕이고 3px 선으로 나뉜다.
- **대표 게임 카드:** 한 열이다. 그림 쪽이 아래로 가고 스크린샷 3장을 24px 간격으로 놓는다.
- **준비 중 카드(dim):** 테두리가 점선 `x-mark`, 제목과 번호가 `muted`, 그림 칸 바탕이 투명하다. 덜 풀린 격자(`data-reveal`)와 "아직 푸는 중이에요." 문장을 둔다.
- **상자:** 문서 안의 강조 영역이다. 3px `ink` 테두리, 안쪽 20px 24px(휴대폰 16px)이다.
- **표:** 3px `ink` 바깥 테두리, 1px `line` 칸 선, 머리 칸 `grid` 바탕, 15px 글자다. 좁은 화면에서는 가로 스크롤 상자에 넣는다.

### Mail Cell
- 메일 주소 자체가 큰 칸이다. 3px `ink` 테두리, Galmuri 33px(휴대폰 22px), 편지 아이콘 33px다.
- Hover는 `fill-yellow` 칸이다.

### Numbered Problems (게임 제목)
- 게임 제목은 문제 번호로 시작한다. "No.1 픽셀 벨트"처럼 쓴다.
- 번호 색은 `text-yellow`다. 준비 중 게임은 `muted`다.
- 최신 게임이 가장 진하다. 덜 된 게임은 옅고 점선이다.

### Steps and Ticks
- **단계:** 번호 칸은 48px 정사각형, 3px `ink` 테두리, `fill-yellow` 바탕, Galmuri 22px 숫자다.
- **체크 목록:** 항목 앞에 16px 노랑 칸, 2px `ink` 테두리다.

### Nonogram Grid (signature)
- `puzzle.js`가 `data-art` 문자열에서 힌트 숫자와 칸을 만든다. 장식이라 `aria-hidden`이다.
- 칸 크기는 `--size`다. 첫 화면 30px, 게임 페이지 40px, 휴대폰 18px(게임 페이지 30px)이다. 이 크기는 24px 페이지 모듈과 별개다.
- 바깥 3px `ink` 테두리, 칸 사이 1px `line`, 5칸마다 2px `guide`다.
- 칠한 칸은 `PAL` 색, 빈 칸은 `x-mark` X다. 힌트 줄은 `grid` 바탕에 22px 숫자이고, 숫자 색은 칸 색을 따른다.
- 왼쪽 위 모서리에 격자 크기(예: 15×15)를 11px `muted`로 쓴다.
- 등장: 화면에 35% 들어오면 칸이 대각선 순서로 칠해진다. 칸마다 28ms 지연, 0.32초 `cubic-bezier(.16, 1, .3, 1)`, 크기 15%에서 시작한다. X는 120ms 뒤에 나타난다.

### Footer
- 바닥글은 모든 페이지에 같은 HTML로 들어간다. 퍼즐 잡지의 판권란이다.
- 위에 3px `ink` 선, 안쪽 48px 위·60px 아래, 15px 글자다.
- 왼쪽은 판권란 정의 목록이다(상호, 대표, 사업자등록번호, 메일). 항목 이름은 Galmuri 11px `muted`, 칸 아래 1px `line`이다.
- 오른쪽은 개인정보처리방침·고객 문의 링크와 "© 2026 DOHYPLATE"다.

## Do's and Don'ts

### Do:
- **Do** 크기와 간격을 24px 칸이나 12px 반 칸의 배수로 잡는다.
- **Do** Galmuri11을 11, 22, 33, 44, 66px로만 쓴다.
- **Do** 구조 테두리는 3px `ink`, 작은 칸은 2px로 긋는다.
- **Do** 네모로직 격자는 5칸마다 2px `guide` 선을 긋는다.
- **Do** 게임 그림 칸은 어두운 화면에서도 게임 팔레트 그대로 둔다.
- **Do** 게임은 "No.n" 번호로 시작하고, 상태를 사실 칩 줄의 첫 칸에 둔다.
- **Do** 새 페이지에 머리글(표식, DOHYPLATE, 메뉴 칸)과 바닥글(판권란, 링크, 저작권)을 그대로 복사해 넣는다.
- **Do** 노랑 칸 위 글자는 `#191f2c`로 고정한다.

### Don't:
- **Don't** 모서리를 둥글게 하지 않는다(반경 0px).
- **Don't** 그림자를 쓰지 않는다.
- **Don't** 제목 위에 작은 분류 라벨(eyebrow)을 두지 않는다.
- **Don't** Galmuri11을 11의 배수가 아닌 크기로 쓰지 않는다.
- **Don't** 대표 그림 배너와 게임 카드 줄로 된 게임 회사 사이트 기본형을 쓰지 않는다.
- **Don't** 노랑 주 버튼을 한 화면에 두 개 이상 두지 않는다.
