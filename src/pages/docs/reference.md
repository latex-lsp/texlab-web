---
path: '/docs/reference'
title: 'Reference'
order: 1
---

# Reference

## Commands

This section describes the commands that a language client should define.
These commands are invoked remotely with [custom messages](#custom-messages).

---

### `latex.build`

Builds the current file.

**Hotkey:** `F5`

**Remote call:** [`textDocument/build`](#build-request)

---

### `latex.build.cancel`

Cancels the current build. This command needs to cancel the [`textDocument/build`](#build-request) request.

**Hotkey:** `Ctrl+Break`

**Remote call:** [`$/cancelRequest`](https://microsoft.github.io/language-server-protocol/specification#cancelRequest)

---

### `latex.forwardSearch`

Performs a forward search from the current file.

**Hotkey:** `Ctrl+Alt+F`

**Remote call:** [`textDocument/forwardSearch`](#forward-search-request)

---

## Configuration

This section describes the configuration settings that the server will query from the extension.

---

### `latex.build.executable`

Defines the executable of the LaTeX build tool.

**Type:** `string`

**Default value:** `latexmk`

---

### `latex.build.args`

Defines additional arguments that are passed to the configured LaTeX build tool.

**Type:** `string[]`

**Default value:** `["-pdf", "-interaction=nonstopmode", "-synctex=1"]`

---

### `latex.build.onSave`

Build after saving a file.

**Type:** `boolean`

**Default value:** `false`

---

### `latex.forwardSearch.executable`

Defines the executable of the PDF previewer.
The previewer needs to support [SyncTeX](http://www.tug.org/TUGboat/tb29-3/tb93laurens.pdf).

**Type:** `string | null`

**Default value:** `null`

---

### `latex.forwardSearch.args`

Defines additional arguments that are passed to the configured previewer to perform the forward search.
The placeholders `%f, %p, %l` will be replaced by the server.

**Placeholders:**

- `%f`: The path of the current TeX file.
- `%p`: The path of the current PDF file.
- `%l`: The current line number.

**Type:** `string[]`

**Default value:** `[]`

---

### `bibtex.formatting.lineLength`

Defines the maximum amount of characters per line (0 = disable) when formatting BibTeX files.

**Type:** `integer`

**Default value:** `120`

---

## Custom Messages

We extend the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/specification)
with custom messages to provide better LaTeX integration.
These messages are _optional_ and it is up to the client to support them.

### Build Request

The build request is sent from the client to the server to build a given LaTeX document.

_Request_:

- method: 'textDocument/build'
- params: `BuildTextDocumentParams` defined as follows:

```typescript
interface BuildTextDocumentParams {
  /**
   * The text document to build.
   */
  textDocument: TextDocumentIdentifier;
}
```

_Response_:

- result: `BuildResult` defined as follows:

```typescript
interface BuildResult {
  /**
   * The status of the build process.
   */
  status: BuildStatus;
}

enum BuildStatus {
  /**
   * The build process terminated without any errors.
   */
  Success = 0,

  /**
   * The build process terminated with errors.
   */
  Error = 1,

  /**
   * The build process failed to start or crashed.
   */
  Failure = 2,
}
```

### Forward Search Request

The forward search request is sent from the client to the server when the user requests a forward search via SyncTeX.

_Request_:

- method: 'textDocument/forwardSearch'
- params: [`TextDocumentPositionParams`](https://microsoft.github.io/language-server-protocol/specification#textdocumentpositionparams)

_Response_:

- result: `ForwardSearchResult` defined as follows:

```typescript
interface ForwardSearchResult {
  /**
   * The status of the previewer process.
   */
  status: ForwardSearchStatus;
}

enum ForwardSearchStatus {
  /**
   * The previewer process executed the command without any errors.
   */
  Success = 0,

  /**
   * The previewer process executed the command with errors.
   */
  Error = 1,

  /**
   * The previewer process failed to start or crashed.
   */
  Failure = 2,

  /**
   * The previewer command is not configured.
   */
  Unconfigured = 3,
}
```

### Progress Notification

The progress notification is sent from the server to the client to ask the client to indicate progress.

This notification is a [proposed](https://github.com/Microsoft/language-server-protocol/pull/245) addition to the Language Server Protocol.
A client that supports it needs to set the client capability `clientCapabilities.experimental.progress`.

_Notification_:

- method: 'window/progress'
- params: `ProgressParams` defined as follows:

```typescript
interface ProgressParams {
  /**
   * A unique identifier to associate multiple progress notifications with the same progress.
   */
  id: string;

  /**
   * The title of the progress.
   * This should be the same for all ProgressParams with the same id.
   */
  title: string;

  /**
   * Optional progress message to display.
   * If unset, the previous progress message (if any) is still valid.
   */
  message?: string;

  /**
   * Optional progress percentage to display.
   * If unset, the previous progress percentage (if any) is still valid.
   */
  percentage?: number;

  /**
   * Set to true on the final progress update.
   * No more progress notifications with the same ID should be sent.
   */
  done?: boolean;
}
```
