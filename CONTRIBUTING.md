# Project Template

이 저장소는 개발 프로젝트를 위한 공용 템플릿입니다.  
코드 스타일, 커밋 규칙, 에디터 설정이 포함되어 있어 팀/개인 작업 시 일관성을 유지할 수 있습니다.

---

## 📂 주요 기능

- **Husky + Commitlint**: 잘못된 커밋 메시지 자동 차단
- **Lint-Staged + Prettier + ESLint**: 커밋 전 자동 코드 포맷팅/검사
- **Clang-Format**: C/C++/헤더 파일 포맷 통일
- **VSCode 설정 공유**: `.vscode/settings.json` + 추천 확장
- **.editorconfig**: IDE 종류에 상관없이 동일한 코드 스타일 유지

---

## 🚀 시작하기

1. 저장소 클론

   ```bash
   git clone <repo-url>
   cd project-template
   npm install
   ```

2. Husky hooks 설치

   ```bash
   npx husky install
   ```

3. VSCode에서 추천 확장 설치 (`.vscode/extensions.json` 자동 팝업)

---

## 🤝 Contributing

이 저장소에 기여하고 싶으신 분은 [CONTRIBUTING.md](./CONTRIBUTING.md) 문서를 먼저 확인해주세요.
여기에는 **커밋 메시지 규칙, 브랜치 전략, PR 가이드**가 포함되어 있습니다.

---

## 📜 라이선스

MIT License
