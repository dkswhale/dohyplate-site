# 한국어 회사 소개·픽셀 벨트 페이지로 영어 페이지를 만든다. 한국어 페이지를 고친 뒤 실행한다: python3 tools/make-en.py
# 번역에 없는 한국어가 남으면 멈춘다. 문의·개인정보처리방침 영어판은 손으로 고친다(본문이 사실 기록이라).
import re, sys
T = {
 '바닥글 메뉴': 'Footer menu',
 '지원': 'Help',
 '언어': 'Language',
 '픽셀 벨트 플레이 영상: 캐릭터가 벨트를 돌며 같은 색 큐브를 지워요': 'Pixel Belt gameplay: characters move along the belt and clear cubes of their color',
 '픽셀 벨트 플레이 영상: 캐릭터를 벨트에 태워 조개 그림을 다 지워요': 'Pixel Belt gameplay: characters ride the belt and clear a shell picture',
 '스크롤': 'Scroll',
 '도이플레이트 DOHYPLATE': 'DOHYPLATE',
 '도이플레이트는 모바일 퍼즐·캐주얼 게임을 만드는 게임 개발사예요.': 'DOHYPLATE is a game studio in Korea. We make mobile puzzle and casual games.',
 '본문으로 건너뛰기': 'Skip to content',
 '주 메뉴': 'Main menu',
 '게임': 'Games',
 '문의': 'Contact',
 '소개': 'Introduction',
 '픽셀 벨트 장면: 벨트를 도는 캐릭터가 같은 색 큐브를 지워요': 'Pixel Belt scene: characters on the belt clear cubes of their color',
 '픽셀 벨트 장면: 벨트를 도는 캐릭터가 그림판의 같은 색 큐브를 쏴서 지워요': 'Pixel Belt scene: characters on the belt shoot and clear cubes of their color',
 '픽셀 벨트': 'Pixel Belt',
 '벨트로 색을 지우는 픽셀 퍼즐': 'A pixel puzzle with a conveyor belt',
 '출시 준비 중': 'Coming soon',
 '퇴근 탈출': 'Clock-Out Escape',
 '개발 중': 'In development',
 '20개 지역': '20 regions',
 '300개 그림': '300 pictures',
 '토스 · App&nbsp;Store · Google&nbsp;Play · 원스토어': 'Toss · App&nbsp;Store · Google&nbsp;Play · ONE&nbsp;store',
 '자세히 보기': 'Learn more',
 '지도 화면: 그림을 완성하면 섬에 색이 돌아와요': 'Map screen: each picture you complete brings color back to the island',
 '플레이 화면: 벨트를 도는 캐릭터가 같은 색 큐브를 지워요': 'Play screen: characters on the belt clear cubes of their color',
 '도감 화면: 모은 그림을 지역별로 봐요': 'Album screen: your pictures, sorted by region',
 '가제': 'Working title',
 '고객 문의': 'Support',
 '상호': 'Company',
 '도이플레이트 (DOHYPLATE)': 'DOHYPLATE (도이플레이트)',
 '대표': 'Representative',
 '김도형': 'Dohyung Kim',
 '사업자등록번호': 'Business reg. no.',
 '메일': 'Email',
 '픽셀 벨트 개인정보처리방침': 'Pixel Belt Privacy Policy',
 '픽셀 벨트 · 도이플레이트': 'Pixel Belt · DOHYPLATE',
 '벨트에 캐릭터를 태워 보내 픽셀 그림의 큐브를 같은 색끼리 지우는 퍼즐 게임이에요.': 'Send characters onto a conveyor belt and clear the cubes of a pixel picture, one color at a time.',
 '픽셀 벨트 소개': 'About Pixel Belt',
 '픽셀 벨트 아이콘': 'Pixel Belt icon',
 '섬 주민 37명': '37 islanders',
 '플레이 방법': 'How to play',
 '이렇게 플레이해요': 'Three steps',
 '플레이 화면: 대기열 캐릭터를 탭하면 벨트에 올라가요': 'Play screen: tap a character in the line to put it on the belt',
 '탭해서 벨트에 태워요': 'Tap to send',
 '대기열 맨 앞 캐릭터를 탭하면 그림 둘레의 벨트에 올라가요. 캐릭터 위 숫자는 남은 탄이에요.': 'Tap the first character in a line. It moves onto the belt around the picture. The number on a character shows its shots left.',
 '같은 색 큐브를 지워요': 'Clear matching cubes',
 '캐릭터는 벨트를 돌며 가장 바깥 큐브가 자기 색이면 쏴서 지워요. 그림을 다 지우면 섬에 색이 돌아와요.': 'The character moves along the belt. When the outermost cube has its color, it shoots and clears that cube. Clear the picture to bring color back to the island.',
 '그림을 모아요': 'Collect pictures',
 '20개 지역, 300개 그림을 도감에 모아요. 지역마다 얼음 큐브, 열쇠, 터널 같은 새 규칙이 나와요.': 'Collect 300 pictures from 20 regions in your album. Each region adds a new rule, such as ice cubes, keys, and tunnels.',
 '섬 주민': 'Islanders',
 '벨트를 함께 타는 주민 37명': '37 islanders ride the belt',
 '그림을 완성하며 만난 주민을 색 조각으로 되살리면, 벨트를 도는 캐릭터의 모습이 돼요.': 'You meet islanders as you complete pictures. Bring them back with color shards, and your characters on the belt take their look.',
 '주민 목록': 'Islanders',
 '안내': 'Information',
 '개인정보처리방침과 결제·환불 안내를 확인할 수 있어요.': 'Read the privacy policy and the payment and refund information.',
 '개인정보처리방침': 'Privacy Policy',
 '퇴근 탈출 개발 중 화면: 노을 진 빌딩 사이로 키보드 길이 길게 이어져요': 'Clock-Out Escape, in development: a long keyboard path runs between buildings at sunset',
 '개발 중 화면': 'In development',
 '모바일 게임 스튜디오': 'Mobile game studio',
 '퇴근 탈출 개발 중 화면: 직장인이 노을 진 키보드 길을 달려요': 'Clock-Out Escape, in development: an office worker runs along a keyboard path at sunset',
 '사무실 장애물 코스 3D 게임': 'A 3D office obstacle course',
 '결제·환불은 ': 'For payments and refunds, see ',
 '를 봐 주세요.': '.',
}
ASSETS = ('/img/', '/style.css', '/site.js', '/favicon', '/art.json')
def make(src, dst, ko_path):
    s = open(src, encoding='utf-8').read().replace('<html lang="ko">', '<html lang="en">', 1)
    # 언어 바꾸기 링크: EN → 한국어
    s = re.sub(r'<a href="[^"]*" lang="en">EN</a>', f'<a href="{ko_path}" lang="ko">한국어</a>', s)
    # 내부 링크에 /en 붙이기(자산·한국어 링크·hreflang 제외)
    def fix(m):
        url = m.group(1)
        if url.startswith(ASSETS) or url.startswith('/en/') or 'lang="ko"' in m.group(0): return m.group(0)
        return m.group(0).replace(f'href="{url}"', f'href="/en{url}"')
    s = re.sub(r'<a [^>]*href="(/[^"]*)"[^>]*>', fix, s)
    # 공유 정보: 대표 주소와 og:url은 영어 주소로, 언어는 en_US로
    en_url = 'https://dohyplate.com/en' + ko_path
    s = re.sub(r'(<link rel="canonical" href=")[^"]*(")', lambda m: m.group(1) + en_url + m.group(2), s)
    s = re.sub(r'(<meta property="og:url" content=")[^"]*(")', lambda m: m.group(1) + en_url + m.group(2), s)
    s = s.replace('<meta property="og:locale" content="ko_KR">', '<meta property="og:locale" content="en_US">')
    # 글: 글 조각(태그 사이 글, 속성 값)을 통째로 사전에서 찾아 바꾼다
    def sub(m):
        t = m.group(1) if m.group(1) is not None else m.group(2)
        out = T.get(t, t)
        return f'>{out}<' if m.group(1) is not None else f'="{out}"'
    s = re.sub(r'>([^<>]*[가-힣][^<>]*)<|="([^"]*[가-힣][^"]*)"', sub, s)
    left = [t for t in re.findall(r'>([^<>]*[가-힣][^<>]*)<|="([^"]*[가-힣][^"]*)"', s) for t in t if t and t not in ('한국어', 'DOHYPLATE (도이플레이트)')]
    if left: sys.exit(f'{src}: 번역 없음 {left}')
    open(dst, 'w', encoding='utf-8').write(s)
make('index.html', 'en/index.html', '/')
make('pixel-belt/index.html', 'en/pixel-belt/index.html', '/pixel-belt/')
print('영어 2페이지를 만들었어요')
