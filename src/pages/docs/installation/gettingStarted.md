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

### Linux

If you use Linux, you should install TexLab from the following repositories.

#### Debian and Ubuntu based distributions

We maintain a Debian repository for distributions that use the APT package manager. The following script will import the key and add the repository:

```shell
wget -qO - https://bintray.com/user/downloadSubjectPublicKey?username=efoerster | sudo apt-key add -
echo "deb https://dl.bintray.com/efoerster/texlab-deb stable main" | sudo tee -a /etc/apt/sources.list
```

Then update the package list and install the `texlab` package:

```shell
sudo apt-get update
sudo apt-get install texlab
```

#### RHEL, Fedora, CentOS and SUSE based distributions

We maintain a RPM repository for distributions that use the RPM package manager. The following script will import the key and add the repository:

```shell
sudo rpm --import https://bintray.com/user/downloadSubjectPublicKey?username=efoerster
sudo sh -c 'echo -e "[texlab]\nname=TexLab\nbaseurl=https://dl.bintray.com/efoerster/texlab-rpm\ngpgcheck=1\ngpgkey=https://bintray.com/user/downloadSubjectPublicKey?username=efoerster\nenabled=1" > /etc/yum.repos.d/texlab.repo'
```

Then update the package list and install the `texlab` package, e.g. by using `dnf`:

```shell
dnf check-update
sudo dnf install texlab
```

#### Arch Linux based distributions

We maintain an [AUR package](https://aur.archlinux.org/packages/texlab/).
For installation instructions, see the [Arch Linux wiki](https://wiki.archlinux.org/index.php/Arch_User_Repository#Build_and_install_the_package).

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
