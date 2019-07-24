---
path: '/docs'
title: 'Getting Started'
category: 'Installation'
order: 0
---

# Getting Started

**TexLab** is a cross-platform implementation of the [Language Server Protocol](https://microsoft.github.io/language-server-protocol)
for the [LaTeX](https://www.latex-project.org/) typesetting system.
It aims to produce high quality code completion results by indexing your used packages as you type.

The server can be used with [any editor that implements the Language Server Protocol](https://microsoft.github.io/language-server-protocol/implementors/tools/).
You can either install an editor extension that provides an out-of-box experience
or download the server binaries and configure your editor manually.
Please see the [download page](/#download) for all available options.

## Requirements

For TexLab to work correctly, you will need to install:

- A [TeX distribution](https://www.latex-project.org/get/#tex-distributions).
- The [Node.js](https://nodejs.org/) runtime. This is an _optional dependency_ used for the citation rendering feature.
- On Windows, you may need to install [Microsoft Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/en-US/download/details.aspx?id=48145).

> **Note**: Please make sure that all dependencies are in your `PATH` environment variable.

## Usage

After installing an editor extension, you can simply start editing LaTeX files.
All editing features work out-of-the-box over all files in the currently opened workspace.

Documents can be built by invoking the [`latex.build`](/docs/reference/commands#latexbuild) command
or by enabling the [`latex.build.onSave`](/docs/reference/configuration#latexbuildonsave) feature.
Hanging builds can be aborted with the [`latex.build.cancel`](/docs/reference/commands#latexbuildcancel) command.
By default, [`latexmk`](https://ctan.org/pkg/latexmk?lang=en) is used as build system.
You can customize this by changing the settings in the [`latex.build`](/docs/reference/configuration#latexbuildexecutable) section.
