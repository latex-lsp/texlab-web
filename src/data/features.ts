export type FeatureStatus =
  | 'implemented'
  | 'not-implemented'
  | 'not-applicable';

interface FeatureTableEntry {
  name: string;
  latex: FeatureStatus;
  bibtex: FeatureStatus;
}

export const SERVER_FEATURES: FeatureTableEntry[] = [
  {
    name: 'Code completion',
    latex: 'implemented',
    bibtex: 'implemented',
  },
  {
    name: 'Hover',
    latex: 'implemented',
    bibtex: 'implemented',
  },
  {
    name: 'Signature help',
    latex: 'not-implemented',
    bibtex: 'not-implemented',
  },
  {
    name: 'Goto declaration',
    latex: 'not-applicable',
    bibtex: 'not-applicable',
  },
  {
    name: 'Goto definition',
    latex: 'implemented',
    bibtex: 'implemented',
  },
  {
    name: 'Goto type definition',
    latex: 'not-applicable',
    bibtex: 'not-applicable',
  },
  {
    name: 'Find references',
    latex: 'implemented',
    bibtex: 'implemented',
  },
  {
    name: 'Document highlights',
    latex: 'implemented',
    bibtex: 'not-implemented',
  },
  {
    name: 'Document symbols',
    latex: 'implemented',
    bibtex: 'implemented',
  },
  {
    name: 'Code action',
    latex: 'not-implemented',
    bibtex: 'not-implemented',
  },
  {
    name: 'Code lens',
    latex: 'not-implemented',
    bibtex: 'not-implemented',
  },
  {
    name: 'Document link',
    latex: 'implemented',
    bibtex: 'implemented',
  },
  {
    name: 'Document color',
    latex: 'not-implemented',
    bibtex: 'not-implemented',
  },
  {
    name: 'Document formatting',
    latex: 'not-implemented',
    bibtex: 'implemented',
  },
  {
    name: 'Rename',
    latex: 'implemented',
    bibtex: 'implemented',
  },
  {
    name: 'Folding',
    latex: 'implemented',
    bibtex: 'implemented',
  },
  {
    name: 'Build*',
    latex: 'implemented',
    bibtex: 'implemented',
  },
  {
    name: 'Forward search*',
    latex: 'implemented',
    bibtex: 'not-applicable',
  },
];
