# Logi Pracy

Ten plik służy do zapisywania krótkiego dziennika działań wykonanych w projekcie.

## Format logów

Jeśli wpis jest uzupełniany po fakcie i dokładny czas nie jest znany, przy `Timestamp` dodawana jest adnotacja `retroaktywnie`.

- ID: unikalny identyfikator wpisu
- Data: YYYY-MM-DD
- Timestamp: YYYY-MM-DD HH:MM:SS
- Zadanie: krótki opis zadania
- Działania: co zostało sprawdzone lub zmienione
- Wynik: efekt pracy

## Wpisy

- ID: LOG-20260407-001
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:01:29 retroaktywnie
- Zadanie: Utworzenie katalogu `logs` oraz plików roboczych
- Działania: Dodano pliki `instrukcja-pracy.md` i `logi.md`
- Wynik: Przygotowano miejsce na zasady współpracy i dziennik pracy

- ID: LOG-20260407-002
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:01:29 retroaktywnie
- Zadanie: Dostosowanie menu nagłówka do mobile
- Działania: Dodano mobilne style dla `#navlist`, usunięto absolutne pozycjonowanie i floaty na małych szerokościach, ukryto dekoracyjne `span` w menu
- Wynik: Menu na mobile wyświetla się jako pionowa lista linków pod nagłówkiem

- ID: LOG-20260407-003
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:01:29 retroaktywnie
- Zadanie: Zmiana mobilnego menu na hamburger
- Działania: Dodano przycisk `#nav-toggle` do nagłówka, podłączono przełączanie klasy `menu-open` w `public/js/main.js`, zastąpiono mobilny układ stałej listy rozwijanym panelem
- Wynik: Na mobile menu jest ukryte domyślnie i rozwija się po kliknięciu przycisku `Menu`

- ID: LOG-20260407-004
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:03:17
- Zadanie: Naprawa działania hamburgera na mobile
- Działania: Usunięto zależność od JavaScript dla otwierania menu, zastąpiono przycisk układem `checkbox + label`, zaktualizowano selektory CSS i uproszczono `public/js/main.js`
- Wynik: Mobilne menu rozwija się po kliknięciu etykiety `Menu` bez potrzeby wykonywania skryptu

- ID: LOG-20260407-005
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:05:41
- Zadanie: Korekta pozycjonowania rozwijanego menu mobile
- Działania: Zmieniono mobilne style `#navlist` na pozycjonowanie absolutne pod nagłówkiem, dodano warstwy `z-index` dla przycisku i panelu
- Wynik: Otwarcie hamburgera nie zwiększa wysokości headera i menu wyświetla się jako nakładka

- ID: LOG-20260407-006
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:06:57
- Zadanie: Korekta warstw mobilnego menu
- Działania: Podniesiono `z-index` dla przycisku hamburgera, kontenera `#navlist`, elementów `li` i linków w mobilnym menu
- Wynik: Elementy rozwijanego menu powinny być wyświetlane nad zawartością strony

- ID: LOG-20260407-007
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:10:15
- Zadanie: Korekta nadpisywania styli mobilnego menu
- Działania: Dodano końcowe mobilne nadpisania po globalnych regułach `ul.links`, aby `#navlist`, `li` i linki zachowały blokowy układ po rozwinięciu
- Wynik: Globalne style list nie powinny już psuć widoczności i układu rozwijanego menu

- ID: LOG-20260407-008
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:10:53
- Zadanie: Wycofanie ostatniej poprawki mobilnego menu
- Działania: Usunięto końcowe nadpisania `@media` dodane po globalnych regułach `ul.links`
- Wynik: Przywrócono stan mobilnego menu sprzed ostatniej poprawki

- ID: LOG-20260407-009
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:14:27
- Zadanie: Refaktor `style.scss` do bardziej idiomatycznego SCSS
- Działania: Zagnieżdżono sekcje layoutu, nawigacji, bloków treści, formularzy i wybranych styli Drupalowych; zachowano istniejącą kolejność i znaczenie selektorów; wykonano weryfikację przez `npm run build`
- Wynik: Plik stylów ma bardziej czytelną strukturę SCSS i przechodzi build produkcyjny

