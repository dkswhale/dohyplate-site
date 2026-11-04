# dohyplate.com

도이플레이트(DOHYPLATE) 회사 웹사이트. 정적 HTML·CSS만 쓴다. 빌드 도구가 없다.
계획: pixel-belt 저장소 `docs/plans/2026-11-03-company-website.md`.

## 페이지

| 주소 | 한국어 | 영어 |
|---|---|---|
| 회사 소개 | `/` | `/en/` |
| 픽셀 벨트 | `/pixel-belt/` | `/en/pixel-belt/` |
| 픽셀 벨트 개인정보처리방침 | `/pixel-belt/privacy/` | `/en/pixel-belt/privacy/` |
| 고객 문의 | `/support/` | `/en/support/` |

머리글과 바닥글은 페이지마다 같은 HTML이 들어 있다. 고칠 때 8개 파일을 모두 고친다.

## 구조

| 파일 | 내용 |
|---|---|
| `style.css` | 모든 페이지의 모양. 게임 화면과 같은 색(살구색 판, 남색 벨트, 노랑 버튼). 규칙은 `DESIGN.md` |
| `site.js` | 픽셀 벨트 장면, 주민 행렬, 주민 목록을 그린다. 데이터는 `art.json`. 움직임 줄이기면 영상을 멈춘다 |
| `art.json` | 게임 데이터(팔레트, 벨티, 주민 37명, 장면 그림 13개). `tools/export-art.mts`로 만든다 |
| `tools/make-en.py` | 한국어 회사 소개·픽셀 벨트 페이지로 영어 페이지를 만든다. 한국어를 고친 뒤 `python3 tools/make-en.py`. 문의·방침 영어판은 손으로 고친다 |
| `img/` | 픽셀 벨트 아이콘과 게임 화면 3장(WebP), 퇴근 탈출 아이콘·키보드 길 화면·달리기 영상(MP4, 2026-11-04) |
| `PRODUCT.md` | 사이트의 사실과 제약(방문자, 회사 정보, 쓰지 않을 것). 디자인 작업 전에 읽는다 |
| `DESIGN.md` | 디자인 규칙(색, 글꼴, 부품, 그림 다시 만들기) |
| `_config.yml` | GitHub Pages가 README·PRODUCT·DESIGN·tools를 웹페이지로 내보내지 않게 한다 |

## 로컬에서 보기

1. `python3 -m http.server 8000`을 실행한다.
2. `http://localhost:8000`을 연다.

## 공개 절차 (GitHub Pages)

**주의: Porkbun의 MX 레코드와 메일 전달 레코드를 지우지 않는다. 지우면 `ramon@dohyplate.com`으로 오는 인증 메일을 못 받는다.**

1. GitHub에 공개 저장소 `dkswhale/dohyplate-site`를 만든다.
2. 이 폴더를 push한다.
3. 저장소 Settings > Pages에서 Source를 `main` 브랜치 `/ (root)`로 정한다.
4. Custom domain에 `dohyplate.com`을 넣는다(`CNAME` 파일과 같은 값).
5. Porkbun DNS에 루트(`@`) A 레코드 4개를 넣는다: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
6. Porkbun DNS에 `www` CNAME → `dkswhale.github.io`를 넣는다.
7. Porkbun의 기본 주차(parking) A·ALIAS·CNAME 레코드가 있으면 지운다. MX·TXT(메일 전달)는 그대로 둔다.
8. 인증서가 나오면 Settings > Pages에서 Enforce HTTPS를 켠다.
9. Google Search Console에서 도메인 속성 `dohyplate.com`을 추가하고, 받은 TXT 레코드를 Porkbun에 넣는다.
10. Play Console 계정에 쓰는 Google 계정으로 Search Console 인증을 한다. 같은 계정이면 Play Console 웹사이트 인증이 자동 승인된다.

근거: [GitHub Pages 사용자 도메인](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Play Console 웹사이트 인증](https://support.google.com/googleplay/android-developer/answer/13205715).
