---
path: '/docs/reference/commands'
title: 'Commands'
category: 'Reference'
order: 1
---

# Commands

This document describes the commands that a language client should define.
These commands are invoked remotely with [custom messages](/docs/reference/custom-messages).

---

## `latex.build`

Builds the current file.

**Hotkey:** `F5`

**Remote call:** [`textDocument/build`](/docs/reference/custom-messages#build-request)

---

## `latex.build.cancel`

Cancels the current build. This command needs to cancel the [`textDocument/build`](/docs/reference/custom-messages#build-request) request.

**Hotkey:** `Ctrl+Break`

**Remote call:** [`$/cancelRequest`](https://microsoft.github.io/language-server-protocol/specification#cancelRequest)

---

## `latex.forwardSearch`

Performs a forward search from the current file.

**Hotkey:** `Ctrl+Alt+F`

**Remote call:** [`textDocument/forwardSearch`](/docs/reference/custom-messages#forward-search-request)
