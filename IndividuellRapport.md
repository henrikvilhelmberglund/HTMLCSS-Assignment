# HTML och CSS Individuell rapport - Henrik Berglund (FEND22)

*Skriv en rapport kring arbetsprocessen som besvarar följande frågor:*

> *Hur såg arbetsprocessen ut? Hur planerades arbetet, hur delegerades uppgifter, använde ni er utav par/mobprogrammering eller delades allt upp etc.*

Jag arbetade själv så jag gjorde allt själv. Det känns som det hade varit smidigare att vara flera men jag ville inte dra in folk och tvinga dem att använda Svelte och Tailwind som jag ville prova på i mer detalj.

> *Hur väl lyckades ni förhålla er till er wireframe/mockup? Om ni frångick från den, motivera varför.*

För mig var min wireframe mest användbar för att få en idé hur jag skulle dela upp sidan i stora drag och för att bestämma en viss layout i början. Jag hade den mest i bakhuvudet och refererade den inte så mycket när jag kodade för att:

1. Det var enklare att bara koda i samma program utan att växla hela tiden,
2. det var bara en wireframe och inte en mockup så den hade inga färger,
3. jag gjorde den mest för att ha en skiss för att ha något att börja med och sedan iterera fram en bättre design.

Jag hade nog följt den mer exakt om jag fick någons annan design men eftersom jag gjorde den själv valde jag att ändra på den där jag ville. I stora drag var den lik men jag ändrade på några saker för jag tyckte att det blev ett bättre resultat.

> *Vad var de största utmaningarna med projektet?*

Det tog längre tid än jag trodde för att jag arbetade själv och att jag lade till massor av saker som inte egentligen behövdes t.ex dark mode, funktioner för knappar etc.

En annan utmaning var att lösa buggar som var relaterade till Svelte och Tailwind och generellt att arbeta med dem för jag kan dem inte till 100% än. Annars gick det bra!

> *Vad har du lärt dig under projektets gång?*

Mycket!

Generella saker:
- Göra en wireframe och sedan (iallafall till en viss del) arbeta efter den
- Använda conventional commits i VSCode och skapa changelogs ifrån sådana commits
- Ta fram en färgprofil (inte jättevacker men) och en design, sedan variera designen en del mellan mobil/desktop

Svelte (och SvelteKit):
- Använda så kallade stores för att spara data som kan hämtas från hela sidan
- Använda olika plugins relaterade till Prettier och Tailwind
- Använda paket som ger mer funktionalitet, t.ex ett paket för att göra en store som kan användas med local storage
- Skapa en server side-funktion (som inte fungerar på Github pages)
- Skapa funktioner som kan användas för att göra webbsidan mer interaktiv, t.ex att kunna klicka i hur många stjärnor man vill ge sin review och sedan posta reviewen på sidan
- Leta efter (och fixa) konstiga buggar som gör att sidan inte längre bygger

Tailwind:
- Förstå varför Tailwind kan vara bra: man kan stänga av hjärnan lite för man behöver inte komma på namn för klasser, man behöver inte gå och leta efter CSS (den är på elementet eller props till en komponent)
- Använda prefix för responsivitet (md:) eller hover (hover:)/dark mode(dark:)
- Använda en Prettierplugin som automatiskt sorterar klasserna till en viss ordning (väldigt användbart)
- Lära mig fler klasser och träna mig på att använda dem/skilja på dem, t.ex text-lg för storlek men font-bold för bold 
- Kunna lägga till fonts/färger som sedan kan användas som klasser (fast jag valde att inte ha egna färger i detta projekt)

Antagligen lite mer men den här .pdfen blev redan väldigt lång så jag slutar här!