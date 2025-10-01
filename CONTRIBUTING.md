# 📚 Contributing Guide

이 저장소는 팀 공용 템플릿으로 사용됩니다.
일관된 코드 스타일과 커밋 메시지를 유지하기 위해 아래 규칙을 따라주세요.

---

## 🛠 개발 환경 준비

1. 저장소 클론 후 필수 의존성 설치:

   ```bash
   git clone <repo-url>
   cd project-template
   npm install
   ```

2. Husky hooks 활성화:

   ```bash
   npx husky install
   ```

3. VSCode/ Cursor 에서 `.vscode/extensions.json`에 정의된 추천 확장 설치
   - ESLint, Prettier, Clang-Format, Commit Message Editor 등

---

## ✨ 코드 스타일

- 모든 JS/TS/JSON/YAML/Markdown → **Prettier** 자동 포맷 적용
- C / C++ / Header 파일 → **Clang-Format (Allman 스타일)**
- 저장 시 자동 포맷 (`editor.formatOnSave: true`)

> ✅ `.editorconfig`와 `.vscode/settings.json` 덕분에 IDE 간 일관성이 보장됩니다.

---

## 📋 커밋 메시지 규칙

이 프로젝트는 **Conventional Commits** + **Emoji** 조합을 사용합니다.
(commitlint + husky로 자동 검증됩니다)

### ✅ 형식

```
<type>(<scope>): <emoji> <description>

<body>

<footer>
```

### ✅ 예시

```
feat(auth): ✨ add jwt refresh token support

- implemented refresh token rotation
- updated user session handling

Closes #42
```

```
chore: 🔧 update commitlint configuration and add husky script
```

### ✅ 허용 type

- `init` 🎉 : 초기 설정
- `feat` ✨ : 새로운 기능
- `fix` 🐛 : 버그 수정
- `docs` 📝 : 문서 변경
- `style` 🎨 : 코드 스타일 변경
- `refactor` ♻️ : 리팩토링
- `perf` ⚡️ : 성능 개선
- `test` ✅ : 테스트 추가/수정
- `build` 📦 : 빌드 관련
- `ci` 👷 : CI/CD
- `chore` 🔧 : 자잘한 작업
- `deps` ⬆️ : 의존성 업데이트
- `revert` ⏪ : 커밋 되돌리기
- `merge` 🔀 : 브랜치 병합
- `release` 🏷️ : 릴리즈
- `config` ⚙️ : 설정 변경
- `security` 🔒 : 보안 관련
- `assets` 🖼️ : 이미지/리소스
- `db` 🗄️ : 데이터베이스
- `i18n` 🌐 : 다국어/국제화
- `ux` 💄 : UX/UI 변경
- `hotfix` 🚑 : 긴급 수정
- `logging` 🔊 : 로그 관련
- `cleanup` 🧹 : 불필요한 코드/파일 정리

---

## 🔀 브랜치 전략

- `main` : 안정된 코드 (배포용)
- `feature/*` : 새로운 기능 개발
- `fix/*` : 버그 수정
- `chore/*` : 설정/빌드/도구 관련 작업

> PR은 반드시 **main**이 아닌 개별 브랜치에서 생성하세요.

---

## ✅ PR 가이드라인

1. 작은 단위로 커밋 & PR 생성
2. PR 설명에 관련 이슈 번호 기재 (`Closes #번호`)
3. CI/CD, commitlint 검사 통과 확인
4. 리뷰어가 approve 후 머지

---

## 🚀 자동화

- **Husky + Commitlint** → 잘못된 커밋 메시지 차단
- **lint-staged** → 커밋 전 자동 포맷팅
- **CI (GitHub Actions)** → 추후 commitlint / lint 검사 자동화 가능
