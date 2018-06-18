# javascript-calculator

## Installation

1. Klona ner projektet:
```bash
git clone https://github.com/jesperorb/javascript-calculator
```
2. Navigera till mappen
```
cd javascript-calulcator
```
3. Öppna projektet i din editor och börja koda. Det kan vara en bra idé att göra commits ibland för att få in känslan för det men det är inget krav.

## Arbetsflöde

Uppgiften ska utföras i grupper av 3 personer och dessa är kraven för arbetet:

* Enbart en person får skriva koden i taget och resterande 2 personer ska sitta/stå bakom och ge stöd.
* De andra två personerna ska under tiden den skrivande personen skriver koden komma med feedback om vad som skulle kunna göra med koden och hålla koll på eventuella fel som skulle kunna uppstå. Det är även ok att stanna upp och diskutera eventuella struktur/sätt att skriva koden.
* Var **10e minut** ska ni byta ut den personen som skriver kod. Personen som nyss skrev kod ska alltså inta en feedback-roll och en ny person i gruppen får sätta sig ner och koda.


## Uppgift

1. Skapa en miniräknare. Ni har funktionernas namn redan skapade i `script.js`. Ni ska fylla ut dessa funktioner så att de gör vad namnet antyder. Börja med att varje funktion kan lägga ihop 2 värden och om tid finns, utöka så att varje funktion kan ta emot fler värden än 2. Det är fritt att ta er "friheter" med koden och ändra som ni tycker att det borde vara.

2. `memory` är tänkt att lagra alla föregående beräkningar. Implementera så att att det finns en minnesfunktion om tid finns.

3. `calculate` är en funktion som ska kalla på antingen `add`, `subtract`,`multiply` eller `divide` baserat på om vi använt `+`, `-`, `*` eller `/` som tecken för att göra beräkningen.