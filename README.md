# 개인 프로필 웹사이트

Node.js 22 이상에서 아래 명령으로 실행합니다. 외부 패키지가 없어 `npm install`은 필요하지 않습니다.

```powershell
npm start
```

브라우저에서 `http://localhost:3000`을 여세요. 종료하려면 터미널에서 `Ctrl+C`를 누릅니다. `npm run dev`도 같은 서버를 실행하며, 파일 수정 후 브라우저를 새로고침하면 반영됩니다.

포트가 사용 중이라면 PowerShell에서 다음처럼 변경할 수 있습니다.

```powershell
$env:PORT = "3001"
npm start
```

React, Next.js 없이 기존 HTML, CSS, JavaScript를 그대로 제공합니다. 서버는 Node.js 기본 모듈만 사용하며 로컬 컴퓨터에서만 접속할 수 있습니다.

- 메뉴 및 버튼: 해당 영역으로 이동, 현재 영역 메뉴 강조
- 프로젝트 카드: `projects/`의 예시 상세 페이지로 이동
- 이메일: 기본 메일 앱 작성창 열기, 주소 복사 지원
- 반응형: 데스크톱 3열, 태블릿 2열, 모바일 1열 프로젝트 배치

이름, 소개, 전문 분야, 프로젝트명과 이메일은 제공된 정보를 반영했습니다. 사진, 학력, 경력, 프로젝트 상세 설명과 소셜 링크는 예시입니다. `index.html`에서 내용과 `href`를 수정하세요. 프로젝트 내용은 `projects/`에서, 디자인은 `styles.css`에서 수정할 수 있습니다.

Stitch 원본은 `stich-export/code.html` 및 `DESIGN.md`입니다. 제공된 `screen.png`는 정상 이미지가 아닙니다. 원본 외부 이미지가 로드되지 않으면 로컬 SVG 예시 이미지가 표시됩니다. Google Fonts 연결이 없으면 시스템 글꼴을 사용합니다.

## 폴더 구성

```text
index.html           # 시작 페이지 (기존 위치 유지)
styles.css           # 기존 디자인
script.js            # 메뉴 및 이메일 복사
image-fallback.js    # 이미지 대체 처리
assets/              # 이미지
projects/            # 프로젝트 상세 페이지
scripts/             # Node.js 로컬 서버 및 정적 파일 빌드
stich-export/        # Stitch 원본 참고 자료 (배포 제외)
dist/                # 생성되는 배포 전용 정적 파일 (Git 제외)
package.json         # 실행 명령; 외부 의존성 없음
vercel.json          # Vercel 정적 배포 설정
```

## 정적 배포 준비

```powershell
npm run build
npm run preview
```

빌드는 사이트 파일만 `dist/`에 원래 경로와 내용 그대로 복사합니다. 기존 `dist/`는 빌드 시 다시 생성됩니다. 미리보기는 `http://localhost:3000`에서 배포 결과를 제공합니다. 먼저 실행 중인 로컬 서버를 종료하거나 다른 `PORT`를 사용하세요.

Vercel에서 이 프로젝트 저장소를 가져오면 `vercel.json`을 통해 Framework Preset은 **Other**, Build Command는 **npm run build**, Output Directory는 **dist**로 설정됩니다. Vercel에는 정적 파일만 배포되며 로컬 Node.js 서버 실행은 필요하지 않습니다. `.html` 프로젝트 링크는 유지합니다.

설정 참고: [Vercel 공식 문서](https://vercel.com/docs/project-configuration/vercel-json).

이메일 작성창은 기기에 설정된 메일 앱을 사용합니다.
