# Trafikskadetjänst – webbplats

Webbplatsen är byggd med [Eleventy](https://www.11ty.dev/) och genereras som en
statisk webbplats.

## Förutsättningar

- Node.js 18 eller senare
- npm

## Installation

```bash
npm ci
```

## Lokal utveckling

```bash
npm run dev
```

Eleventy startar då en lokal utvecklingsserver, normalt på
`http://localhost:8080/`.

## Produktionsbygge

```bash
npm run build
```

Den färdiga statiska webbplatsen skapas i katalogen `_site`.

## Ren verifiering

```bash
npm run check
```

Kommandot tar bort ett tidigare bygge och bygger sedan hela webbplatsen på nytt.

## Arbetsflöde för redesignen

Nästa version utvecklas på branchen `feature/redesign-v2`. Ändringar verifieras
lokalt innan de skickas till GitHub och senare slås ihop med `main`.
