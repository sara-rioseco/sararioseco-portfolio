export const toTitleCase = (str: string): string =>
  str
    .match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    )!
    .map((x: string) => x.slice(0, 1).toUpperCase() + x.slice(1))
    .join(' ');