- ID: LOG-20260407-010
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:17:17
- Zadanie: Audyt nieużywanych selektorów w `style.scss`
- Działania: Porównano selektory CSS z klasami i identyfikatorami występującymi w czterech plikach HTML oraz lokalnym JS; wyodrębniono duże bloki odziedziczonych styli Drupalowych prawdopodobnie nieużywanych w statycznym klonie
- Wynik: Potwierdzono, że znacząca część pliku stylów nie jest używana przez bieżący frontend i nadaje się do etapowego usunięcia

- ID: LOG-20260407-011
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:20:10
- Zadanie: Usunięcie martwych reguł z `style.scss`
- Działania: Wycięto nieużywane bloki odziedziczone po Drupalu i starym CMS, pozostawiono reguły layoutu, menu, resetu i stylów wykorzystywanych przez aktualne HTML-e; wykonano `npm run build`
- Wynik: Plik `style.scss` został skrócony z około 1088 do 533 linii, a build produkcyjny przeszedł poprawnie

- ID: LOG-20260407-012
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:22:23
- Zadanie: Korekta wysokości mobilnego menu
- Działania: Zmieniono mobilny `height` dla `#navlist` z `auto` na `fit-content`
- Wynik: Mobilne menu powinno dopasowywać wysokość do zawartości bez polegania na `auto`

- ID: LOG-20260407-013
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:23:21
- Zadanie: Korekta odstępu mobilnego menu
- Działania: Usunięto `margin-top` z mobilnego `#navlist`
- Wynik: Rozwijane menu przylega bez dodatkowego odstępu do dolnej krawędzi headera

- ID: LOG-20260407-014
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:25:39
- Zadanie: Przebudowa przycisku hamburgera
- Działania: Zastąpiono tekstowy `nav-toggle` ikoną z trzech kresek w czterech plikach HTML i dodano animację przejścia w `X` w `style.scss`
- Wynik: Mobilne menu korzysta z klasycznej ikony hamburgera z animowanym stanem otwarcia

- ID: LOG-20260407-015
- Data: 2026-04-07
- Timestamp: 2026-04-07 19:33:46
- Zadanie: Uporządkowanie konwencji mobile w `style.scss`
- Działania: Przeniesiono reguły mobile z jednego wspólnego bloku `@media` bezpośrednio do odpowiednich selektorów, m.in. `#header`, `#wrapper`, `#nav-toggle`, `#navlist`, `#left`, `.front #left`, `#right`, `.front #right`, `.toleft`, `.toright`, `#block-block-2`; wykonano `npm run build`
- Wynik: Style mobile są zagnieżdżone przy właściwych klasach i identyfikatorach, a build produkcyjny przechodzi poprawnie

- ID: LOG-20260414-001
- Data: 2026-04-14
- Timestamp: 2026-04-14 20:32:44
- Zadanie: Weryfikacja i domknięcie lokalnej implementacji Cufon
- Działania: Sprawdzono użycie Cufon w lokalnym klonie i na oryginalnej stronie; potwierdzono podmianę nagłówków `h1, h2`; poprawiono błędną ścieżkę do `cufon-yui.js` w `index.html`
- Wynik: Cufon ładuje się spójnie na wszystkich czterech lokalnych stronach i renderuje nagłówki zgodnie z oryginalnym wdrożeniem

- ID: LOG-20260414-002
- Data: 2026-04-14
- Timestamp: 2026-04-14 20:32:44
- Zadanie: Usunięcie błędu `"$ is not defined"`
- Działania: Zastąpiono zależność od jQuery w `public/js/main.js` równoważnym kodem w czystym JavaScript oraz usunięto nieużywane inline-snippety `jQuery.extend(Drupal.settings, ...)` z trzech podstron
- Wynik: Strony nie wymagają już jQuery do działania Cufon i pomocniczych korekt layoutu

- ID: LOG-20260414-003
- Data: 2026-04-14
- Timestamp: 2026-04-14 20:42:41
- Zadanie: Refaktor semantyczny HTML bez zmiany layoutu
- Działania: Zamieniono główne kontenery na `header`, `nav`, `main`, `article`, `aside`, `section`, `footer`; zastąpiono mobilny `label + checkbox` przyciskiem `button` sterowanym przez JS; poprawiono część nagłówków wewnątrz treści i dodano `title` do osadzonych map
- Wynik: Dokumenty mają lepszą semantykę i dostępność przy zachowaniu istniejących identyfikatorów, klas i układu wizualnego

