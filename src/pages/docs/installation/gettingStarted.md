---
path: '/docs'
title: 'Getting Started'
category: 'Installation'
order: 0
---

# Getting Started

**TexLab** is a cross-platform implementation of the [Language Server Protocol](https://microsoft.github.io/language-server-protocol) for the [LaTeX](https://www.latex-project.org/) typesetting system.
It aims to produce high quality code completion results by indexing your used packages as you type.

## Requirements

For TexLab to work correctly, you will need to install:

- A [TeX distribution](https://www.latex-project.org/get/#tex-distributions).
  All distributions that are based on [TeX Live](https://www.tug.org/texlive/) or [MikTeX](https://miktex.org/) are supported.
- A [Java 8](https://java.com/en/download) (or later) runtime environment.

> **Note**: Please make sure that both dependencies are in your `PATH` environment variable.
> If you use MikTeX, then ensure that `kpsewhich` is installed.

## Supported Editors

The server is designed to be independent of the editor. It can be used with any editor that implements the Language Server Protocol.
We currently only provide an [extension](https://github.com/efoerster/texlab-vscode) for [Visual Studio Code](https://code.visualstudio.com).
Please see the [download page](/#download) for installation instructions.

## Usage

After installing an editor extension, you can simply start editing LaTeX files.
All editing features work out-of-the-box over all files in the currently opened workspace.

> **Note**: The completion results will improve over time because the server needs to build a cache of the indexed packages first.

Documents can be built by invoking the [`latex.build`](/docs/reference/commands#latexbuild) command
or by enabling the [`latex.build.onSave`](/docs/reference/configuration#latexbuildonsave) feature.
Hanging builds can be aborted with the [`latex.build.cancel`](/docs/reference/commands#latexbuildcancel) command.
By default, [`latexmk`](https://ctan.org/pkg/latexmk?lang=en) is used as build system.
You can customize this by changing the settings in the [`latex.build`](/docs/reference/configuration#latexbuildexecutable) section.
