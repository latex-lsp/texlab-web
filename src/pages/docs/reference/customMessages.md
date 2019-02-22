---
path: '/docs/reference/custom-messages'
title: 'Custom Messages'
category: 'Reference'
order: 4
---

# Custom Messages

We extend the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/specification)
with custom messages to provide better LaTeX integration.
These messages are _optional_ and it is up to the client to support them.

## Build Request

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

## Forward Search Request

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

## Progress Notification

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
