---
path: '/docs/reference/configuration'
title: 'Configuration'
category: 'Reference'
order: 3
---

# Configuration

This document describes the configuration settings that the server will query from the LSP client / extension.

---

## latex.rootDirectory

Defines the directory from which the source files get compiled.

**Type:** `string | null`

**Default value**: `null` (Visual Studio Code extension: `.`)

---

## latex.build.executable

Defines the executable of the LaTeX build tool.

**Type:** `string`

**Default value:** `latexmk`

---

## latex.build.args

Defines additional arguments that are passed to the configured LaTeX build tool.
Note that flags and their arguments need to be separate
elements in this array.
To pass the arguments `-foo bar` to a build tool,
`latex.build.args` needs to be `["-foo", "bar"]`.
The placeholder `%f` will be replaced by the server.

**Placeholders:**

- `%f`: The path of the TeX file to compile.

**Type:** `string[]`

**Default value:** `["-pdf", "-interaction=nonstopmode", "-synctex=1", "%f"]`

---

## latex.build.onSave

Build after saving a file.

**Type:** `boolean`

**Default value:** `false`

---

## latex.build.outputDirectory

Defines the directory containing the build artifacts.
Note that you need to set the output directory in `latex.build.args` too,
if you want to change the build directory.
In this case, use the `-outdir` flag for `latexmk`.

**Type:** `string`

**Default value:** `.` (the same directory as the TeX file)

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

**Type:** `string[] | null`

**Default value:** `null`

---

## latex.lint.onChange

Lint using [chktex](https://www.nongnu.org/chktex/) after changing a file.

**Type:** `boolean`

**Default value:** `false`

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

---

## bibtex.formatting.formatter

Defines the formatter to use for BibTeX formatting.
Possible values are either `texlab` or `latexindent`.

**Type:** `string`

**Default value:** `texlab`
