---
path: '/docs/reference/configuration'
title: 'Configuration'
category: 'Reference'
order: 3
---

# Configuration

This document describes the configuration settings that the server will query from the extension.

---

## latex.build.executable

Defines the executable of the LaTeX build tool.

**Type:** `string`

**Default value:** `latexmk`

---

## latex.build.args

Defines additional arguments that are passed to the configured LaTeX build tool.

**Type:** `string[]`

**Default value:** `["-pdf", "-interaction=nonstopmode", "-synctex=1"]`

---

## latex.build.onSave

Build after saving a file.

**Type:** `boolean`

**Default value:** `false`

---

## latex.forwardSearch.executable

Defines the executable of the PDF previewer.
The previewer needs to support [SyncTeX](http://www.tug.org/TUGboat/tb29-3/tb93laurens.pdf).

**Type:** `string | null`

**Default value:** `null`

---

## latex.forwardSearch.args

Defines additional arguments that are passed to the configured previewer to perform the forward search.
The placeholders `%f, %p, %l` will be replaced by the server.

**Placeholders:**

- `%f`: The path of the current TeX file.
- `%p`: The path of the current PDF file.
- `%l`: The current line number.

**Type:** `string[]`

**Default value:** `[]`

---

## latex.lint.onSave

Lint using [chktex](https://www.nongnu.org/chktex/) after saving a file.

**Type:** `boolean`

**Default value:** `true`

---

## bibtex.formatting.lineLength

Defines the maximum amount of characters per line (0 = disable) when formatting BibTeX files.

**Type:** `integer`

**Default value:** `120`