- ID: LOG-20260414-004
- Data: 2026-04-14
- Timestamp: 2026-04-14 21:16:46
- Zadanie: Wdrożenie etapu 1 SEO technicznego
- Działania: Dodano unikalne `meta description` i `canonical` do czterech stron HTML; dodano podstawowe dane strukturalne `Physician` i `ContactPage` w JSON-LD; utworzono pliki `public/robots.txt` oraz `public/sitemap.xml`
- Wynik: Strona ma podstawowe sygnały SEO technicznego dla indeksacji, kanonikalizacji i lepszego zrozumienia treści przez Google

- ID: LOG-20260414-005
- Data: 2026-04-14
- Timestamp: 2026-04-14 21:39:10
- Zadanie: Formatowanie plików HTML
- Działania: Sformatowano `index.html`, `oferta-medyczna.html`, `doswiadczenie-zawodowe.html` i `kontakt.html` przy użyciu `prettier`; przy okazji naprawiono błąd składni niedomkniętego linku telefonu w `doswiadczenie-zawodowe.html`
- Wynik: Wszystkie lokalne pliki HTML mają spójne formatowanie i poprawną składnię wymaganą przez formatter

- ID: LOG-20260414-006
- Data: 2026-04-14
- Timestamp: 2026-04-14 21:41:31
- Zadanie: Aktualizacja bloku kontaktowego na podstronach
- Działania: Skopiowano zaktualizowaną treść sekcji `#block-block-1` ze strony głównej do `oferta-medyczna.html` i `doswiadczenie-zawodowe.html`
- Wynik: Blok `Kontakt` na wskazanych podstronach jest zgodny z aktualną wersją ze strony głównej

- ID: LOG-20260414-007
- Data: 2026-04-14
- Timestamp: 2026-04-14 22:00:47
- Zadanie: Rozszerzenie niewidocznych elementów SEO technicznego
- Działania: Usunięto zduplikowane `meta http-equiv="Content-Type"` z plików HTML; dopracowano znaczniki `title` pod lokalne SEO; rozszerzono dane strukturalne na stronie głównej o `WebSite` i dodatkowe `availableService`; dodano `BreadcrumbList` w JSON-LD do podstron `oferta-medyczna.html`, `doswiadczenie-zawodowe.html` i `kontakt.html`
- Wynik: Strona ma czystsze metadane oraz pełniejsze sygnały SEO technicznego bez zmian widocznych w interfejsie

- ID: LOG-20260414-008
- Data: 2026-04-14
- Timestamp: 2026-04-14 22:05:09
- Zadanie: Dalsze wzmocnienie niewidocznych sygnałów SEO
- Działania: Dodano `meta robots`, zestaw metatagów `Open Graph` i `Twitter Card` do wszystkich stron; rozszerzono dane strukturalne strony głównej o `MedicalBusiness` powiązany z `Physician`
- Wynik: Strona ma pełniejsze metadane techniczne dla wyszukiwarek i udostępnień linków bez zmian w warstwie wizualnej

- ID: LOG-20260421-001
- Data: 2026-04-21
- Timestamp: 2026-04-21 19:54:46
- Zadanie: Dodanie konfiguracji `.gitignore` przed publikacją do Git
- Działania: Utworzono plik `.gitignore` z wykluczeniami dla `node_modules`, `dist`, katalogów lokalnych IDE i plików środowiskowych/logów; sprawdzono też, że katalog nie jest jeszcze repozytorium Git
- Wynik: Projekt jest przygotowany do inicjalizacji repozytorium i dodania plików do pierwszego commita bez zbędnych artefaktów lokalnych

- ID: LOG-20260421-002
- Data: 2026-04-21
- Timestamp: 2026-04-21 20:17:29
- Zadanie: Przygotowanie projektu do publikacji przez GitHub Pages
- Działania: Skonfigurowano `vite.config.js` z bazą `/md/` i wielostronicowym buildem dla czterech plików HTML; dodano workflow `.github/workflows/deploy.yml`; zweryfikowano lokalnie `npm run build`
- Wynik: Projekt buduje komplet stron do `dist` z poprawnymi ścieżkami zasobów pod adresem GitHub Pages repozytorium
