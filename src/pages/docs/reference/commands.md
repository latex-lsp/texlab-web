---
path: '/docs/reference/commands'
title: 'Commands'
category: 'Reference'
order: 2
---

# Commands

This document describes the commands that a language client should define.
These commands are invoked remotely with [custom messages](/docs/reference/custom-messages).

---

## latex.build

Builds the current file.

**Hotkey:** `F5`

**Remote call:** [`textDocument/build`](/docs/reference/custom-messages#build-request)

---

## latex.build.cancel

Cancel all running builds. This command needs to send the [`window/progress/cancel`](https://github.com/microsoft/vscode-languageserver-node/blob/master/protocol/src/protocol.progress.proposed.md#progress-cancel-notification) notification with the id `texlab-build-*`.

**Hotkey:** `Ctrl+Break`

**Remote call:** [`window/progress/cancel`](https://github.com/microsoft/vscode-languageserver-node/blob/master/protocol/src/protocol.progress.proposed.md#progress-cancel-notification)

---

## latex.forwardSearch

Performs a forward search from the current file.

**Hotkey:** `Ctrl+Alt+F`

**Remote call:** [`textDocument/forwardSearch`](/docs/reference/custom-messages#forward-search-request)
