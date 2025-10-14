# CLAUDE.md — Project Operating Rules

## Project Context

- Repo: `project_template` 기반. JS/TS 위주, C/C++ 포맷은 clang-format 사용.
- Hooks: Husky + commitlint + lint-staged (prettier/eslint).
- Editor: VSCode/Cursor. 공통 스타일은 `.editorconfig`, `.prettierrc.json`, `.clang-format` 참조.

## Coding Standards

- JS/TS: ESLint + Prettier 규칙 우선. 자동 수정 가능한 건 수정 후 커밋.
- C/C++: `clang-format` 스타일 준수.
- 파일/폴더 명명: 소문자-kebab-case, 테스트는 `*.test.ts` 권장.

## Git & Commits

- 커밋 메시지: Conventional Commits (`feat:`, `fix:`, `chore:` …).
- 큰 변경 전 `plan.md`에 계획 → PR에 링크. 단위 커밋 작게.

## Agent Workflow

1. 변경 전 `plan.md` 갱신 (목표/작업/테스트 체크리스트).
2. 변경 대상 파일 목록 명시.
3. 구현 → 로컬 테스트/포맷 → 커밋.
4. PR 설명에 결정사항(`decisions.md`) 업데이트.

## Prompts

- “단계별 계획을 먼저 제시하고, 테스트/빌드 통과를 확인한 뒤 커밋 메시지까지 작성해.”
- “수정한 파일 diff 요약과 남은 TODO를 체크박스로 반환해.”

## Do / Don’t

- Do: 타입 안전성(가능하면 TS), 경계조건 테스트 추가.
- Don’t: 포맷/린트 에러 상태로 커밋하지 말 것.

## Commands

- 설치: `npm i`
- 포맷/린트: `npm run lint` / `npm run format`
- 프리커밋 훅 재설치: `npx husky install`
