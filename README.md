# 🗂️ Dev Workspace Overview

이 디렉토리는 대주제별 프로젝트들을 모아 관리하는 작업 공간입니다.  
각 프로젝트는 독립적인 단위로 관리되며, `README.md`와 `claude.md`를 통해 설명과 맥락을 기록합니다.

---

## 📂 Directory Structure

- **embedded/**
  - MCU 및 임베디드 펌웨어 관련 프로젝트
  - 예: STM32, ESP32, FreeRTOS 기반 프로젝트
- **mobile/**
  - 모바일 앱 관련 프로젝트
  - Android / iOS / Flutter 기반 애플리케이션
- **ros2/**
  - 로보틱스 프로젝트
  - SLAM, Navigation, UWB Localization 등 ROS2 기반 연구 및 개발
- **web/**
  - 웹 서비스 및 프론트/백엔드 관련 프로젝트
  - 예: Next.js, NestJS, API 서버, 내부 관리 시스템
    - `artwa-docs/`: 내부 기술 문서 관리

---

## 📌 관리 규칙

1. **프로젝트 단위 폴더**에는 반드시 `README.md` 작성
   - 프로젝트 개요, 목적, 구조, 실행 방법 기록
2. **Claude 연동용 `claude.md`** 파일 작성
   - Claude와 연동할 때 필요한 프로젝트 요약, 맥락, 작업 로그 기록
3. **신규 프로젝트 추가 시**
   - 해당 프로젝트 폴더 생성 후 `README.md`, `claude.md` 추가
   - 이 최상위 `README.md`에도 프로젝트를 링크하여 업데이트

---

## ✅ 사용 예시

```bash
~/dev/
 ├─ embedded/
 │   ├─ stm32-can-logger/
 │   │   ├─ README.md
 │   │   └─ claude.md
 │   └─ esp32-uwb-anchor/
 │       ├─ README.md
 │       └─ claude.md
 ├─ mobile/
 │   └─ flutter-demo/
 │       ├─ README.md
 │       └─ claude.md
 ├─ ros2/
 │   └─ uwb-localization/
 │       ├─ README.md
 │       └─ claude.md
 └─ web/
     ├─ artwa-docs/
     │   ├─ README.md
     │   └─ claude.md
     └─ nextjs-dashboard/
         ├─ README.md
         └─ claude.md
```
