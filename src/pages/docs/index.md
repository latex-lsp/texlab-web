---
path: '/docs'
title: 'Getting Started'
order: 0
---

# Getting Started

**TexLab** is a cross-platform implementation of the [Language Server Protocol](https://microsoft.github.io/language-server-protocol) for the [LaTeX](https://www.latex-project.org/) typesetting system.
It aims to produce high quality code completion results by indexing your used packages as you type.

## Requirements

In order to start the server, you will need to install:

- A [TeX distribution](https://www.latex-project.org/get/#tex-distributions) of choice.
- A [Java 8](https://java.com/en/download) (or later) runtime environment.

> **Note**: Please make sure that both dependencies are in your `PATH` environment variable.

## Supported editors

The server is designed to be independent of the editor. It can be used with any editor that implements the Language Server Protocol.
We currently only provide an [extension](https://github.com/efoerster/texlab-vscode) for [Visual Studio Code](https://code.visualstudio.com).
Please see the [download page](/download) for installation instructions.

## Usage

After you installed an editor extension, you can simply start editing LaTeX files.
All editing features work out-of-the-box.
Moreover, it is not necessary to configure master/child files, since they are detected automatically.

### Build system

Documents can be built by invoking the `latex.build` command or by enabling the `latex.build.onSave` feature.
Hanging builds can be aborted with the `latex.build.cancel` command.

By default, [`latexmk`](https://ctan.org/pkg/latexmk?lang=en) is used as build system.
You can customize this by changing the settings in the `latex.build` section.
However, we will only consider `latexmk` in the following sections.

#### Previewing

We believe that previewing should be a concern of the build system.
With `latexmk` you can enable the preview feature by adding the `-pv` flag to the `latex.build.args` setting.

> **Note**: Do not use the `-pvc` option of `latexmk`. Enable the `latex.build.onSave` feature and use the `-pv` option instead.

In order to use [SyncTeX](http://www.tug.org/TUGboat/tb29-3/tb93laurens.pdf), you need to configure the settings in the `latex.forwardSearch` section
and configure your previewer to call your editor correctly.
For the sake of simplicity, we will only give configuration examples for Visual Studio Code in the following sections.

##### SumatraPDF

On Windows, we highly recommend [SumatraPDF](https://www.sumatrapdfreader.org) as previewer
because Adobe Reader locks the opened PDF file and will therefore prevent further builds.
You can use SumatraPDF with `latexmk` by adding the following line to your `.latexmkrc` file:

```perl
$pdf_previewer = 'start "C:\Program Files\SumatraPDF\SumatraPDF.exe" %O %S';
```

###### Forward Search

Add the following lines to your editor config:

```json
  "latex.forwardSearch.executable": "C:/Program Files/SumatraPDF/SumatraPDF.exe",
  "latex.forwardSearch.args": [
    "-reuse-instance",
    "%p",
    "-forward-search",
    "%f",
    "%l"
  ]
```

###### Inverse Search

Add the following line to your SumatraPDF settings file (Menu -> Settings -> Advanced Options):

```ini
InverseSearchCmdLine = "C:\Users\{User}\AppData\Local\Programs\Microsoft VS Code\Code.exe" -g "%f":%l
```

> **Note**: This configuration only works with Visual Studio Code.
> Please make sure to replace `{User}` with your Windows username.
