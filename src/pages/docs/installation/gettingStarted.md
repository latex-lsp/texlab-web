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

The server may be used with [any editor that implements the Language Server Protocol](https://microsoft.github.io/language-server-protocol/implementors/tools/).
Please see the [download page](/#download) for all available editor extensions. If your editor is not listed, you need to configure it manually.

## Installation

If your editor extension does not install the TexLab server automatically, you will need to install it manually.
We provide [precompiled binaries](https://github.com/latex-lsp/texlab/releases) for Windows, Linux and macOS.
Alternatively, you can build TexLab from [source](https://github.com/latex-lsp/texlab#building-from-source).

## Requirements

For TexLab to work correctly, you will need to install a [TeX distribution](https://www.latex-project.org/get/#tex-distributions) of choice.
On Windows, you may need to install [Microsoft Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/en-US/download/details.aspx?id=48145).

## Usage

After installing an editor extension, you can simply start editing LaTeX files.
All editing features work out-of-the-box over all files in the currently opened workspace.

Documents can be built by invoking the [`latex.build`](/docs/reference/commands#latexbuild) command
or by enabling the [`latex.build.onSave`](/docs/reference/configuration#latexbuildonsave) feature.
Hanging builds can be aborted with the [`latex.build.cancel`](/docs/reference/commands#latexbuildcancel) command.
By default, [`latexmk`](https://ctan.org/pkg/latexmk?lang=en) is used as build system.
You can customize this by changing the settings in the [`latex.build`](/docs/reference/configuration#latexbuildexecutable) section.
