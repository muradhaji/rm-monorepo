# Portal Application Documentation

## 1. Pages Overview

| Route             | Description                                  | Guard(s)  | Resolver(s)    | Feature Module             |
| ----------------- | -------------------------------------------- | --------- | -------------- | -------------------------- |
| `/login`          | Fake sign-in page (stores token + role)      | None      | None           | `auth-feature`             |
| `/characters`     | Characters list (pagination, search by name) | AuthGuard | ListResolver   | `characters-list-feature`  |
| `/characters/:id` | Character details + related episodes         | AuthGuard | DetailResolver | `character-detail-feature` |
| `/`               | Redirects to `/characters`                   | AuthGuard | None           | `characters-list-feature`  |
| `/**`             | Not Found page                               | None      | None           | `shared/ui`                |

## 2. UI Kit Selection

### Comparison Table

| Library          | Pros                                                                 | Cons                                   | Used By          |
| ---------------- | -------------------------------------------------------------------- | -------------------------------------- | ---------------- |
| Taiga UI         | Modern, modular, tree-shakable, great accessibility, customizable UI | Smaller ecosystem, less StackOverflow  | OSS, Enterprise  |
| Angular Material | Official, well-documented, accessible, mature, themable              | Limited advanced components, common UI | Google, Many OSS |
| PrimeNG          | Rich components, themes, flexible, good docs                         | Heavier bundle, less native feel       | PrimeTek, OSS    |

### Decision & Justification (ADR)

**Chosen:** Taiga UI

- Rationale: Taiga UI offers a modern, modular, and highly customizable component set with excellent accessibility and tree-shaking support. Its design and flexibility are well-suited for a modular Nx monorepo and SPA architecture. While Angular Material is more widely adopted, Taiga UI provides a fresher look and more advanced UI patterns out of the box. PrimeNG is feature-rich but heavier and less aligned with the project's design goals.

## 3. Localization (i18n) Library Selection

### Comparison Table

| Library       | Pros                                                | Cons                                  | Used By         |
| ------------- | --------------------------------------------------- | ------------------------------------- | --------------- |
| Transloco     | Runtime switching, feature-based, good docs, active | Extra dependency, learning curve      | OSS, Enterprise |
| ngx-translate | Mature, runtime switching, easy to use              | Less Angular 15+ focus, legacy issues | OSS             |
| Angular i18n  | Official, compile-time, robust                      | No runtime switching, static only     | Google, OSS     |

### Decision & Justification (ADR)

**Chosen:** Transloco

- Rationale: Supports runtime language switching, feature-based translation files, and is actively maintained. ngx-translate is mature but less aligned with modern Angular, and Angular i18n lacks runtime switching, which is a hard requirement.

## 4. Architecture Map

- Modular Nx monorepo: feature, data-access, shell, ui, util libraries per domain.
- Lazy-loaded routes, guards, resolvers, interceptors as described above.
- UI kit and i18n applied consistently across all features.

## 5. Setup & Running

```sh
npm install
nx serve portal
```

## 6. Screenshots

Will be added soon.

## 7. References

- [Rick & Morty API](https://rickandmortyapi.com/)
- [Taiga UI](https://taiga-ui.dev/)
- [Transloco](https://jsverse.gitbook.io/transloco/)

---

For more details, see project and feature library READMEs.
