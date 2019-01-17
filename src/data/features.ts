interface FeatureTableEntry {
  name: string;
  latex: boolean;
  bibtex: boolean;
}

export const SERVER_FEATURES: FeatureTableEntry[] = [
  {
    name: 'Code completion',
    latex: true,
    bibtex: true,
  },
  {
    name: 'Hover',
    latex: true,
    bibtex: true,
  },
  {
    name: 'Signature help',
    latex: false,
    bibtex: false,
  },
  {
    name: 'Goto declaration',
    latex: false,
    bibtex: false,
  },
  {
    name: 'Goto definition',
    latex: true,
    bibtex: true,
  },
  {
    name: 'Goto type definition',
    latex: false,
    bibtex: false,
  },
  {
    name: 'Find references',
    latex: true,
    bibtex: true,
  },
  {
    name: 'Document highlights',
    latex: true,
    bibtex: false,
  },
  {
    name: 'Document symbols',
    latex: true,
    bibtex: true,
  },
  {
    name: 'Code action',
    latex: false,
    bibtex: false,
  },
  {
    name: 'Code lens',
    latex: false,
    bibtex: false,
  },
  {
    name: 'Document link',
    latex: true,
    bibtex: true,
  },
  {
    name: 'Document color',
    latex: false,
    bibtex: false,
  },
  {
    name: 'Document formatting',
    latex: false,
    bibtex: true,
  },
  {
    name: 'Rename',
    latex: true,
    bibtex: true,
  },
  {
    name: 'Folding',
    latex: true,
    bibtex: true,
  },
];
