---
name: create-pr
description: Tworzy pull request na GitHubie z ustrukturyzowanym opisem według szablonu .github/pull_request_template.md. Użyj, gdy użytkownik chce utworzyć PR, wystawić zmiany do review lub napisze /create-pr.
---

# Tworzenie PR z ustrukturyzowanym opisem

Opis PR piszemy **po polsku** i zawsze według szablonu `.github/pull_request_template.md`.

## Kroki

1. **Sprawdź stan repozytorium**
   - `git status`: czy są niezacommitowane zmiany? Jeśli tak, zapytaj użytkownika, czy je zacommitować.
   - `git branch --show-current`: jeśli jesteśmy na `main`, utwórz nowy branch o opisowej nazwie (np. `add-bdot10k-tests`, `refactor-homepage`).

2. **Zbierz informacje o zmianach** (względem `main`)
   - `git log main..HEAD --oneline`: lista commitów
   - `git diff main...HEAD --stat`: zmienione pliki
   - `git diff main...HEAD`: szczegóły zmian

3. **Wypełnij szablon** `.github/pull_request_template.md`
   - **Opis zmian:** 1–3 zdania prostym językiem: co i dlaczego.
   - **Rodzaj zmiany:** zaznacz `[x]` tylko pasujące pozycje.
   - **Zakres testów:** w tabeli wpisz każdy nowy lub zmieniony test (`test('...')`): plik, nazwę testu i krótko, co sprawdza. Jeśli PR nie zmienia testów, wpisz „Brak zmian w testach”.
   - **Jak uruchomić:** jeśli dotyczy konkretnego pliku, podaj komendę z nim, np. `npx playwright test tests/geoportal.spec.ts`.
   - **Checklista:** sprawdź kod i zaznacz `[x]` tylko te punkty, które są faktycznie spełnione. Wyszukaj `test.only` i `page.pause()` w zmienionych plikach. Jeśli da się szybko uruchomić testy (`npx playwright test --project=chromium`), uruchom je i zaznacz pierwszy punkt tylko wtedy, gdy przeszły.
   - **Powiązane:** jeśli użytkownik podał link do zadania, wpisz go. W przeciwnym razie zostaw „—”.
   - Usuń komentarze `<!-- ... -->` z gotowego opisu.

4. **Tytuł PR:** krótki, po polsku, w trybie rozkazującym, np. „Dodaj testy wyszukiwarki działek”.

5. **Utwórz PR**
   - `git push -u origin <branch>`
   - Zapisz opis do pliku tymczasowego i użyj: `gh pr create --base main --title "<tytuł>" --body-file <plik>`

6. **Podsumuj** użytkownikowi: link do PR oraz checklistę punktów, które NIE zostały spełnione (jeśli są).
