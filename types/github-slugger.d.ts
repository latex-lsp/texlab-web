declare class GithubSlugger {
  reset(): void;
  slug(value: string, maintainCase?: boolean): string;
}

export default GithubSlugger;
