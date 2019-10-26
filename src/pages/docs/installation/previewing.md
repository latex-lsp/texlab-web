---
path: '/docs/installation/previewing'
title: 'Previewing'
category: 'Installation'
order: 1
---

# Previewing

We believe that previewing should be a concern of the build system.
With [`latexmk`](https://ctan.org/pkg/latexmk?lang=en), you can enable the preview feature by adding the `-pv` flag
to the [`latex.build.args`](/docs/reference/configuration/#latexbuildargs) setting.
After that, the configured previewer will start on each rebuild of the document.
Alternatively, use the `-pvc` flag to tell the previewer to continuously check for updates, 
instead of opening a new window each time a build completes.

If you want to use [SyncTeX](http://www.tug.org/TUGboat/tb29-3/tb93laurens.pdf),
you need to configure the settings in the [`latex.forwardSearch`](/docs/reference/configuration#latexforwardsearchexecutable) section
and configure your previewer to call your editor correctly.
A forward search can then be executed by invoking the [`latex.forwardSearch`](/docs/reference/commands#latexforwardsearch) command.

In the following sections, we will give configurations for popular viewers with `latexmk` and Visual Studio Code.
For other build systems and editors, please refer to their respective manuals.

---

## SumatraPDF

We highly recommend [SumatraPDF](https://www.sumatrapdfreader.org) on Windows
because Adobe Reader locks the opened PDF file and will therefore prevent further builds.
To use [SumatraPDF](https://www.sumatrapdfreader.org) as previewer, add the following line to your `%USERPROFILE%/.latexmkrc` file:

```perl
$pdf_previewer = 'start "C:\Program Files\SumatraPDF\SumatraPDF.exe" %O %S';
```

### Forward Search

Add the following lines to your editor config:

```json
{
  "latex.forwardSearch.executable": "C:/Program Files/SumatraPDF/SumatraPDF.exe",
  "latex.forwardSearch.args": [
    "-reuse-instance",
    "%p",
    "-forward-search",
    "%f",
    "%l"
  ]
}
```

### Inverse Search

Add the following line to your SumatraPDF settings file (Menu -> Settings -> Advanced Options):

```ini
InverseSearchCmdLine = "C:\Users\{User}\AppData\Local\Programs\Microsoft VS Code\Code.exe" -g "%f":%l
```

> **Note**: Please make sure to replace `{User}` with your Windows username.

You can execute the search by pressing `Alt+DoubleClick` in the PDF document.

---

## Evince

The SyncTeX feature of [Evince](https://wiki.gnome.org/Apps/Evince) requires communication via D-Bus.
In order to use it from the command line, install the [evince-synctex](https://github.com/latex-lsp/evince-synctex) script.
Then add the following line to your `~/.latexmkrc` file:

```perl
$pdf_previewer = 'start evince-synctex %S "code -g %f:%l"';
```

### Forward Search

Add the following lines to your editor config:

```json
{
  "latex.forwardSearch.executable": "evince-synctex",
  "latex.forwardSearch.args": ["-f", "%l", "%p", "\"code -g %f:%l\""]
}
```

### Inverse Search

The inverse search feature is already configured if you use `evince-synctex`.
You can execute the search by pressing `Ctrl+Click` in the PDF document.

---

## Okular

To use [Okular](https://okular.kde.org/) as previewer, add the following line to your `~/.latexmkrc` file:

```perl
$pdf_previewer = 'start okular';
```

### Forward Search

Add the following lines to your editor config:

```json
{
  "latex.forwardSearch.executable": "okular",
  "latex.forwardSearch.args": ["--unique", "file:%p#src:%l%f"]
}
```

### Inverse Search

Change the editor of Okular (Settings -> Configure Okular... -> Editor) to "Custom Text Editor" and set the following command:

```bash
code -g "%f":%l
```

You can execute the search by pressing `Shift+Click` in the PDF document.

---

## Zathura

To use [Zathura](https://pwmt.org/projects/zathura/) as previewer, add the following line to your `~/.latexmkrc` file:

```perl
$pdf_previewer = 'start zathura';
```

### Forward Search

Add the following lines to your editor config:

```json
{
  "latex.forwardSearch.executable": "zathura",
  "latex.forwardSearch.args": ["--synctex-forward", "%l:1:%f", "%p"]
}
```

### Inverse Search

Add the following lines to your `~/.config/zathura/zathurarc` file:

```bash
set synctex true
set synctex-editor-command "code -g %{input}:%{line}"
```

You can execute the search by pressing `Alt+Click` in the PDF document.

---

## qpdfview

To use [qpdfview](https://launchpad.net/qpdfview) as previewer, add the following line to your `~/.latexmkrc` file:

```perl
$pdf_previewer = 'start qpdfview --unique %S';
```

### Forward Search

Add the following lines to your editor config:

```json
{
  "latex.forwardSearch.executable": "qpdfview",
  "latex.forwardSearch.args": ["--unique", "%p#src:%f:%l:1"]
}
```

### Inverse Search

Change the source editor setting (Edit -> Settings... -> Behavior -> Source editor) to:

```bash
code -g "%1":%2
```

and select a mouse button modifier (Edit -> Settings... -> Behavior -> Modifiers -> Mouse button modifiers -> Open in Source Editor)
of choice.
You can execute the search by pressing `Modifier+Click` in the PDF document.

---

## Skim

We recommend [Skim](https://skim-app.sourceforge.io/) on macOS since it is the only native viewer that supports SyncTeX.
To use [Skim](https://skim-app.sourceforge.io/) as previewer, add the following line to your `~/.latexmkrc` file:

```perl
$pdf_previewer = 'open -a Skim';
```

Additionally, enable the "Reload automatically" setting in the Skim preferences (Skim -> Preferences -> Sync -> Check for file changes).

### Forward Search

Add the following lines to your editor config:

```json
{
  "latex.forwardSearch.executable": "/Applications/Skim.app/Contents/SharedSupport/displayline",
  "latex.forwardSearch.args": ["%l", "%p", "%f"]
}
```

### Inverse Search

Select the Visual Studio Code preset in the Skim preferences (Skim -> Preferences -> Sync -> PDF-TeX Sync support).
You can execute the search by pressing `Shift+⌘+Click` in the PDF document.
