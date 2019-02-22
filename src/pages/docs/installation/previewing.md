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

If you want to use [SyncTeX](http://www.tug.org/TUGboat/tb29-3/tb93laurens.pdf),
you need to configure the settings in the [`latex.forwardSearch`](/docs/reference/configuration#latexforwardsearchexecutable) section
and configure your previewer to call your editor correctly.
A forward search can then be executed by invoking the [`latex.forwardSearch`](/docs/reference/commands#latexforwardsearch) command.

## Windows

On Windows, we highly recommend [SumatraPDF](https://www.sumatrapdfreader.org) as previewer
because Adobe Reader locks the opened PDF file and will therefore prevent further builds.

### SumatraPDF

You can use SumatraPDF with `latexmk` by adding the following line to your `.latexmkrc` file:

```perl
$pdf_previewer = 'start "C:\Program Files\SumatraPDF\SumatraPDF.exe" %O %S';
```

#### Forward Search

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

#### Inverse Search

Add the following line to your SumatraPDF settings file (Menu -> Settings -> Advanced Options):

```ini
InverseSearchCmdLine = "C:\Users\{User}\AppData\Local\Programs\Microsoft VS Code\Code.exe" -g "%f":%l
```

> **Note**: This configuration only works with Visual Studio Code.
> Please make sure to replace `{User}` with your Windows username.
