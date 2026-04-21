# Instrukcja Pracy

Ten plik służy do ustalania zasad współpracy w tym projekcie.

## Cel

Tutaj dodajesz instrukcje, ograniczenia i preferencje dotyczące mojej pracy.

## Proponowany format wpisów

- Zakres: czego dotyczy zasada.
- Reguła: czego mam przestrzegać.
- Priorytet: niski / średni / wysoki.
- Przykład: opcjonalny przykład poprawnego działania.

## Aktualne ustalenia

- Utrzymywać katalog `logs` jako miejsce na zasady pracy i dziennik działań.

## Zasady Dodawania Logów

- Każda istotna zmiana w projekcie powinna zostać zapisana w pliku `logs/logi.md`.
- Log należy dodać po wykonaniu zmiany, a nie przed.
- Każdy wpis musi mieć unikalne `ID`.
- Każdy wpis musi mieć rzeczywisty `Timestamp` z momentu dodania wpisu.
- Jeśli dokładny czas wcześniejszego działania nie jest znany, można użyć aktualnego czasu z dopiskiem `retroaktywnie`.
- Opis `Działania` powinien być krótki i konkretny.
- Opis `Wynik` powinien mówić, co faktycznie zostało osiągnięte.

## Format Pliku Logów

Plik `logs/logi.md` powinien zachowywać poniższą strukturę:

```md
# Logi Pracy

## Format logów

- ID: unikalny identyfikator wpisu
- Data: YYYY-MM-DD
- Timestamp: YYYY-MM-DD HH:MM:SS
- Zadanie: krótki opis zadania
- Działania: co zostało sprawdzone lub zmienione
- Wynik: efekt pracy

## Wpisy

- ID: LOG-YYYYMMDD-001
- Data: YYYY-MM-DD
- Timestamp: YYYY-MM-DD HH:MM:SS
- Zadanie: krótki opis zadania
- Działania: co zostało sprawdzone lub zmienione
- Wynik: efekt pracy
```
