export default function utils() {
  const toTitleCase = (s: string): string =>
    s
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!
      .map((x: string) => x.slice(0, 1).toUpperCase() + x.slice(1))
      .join(' ');

  const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

  const removeHyphens = (s: string): string => s.replace('-', ' ');

  const isEmailValid = (e: string) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e);

  return { toTitleCase, cap, removeHyphens, isEmailValid };
}
